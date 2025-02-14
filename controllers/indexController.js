import * as db from "../db/queries.js";

export const getIndex = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

export const getNew = (req, res) => {
  res.render("form");
};

export const addMessage = async (req, res) => {
  const username = req.body.user;
  const message = req.body.message;
  console.log(username, message);
  await db.addMessage(username, message);
  res.redirect("/");
};
