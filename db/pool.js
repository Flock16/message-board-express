import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
  // connectionString: `${process.env.DATABASE_URL}`,
  connectionString: `postgresql://postgres:FUShcvjnUlOzPxexrRySrUrPqnKzxfyB@viaduct.proxy.rlwy.net:48971/railway`,
});

export default pool;
