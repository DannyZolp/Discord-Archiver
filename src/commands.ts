import { SlashCommandBuilder } from "@discordjs/builders";

export const commands = [
  new SlashCommandBuilder()
    .setName("sl")
    .setDescription(
      "[save link] Will save a YouTube video or DiscordCDN content to the database"
    )
    .addStringOption((url) =>
      url
        .setName("url")
        .setDescription("The URL you wish to save")
        .setRequired(true)
    )
    .addStringOption((name) =>
      name
        .setName("name")
        .setDescription("What the file should be named")
        .setRequired(false)
    ),
  new SlashCommandBuilder()
    .setName("sf")
    .setDescription(
      "[save file] Will save a provided image or video to the database"
    )
    .addAttachmentOption((file) =>
      file
        .setName("file")
        .setDescription("The file you wish to save")
        .setRequired(true)
    )
    .addStringOption((name) =>
      name
        .setName("name")
        .setDescription("What the file should be named")
        .setRequired(false)
    )
].map((c) => c.toJSON());
