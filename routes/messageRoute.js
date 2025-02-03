import { Router } from "express";
import { showMessage } from "../controllers/messageController.js";

export const messageRouter = Router();

messageRouter.get("/:id", showMessage);
