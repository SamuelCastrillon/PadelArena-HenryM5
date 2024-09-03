import { configDotenv } from "dotenv";

configDotenv({ path: ".env.local" });

export const CURRENT_APP_URL = process.env.CURRENT_APP_URL;
