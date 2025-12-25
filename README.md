# Looksmaxing Base v2.0 - Telegram Mini App

A complete Telegram Mini App for self-improvement and personal development with comprehensive guides on facial care, fitness training, and fashion styling.

## 🚀 Live Demo

- **Bot**: [@looksmaxing_base_bot](https://t.me/looksmaxing_base_bot)
- **Mini App**: https://looksmaxing-base-mini-app.onrender.com/
- **Status**: ✅ Active and Running

## ✨ Features

- 📱 **Telegram Mini App Integration** - Seamless web app embedded in Telegram
- 🎯 **Interactive Sections**
  - Facial Care routines and tips
  - Fitness training programs
  - Fashion styling guide
- 💰 **Points & Rewards System** - Collect points for completing sections
- 📊 **User Profile** - Track progress and achievements
- 🎨 **Modern UI** - Beautiful TK Store-inspired design
- 💬 **Bot Commands** - Helper commands for user guidance
- 🔄 **Real-time Updates** - Dynamic content loading

## 🛠️ Tech Stack

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Telegram WebApp API
  - Responsive Design

- **Backend**:
  - Node.js with Express
  - Telegraf Bot Framework
  - REST API endpoints

- **Hosting**:
  - Render.com (Web Service)
  - GitHub (Version Control)

## 📋 Project Structure

```
looksmaxing-base-mini-app/
├── public/
│   ├── index.html          # Main Mini App HTML
│   ├── css/
│   │   └── style.css       # App styling
│   └── js/
│       └── app.js          # Main app logic
├── src/
│   └── index.js            # Bot and server configuration
├── routes/
│   └── static.js           # Static file routes
├── bot.js                  # Bot commands and handlers
├── config.js               # Configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Telegram Bot Token
- Render.com account (for hosting)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/almazikys-lang/looksmaxing-base-mini-app.git
cd looksmaxing-base-mini-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
BOT_TOKEN=your_telegram_bot_token
MINI_APP_URL=https://looksmaxing-base-mini-app.onrender.com/
PORT=3000
```

4. Start the application:
```bash
npm start
```

## 🤖 Bot Commands

| Command | Description |
|---------|-------------|
| `/start` | Launch the Mini App with web app button |
| `/help` | Show available commands |
| `/about` | Information about Looksmaxing Base |
| `/sections` | List all available sections |
| `/status` | Check bot and app status |
| `/contact` | Get support information |

## 📡 API Endpoints

### Health Check
```
GET /health
```
Response:
```json
{"status":"ok","bot":"active"}
```

### User Data
```
POST /api/user-data
Body: {"user": {...}}
```
Response:
```json
{
  "message": "User data received",
  "user": {...},
  "timestamp": "2024-12-25T...",
  "pointsEarned": 50
}
```

### Get Products
```
GET /api/products
```
Response:
```json
{
  "facial": [...],
  "fitness": [...],
  "fashion": [...]
}
```

### Process Purchase
```
POST /api/purchase
Body: {"items": [...], "user": {...}}
```
Response:
```json
{
  "success": true,
  "orderId": "ORD-1234567890",
  "items": [...],
  "totalPoints": 250,
  "message": "Purchase successful! Points added."
}
```

## 🎨 Mini App Features

### Sections

Each section provides:
- 📖 Educational content
- 💡 Practical tips and guides
- 🏆 Points reward system
- 📱 Mobile-optimized interface

### Interactive Elements

- Click sections to view details
- Collect points for engagement
- View progress in profile
- Navigation between sections

## 🔧 Customization

### Adding New Sections

Edit `public/index.html` and add new section cards in the grid:

```html
<div class="section-card blue-card" onclick="loadSection('new-section')">
  <div class="card-icon">🎯</div>
  <h2>New Section</h2>
  <p>Description</p>
  <span class="badge">Points</span>
</div>
```

### Custom Styling

Modify `public/css/style.css` for custom colors and layouts.

## 📱 Telegram WebApp API Integration

The app uses Telegram's WebApp API for:
- User authentication
- App appearance control
- Back button handling
- Ready state management

```javascript
TelegramWebApp.ready();
const user = TelegramWebApp.initDataUnsafe.user;
```

## 🐛 Troubleshooting

### Bot not responding
1. Check BOT_TOKEN is correct
2. Verify bot is not stopped
3. Check Render.com logs

### Mini App not loading
1. Verify MINI_APP_URL is accessible
2. Check browser console for errors
3. Ensure CORS is properly configured

### Points not updating
1. Check server health with `/health` endpoint
2. Verify API endpoints are working
3. Check browser network tab

## 📊 Deployment

The app is deployed on Render.com with:
- Automatic GitHub integration
- Environment variables configured
- Health checks enabled
- Auto-restart on failure

### Deploy Your Own

1. Fork the repository
2. Create Render.com account
3. Connect GitHub repository
4. Set environment variables
5. Deploy web service

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📧 Support

For support, reach out via:
- Email: support@looksmaxing.com
- Telegram: [@looksmaxing_support](https://t.me/looksmaxing_support)

## 🙏 Acknowledgments

- Built with Telegraf bot framework
- Hosted on Render.com
- Inspired by TK Store design

---

**Version**: 2.0
**Status**: Production Ready ✅
**Last Updated**: December 2024
