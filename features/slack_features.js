/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { SlackDialog } = require("botbuilder-adapter-slack");

module.exports = function (controller) {
  controller.ready(async () => {
    if (process.env.MYTEAM) {
      let bot = await controller.spawn(process.env.MYTEAM);
      await bot.startConversationInChannel(
        process.env.MYCHAN,
        process.env.MYUSER
      );
      bot.say("I AM AWOKEN.");
    }
  });
};
