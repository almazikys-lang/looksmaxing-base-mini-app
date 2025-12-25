const { Telegraf } = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to Looksmaxing Base v2.0!', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Open Mini App',
          web_app: { url: config.APP_URL }
        }
      ]]
    }
  });
});

bot.help((ctx) => {
  ctx.reply('This is Looksmaxing Base v2.0 Mini App');
});

module.exports = bot;
