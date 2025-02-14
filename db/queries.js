import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(username, message) {
  await pool.query(
    `INSERT INTO messages (username, message) VALUES ('${username}', '${message}');`
  );
}

async function getMessage(messageId) {
  const message = await pool.query(
    `SELECT * FROM messages WHERE id=${messageId}`
  );
  return message;
}

export { getAllMessages, addMessage, getMessage };
