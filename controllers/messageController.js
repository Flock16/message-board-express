import { messages } from "../db.js";

export const showMessage = (req, res) => {
  let messageId = req.params.id;
  res.render("message", { message: messages[messageId] });
};
