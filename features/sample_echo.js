/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function (controller) {
  controller.hears("hello", "message,direct_message", async (bot, message) => {
    await bot.reply(
      message,
      "Hello, how can I help you? (Quick Reply options: (Recommend a movie), (Not at all)"
    );
  });
  controller.hears(
    "Recommend a movie",
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, "Sure! You should watch Die Hard tonight!");
    }
  );
  controller.hears(
    "thank you",
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, "You're welcome");
    }
  );
};
