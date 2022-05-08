import "dotenv/config";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { commands } from "./commands";
import { Client, Intents } from "discord.js";

const { APP_ID, TEST_SERVER_ID, TOKEN } = process.env;

(async () => {
  const rest = new REST({ version: "9" }).setToken(TOKEN ?? "");

  try {
    await rest.put(
      Routes.applicationGuildCommands(APP_ID ?? "", TEST_SERVER_ID ?? ""),
      { body: commands }
    );
  } catch (e) {
    console.log(e);
    console.log("Failed to register commands.");
  }

  /**
   * Start of Bot
   */
  const client = new Client({
    intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS]
  });

  client.on("interactionCreate", async (int) => {
    if (!int.isCommand()) return;

    switch (int.commandName) {
      case "sl":
        const url = int.options.getString("url");
    }
  });

  client.login(TOKEN);
})();
