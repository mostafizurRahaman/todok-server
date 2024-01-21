import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // ** for searching data:
  search(searchFields: string[]) {
    const searchTerm = this.query.searchTerm || "";

    this.modelQuery = this.modelQuery.find({
      $or: searchFields.map((field) => {
        return {
          [field]: { $regex: searchTerm, $options: "i" },
        };
      }),
    } as FilterQuery<T>);

    return this;
  }

  // ** for filtering data:
  filter() {
    const queryObject = this.query;

    const excludedFields = ["sort", "limit", "page", "searchTerm", "fields"];

    excludedFields.forEach((field) => delete queryObject[field]);

    this.modelQuery = this.modelQuery.find(queryObject as FilterQuery<T>);
    return this;
  }

  // ** for sorting data:
  sort() {
    const sort =
      (this.query.sort as string)?.split("")?.join(" ") || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }

  // **  paginate model query:
  paginate() {
    const page = Number(this.query.page as string) || 1;
    const limit = Number(this.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  // ** for select fields :
  fields() {
    const fields = (this.query.fields as string)?.split("")?.join(" ") || "";
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
