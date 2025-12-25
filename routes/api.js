const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const validateInitData = (initData) => {
  const data = new URLSearchParams(initData);
  const hash = data.get('hash');
  data.delete('hash');
  
  const arr = Array.from(data.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  const str = arr.map(([key, value]) => `${key}=${value}`).join('\n');
  
  const hmac = crypto.createHmac('sha256', process.env.BOT_TOKEN).update(str).digest('hex');
  return hmac === hash;
};

router.get('/pages', (req, res) => {
  const config = require('../config');
  res.json({ pages: config.PAGES });
});

router.post('/page/:id', (req, res) => {
  const { initData } = req.body;
  
  if (!initData || !validateInitData(initData)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const pageId = req.params.id;
  const config = require('../config');
  const page = config.PAGES.find(p => p.id === pageId);
  
  if (!page) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  res.json({ page });
});

module.exports = router;
