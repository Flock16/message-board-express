import pkg from "pg";
const { Client } = pkg;
import "dotenv/config";
import * as dotenvExpand from "dotenv-expand";
import * as dotenv from "dotenv";

dotenvExpand.expand(dotenv.config());

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
    VALUES
        ('Amando', 'Hi there!');
        
INSERT INTO messages (username, message, created)
    VALUES
        ('Charles', 'Hello World!', '2024-02-12');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${process.env.DATABASE_URL}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
