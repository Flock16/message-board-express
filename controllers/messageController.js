// import { messages } from "../db.js";
import * as db from "../db/queries.js";

export const showMessage = async (req, res) => {
  let messageId = req.params.id;
  const { rows } = await db.getMessage(messageId);
  const message = rows[0];
  res.render("message", { message: message });

  // res.render("message", { message: messages[messageId] });
};
