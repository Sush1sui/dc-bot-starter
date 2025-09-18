import "dotenv/config";
import { isBotOnline, startbot } from "../bot";

const SERVER_LINK = process.env.SERVER_LINK;
let timeoutId: NodeJS.Timeout;

export const pingBot = () => {
  if (!SERVER_LINK) return;

  const attemptPing = () => {
    fetch(SERVER_LINK)
      .then((res) => res.text())
      .then((text) => {
        console.log(`Ping successful: ${text}`);
        if (!isBotOnline) startbot();
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        console.log(`Ping failed, retrying: ${err}`);
        timeoutId = setTimeout(attemptPing, 5000);
      });
  };

  attemptPing();
};