// Looksmaxing Base v2.0 Mini App - Complete Functional Implementation
// Inspired by TK Store Design

let cart = [];
let currentPoints = 0;
let userProfile = null;

// Initialize Telegram Web App
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.MainButton.setText('Go Back').onClick(() => showHome());
}

// ===== SECTION CONTENT FUNCTIONS =====

function loadSection(sectionId) {
  console.log('Loading section:', sectionId);
  
  switch(sectionId) {
    case 'facial':
      showFacialContent();
      break;
    case 'fitness':
      showFitnessContent();
      break;
    case 'fashion':
      showFashionContent();
      break;
    default:
      showHome();
  }
}

function showFacialContent() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <h2 style="font-size: 22px; margin-bottom: 10px;">😊 Facial Care</h2>
      <p style="color: #b0b0b0;">Уход за лицом и красота</p>
    </div>
    <div class="content-items" style="display: grid; gap: 12px;">
      <div class="content-item" onclick="addToCart('Skincare Routine', 100)" style="background: linear-gradient(135deg, #1e3a8a 0%, #0f5ee8 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🧴 Комплекс ухода</h3>
        <p>100 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Facial Exercises', 75)" style="background: linear-gradient(135deg, #1e3a8a 0%, #0f5ee8 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🤖 Упражнения для лица</h3>
        <p>75 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Facial Guide', 200)" style="background: linear-gradient(135deg, #1e3a8a 0%, #0f5ee8 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>📖 Полный гайд</h3>
        <p>200 баллов</p>
      </div>
    </div>
  `;
}

function showFitnessContent() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <h2 style="font-size: 22px; margin-bottom: 10px;">💪 Fitness Training</h2>
      <p style="color: #b0b0b0;">Тренировки и физическое развитие</p>
    </div>
    <div class="content-items" style="display: grid; gap: 12px;">
      <div class="content-item" onclick="addToCart('Beginner Workout', 120)" style="background: linear-gradient(135deg, #92400e 0%, #ff8c42 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🏃 Для начинающих</h3>
        <p>120 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Advanced Program', 250)" style="background: linear-gradient(135deg, #92400e 0%, #ff8c42 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🤸 Продвинутая программа</h3>
        <p>250 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Nutrition Plan', 150)" style="background: linear-gradient(135deg, #92400e 0%, #ff8c42 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🍎 План питания</h3>
        <p>150 баллов</p>
      </div>
    </div>
  `;
}

function showFashionContent() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <h2 style="font-size: 22px; margin-bottom: 10px;">👔 Fashion & Style</h2>
      <p style="color: #b0b0b0;">Мода, стиль и аксессуары</p>
    </div>
    <div class="content-items" style="display: grid; gap: 12px;">
      <div class="content-item" onclick="addToCart('Style Guide', 80)" style="background: linear-gradient(135deg, #5a189a 0%, #9d4edd 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>📚 Наставление</h3>
        <p>80 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Wardrobe', 200)" style="background: linear-gradient(135deg, #5a189a 0%, #9d4edd 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>👕 Гардероб</h3>
        <p>200 баллов</p>
      </div>
      <div class="content-item" onclick="addToCart('Color Theory', 100)" style="background: linear-gradient(135deg, #5a189a 0%, #9d4edd 100%); padding: 16px; border-radius: 12px; cursor: pointer;">
        <h3>🎨 Теория цвета</h3>
        <p>100 баллов</p>
      </div>
    </div>
  `;
}

function showHome() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <h1 class="main-title">Выберите раздел для развития</h1>
    
    <div class="sections-grid">
      <div class="section-card blue-card" onclick="loadSection('facial')" style="cursor: pointer;">
        <div class="card-icon">😊</div>
        <h2>Facial Care</h2>
        <p>Уход за лицом</p>
        <span class="badge">ТОП советы</span>
      </div>

      <div class="section-card orange-card" onclick="loadSection('fitness')" style="cursor: pointer;">
        <div class="card-icon">💪</div>
        <h2>Fitness</h2>
        <p>Тренировки</p>
      </div>

      <div class="section-card purple-card" onclick="loadSection('fashion')" style="cursor: pointer;">
        <div class="card-icon">👔</div>
        <h2>Fashion</h2>
        <p>Стиль и одежда</p>
        <span class="commission">Комиссия 0%</span>
      </div>
    </div>
  `;
}

// ===== CART FUNCTIONS =====

function addToCart(itemName, points) {
  cart.push({ name: itemName, points });
  currentPoints += points;
  updateCartBadge();
  
  // Show success notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    font-weight: 600;
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  notification.innerHTML = `✅ "${itemName}" добавлен<br>+${points} баллов`;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.remove(), 3000);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = cart.length > 0 ? cart.length : '';
  }
  
  const pointsText = document.querySelector('.points-text');
  if (pointsText) {
    pointsText.textContent = `${currentPoints} баллов`;
  }
}

function showProfile() {
  alert(`👤 Ваш профиль\n\nБаллов: ${currentPoints}\nТоваров в корзине: ${cart.length}`);
}

function showCart() {
  if (cart.length === 0) {
    alert('🛒 Ваша корзина пуста');
  } else {
    const cartList = cart.map(item => `• ${item.name}: +${item.points}`).join('\n');
    alert(`🛍️ Ваша корзина:\n\n${cartList}\n\nВсего: ${currentPoints} баллов`);
  }
}

// ===== INITIALIZATION =====

function initApp() {
  console.log('Initializing Looksmaxing Base v2.0 Mini App');
  showHome();
  updateCartBadge();
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

console.log('✅ App initialized successfully');
