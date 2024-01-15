import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";
import configs from "./app/configs";
import colors from "colors";
let server: Server;

async function main() {
  try {
    await mongoose.connect(configs.database_url as string);
    server = app.listen(configs.port, () => {
      console.log("Server is running now".green.bold);
      console.log("Database Is Connected Successfully!!😃".green.bold);
    });
  } catch (err) {
    console.log(err);
    console.log(colors.blue.bold("Database not connected successfully!!!"));
  }
}

// ** call the main function:
main();

process.on("unhandledRejection", () => {
  console.log("Server detected unhandledRejection!!😡".red);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("Server detected uncaughtException!!😡".red);
  process.exit(1);
});
