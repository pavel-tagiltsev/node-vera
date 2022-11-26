import bot from "../bot/index.js";

export async function reportError(id, error) {
  console.error(id, error);

  try {
    await bot.telegram.sendMessage(
      process.env.DEV_CHAT_ID,
      `ERROR - ${id}\r\n${error}`
    );
  } catch (err) {
    console.error(err);
  }

  throw error;
}
