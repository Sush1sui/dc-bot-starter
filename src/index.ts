import "dotenv/config";
import express from "express";
import "./bot";
import { pingBot } from "./utils/helpers";
import { client, startbot } from "./bot";
const PORT = process.env.PORT || 6969;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

pingBot();
setInterval(pingBot, 600000); // Ping every 10 minutes

setTimeout(() => {
  if (!client.isReady()) startbot();
}, 30000);
