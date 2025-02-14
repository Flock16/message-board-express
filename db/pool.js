import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
  // connectionString: `${process.env.DATABASE_URL}`,
  connectionString: `${process.env.DB_URL} `,
});

export default pool;
