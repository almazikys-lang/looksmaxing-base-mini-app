const crypto = require('crypto');
const bot = require('../bot');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify signature
    const signature = req.headers['x-telegram-bot-api-secret-sha256'];
    const hash = crypto
      .createHmac('sha256', process.env.BOT_TOKEN)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (signature !== hash) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Process update
    await bot.handleUpdate(req.body);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
