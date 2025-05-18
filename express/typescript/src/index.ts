import express from "express";
import type { Express } from "express";
import dotenv from "dotenv";
// create .env file & change the config path
dotenv.config({ path: ".env.sample" });

const app: Express = express();
const port = Number(process.env.PORT) || 3000;
const domain = process.env.DOMAIN || "http://localhost";

async function startServer() {
  try {
    // any async db connection
    app.listen(port, () =>
      console.log(`⚙️ Server listening @ ${domain}:${port}`),
    );
  } catch (error) {
    console.log("Server failed to start:", error);
    process.exit(1);
  }
}

startServer();
