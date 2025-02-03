import { messages } from "../db.js";

export const getIndex = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

export const getNew = (req, res) => {
  res.render("form");
};

export const addMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
};
