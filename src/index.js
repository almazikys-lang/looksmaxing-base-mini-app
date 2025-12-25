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

// ===== BOT CONFIGURATION =====
const miniAppUrl = process.env.MINI_APP_URL || 'https://looksmaxing-base-mini-app.onrender.com/';

// /start command - Main entry point
bot.start((ctx) => {
  ctx.reply(
    '🏋️ Welcome to Looksmaxing Base v2.0!\n\n' +
    'Achieve your best self with our comprehensive guide to looking maxed out in every way.\n\n' +
    '✨ Features:\n' +
    '- Facial Care routines\n' +
    '- Fitness programs\n' +
    '- Fashion styling\n' +
    '- Collect points and rewards\n\n' +
    '🚀 Open the app below:',
    {
      reply_markup: {
        inline_keyboard: [
          [{
            text: '🚀 Open Looksmaxing Base',
            web_app: { url: miniAppUrl }
          }]
        ]
      }
    }
  );
});

// /help command
bot.help((ctx) => {
  ctx.reply(
    '📖 Help & Information\n\n' +
    '/start - Launch the app\n' +
    '/help - Show this message\n' +
    '/about - About Looksmaxing Base\n' +
    '/sections - Available sections\n' +
    '/status - Check app status\n' +
    '/contact - Contact support\n'
  );
});

// /about command
bot.command('about', (ctx) => {
  ctx.reply(
    '💎 About Looksmaxing Base v2.0\n\n' +
    'A complete guide to maximizing your appearance and confidence.\n\n' +
    '🎯 Our Mission:\n' +
    'Help you achieve your best self through science-backed routines and styling tips.\n\n' +
    '👥 Community:\n' +
    'Join thousands improving their looksmaxing journey.\n\n' +
    '📱 Version: 2.0\n' +
    '⚡ Status: Active & Growing'
  );
});

// /sections command
bot.command('sections', (ctx) => {
  ctx.reply(
    '📚 Available Sections\n\n' +
    '😊 Facial Care\n' +
    'Skincare routines, treatments, and maintenance\n\n' +
    '💪 Fitness\n' +
    'Workout programs, nutrition, and gains\n\n' +
    '👔 Fashion\n' +
    'Styling tips, wardrobe essentials, and trends\n\n' +
    'Start with /start to explore all sections!'
  );
});

// /status command
bot.command('status', (ctx) => {
  ctx.reply(
    '✅ Looksmaxing Base Status\n\n' +
    'Bot: Online ✓\n' +
    'Mini App: Running ✓\n' +
    'Database: Connected ✓\n' +
    'Users Active: Many ✓\n' +
    'System Health: Excellent ✓'
  );
});

// /contact command
bot.command('contact', (ctx) => {
  ctx.reply(
    '📧 Contact & Support\n\n' +
    'Having issues?\n' +
    'Email: support@looksmaxing.com\n' +
    'Telegram: @looksmaxing_support\n\n' +
    'Response time: 24 hours\n' +
    'Available: Always'
  );
});

// Default message handler
bot.on('message', (ctx) => {
  if (!ctx.message.text.startsWith('/')) {
    ctx.reply(
      'Hello! 👋\n\n' +
      'I\'m the Looksmaxing Base bot. Use /help to see available commands or /start to launch the app!'
    );
  }
});

// ===== REST API ENDPOINTS =====

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', bot: 'active' });
});

// User data API
app.post('/api/user-data', (req, res) => {
  const { user } = req.body;
  res.json({
    message: 'User data received',
    user: user,
    timestamp: new Date(),
    pointsEarned: Math.floor(Math.random() * 100)
  });
});

// Get products
app.get('/api/products', (req, res) => {
  const products = {
    facial: [
      { id: 1, name: 'Premium Skincare Kit', price: 49.99, category: 'facial' },
      { id: 2, name: 'Retinol Serum', price: 29.99, category: 'facial' },
      { id: 3, name: 'Clay Mask', price: 19.99, category: 'facial' }
    ],
    fitness: [
      { id: 4, name: 'Protein Powder', price: 39.99, category: 'fitness' },
      { id: 5, name: 'Pre-Workout', price: 29.99, category: 'fitness' },
      { id: 6, name: 'Creatine', price: 24.99, category: 'fitness' }
    ],
    fashion: [
      { id: 7, name: 'Premium T-Shirt', price: 39.99, category: 'fashion' },
      { id: 8, name: 'Designer Jeans', price: 99.99, category: 'fashion' },
      { id: 9, name: 'Sneakers', price: 129.99, category: 'fashion' }
    ]
  };
  res.json(products);
});

// Process purchase
app.post('/api/purchase', (req, res) => {
  const { items, user } = req.body;
  res.json({
    success: true,
    orderId: 'ORD-' + Date.now(),
    items: items,
    totalPoints: items.length * 50,
    message: 'Purchase successful! Points added.'
  });
});

// Bot webhook endpoint (optional, for production)
app.post('/api/webhook', (req, res) => {
  bot.handleUpdate(req.body).catch(err => {
    console.error('Webhook error:', err);
    res.status(400).send('error');
  });
  res.sendStatus(200);
});

// ===== SERVER SETUP =====

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Web App URL: ${miniAppUrl}`);
  console.log(`📱 Telegram Bot: @looksmaxing_base_bot`);
});

// Bot launch with error handling
try {
  bot.launch();
  console.log('🤖 Bot launched successfully');
} catch (error) {
  console.log('⚠️ Bot polling: ', error.message);
}

// Graceful shutdown
process.once('SIGINT', () => {
  bot.stop('SIGINT');
  console.log('Bot stopped');
});
process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
  console.log('Bot stopped');
});
