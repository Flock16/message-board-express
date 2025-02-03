import { Router } from "express";
import {
  getIndex,
  getNew,
  addMessage,
} from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get("/new", getNew);
indexRouter.post("/new", addMessage);
indexRouter.get("/", getIndex);
