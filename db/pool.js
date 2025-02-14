import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
  // connectionString: `${process.env.DATABASE_URL}`,
  connectionString: `http://postgres.railway.internal:5432`,
});

export default pool;
