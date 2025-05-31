import { Client, Collection, GatewayIntentBits } from "discord.js";
import loadCommands from "./loadCommands";
import loadEvents from "./loadEvents";

export interface CustomClient extends Client {
  commands: Collection<string, any>;
}

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
  ],
}) as CustomClient;

client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.login(process.env.bot_token);

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});
