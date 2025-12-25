require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Telegraf } = require('telegraf');
const path = require('path');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Telegram Mini App API endpoint
app.post('/api/user-data', (req, res) => {
  const { user } = req.body;
  res.json({
    message: 'User data received',
    user: user,
    timestamp: new Date()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize bot
bot.on('message', (ctx) => {
  ctx.reply('👋 Welcome to Looksmaxing Base Mini App!\n\nUse /start to launch the app.');
});

bot.command('start', (ctx) => {
  const miniAppUrl = process.env.MINI_APP_URL || 'https://example.com';
  ctx.reply('Opening Looksmaxing Base v2.0 Mini App...', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🚀 Open Mini App',
          web_app: { url: miniAppUrl }
        }
      ]]
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
