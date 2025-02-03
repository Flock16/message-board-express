import express from "express";
import { indexRouter } from "./routes/indexRoute.js";
import { messageRouter } from "./routes/messageRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// const __dirname = import.meta.dirname;
// import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
