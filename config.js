module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  APP_URL: process.env.APP_URL || 'http://localhost:3000',
  WEBHOOK_PATH: '/webhook',
  PORT: process.env.PORT || 3000,
  PAGES: [
    { id: 'home', title: 'Home', emoji: '🏠' },
    { id: 'training', title: 'Training', emoji: '🂪' },
    { id: 'nutrition', title: 'Nutrition', emoji: '🍟' },
    { id: 'style', title: 'Style', emoji: '📱' },
    { id: 'grooming', title: 'Grooming', emoji: '🙸' },
    { id: 'profile', title: 'Profile', emoji: '👤' }
  ]
};
