class MiniApp {
  constructor() {
    this.initData = window.Telegram?.WebApp?.initData || '';
    this.pages = [];
    this.currentPage = 'home';
    this.init();
  }

  async init() {
    await this.loadPages();
    this.renderUI();
    this.attachEventListeners();
  }

  async loadPages() {
    try {
      const response = await fetch('/api/pages');
      const data = await response.json();
      this.pages = data.pages;
    } catch (error) {
      console.error('Failed to load pages:', error);
    }
  }

  renderUI() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="header">
        <h1>Looksmaxing Base v2.0</h1>
      </div>
      <div class="content" id="content"></div>
      <div class="nav-bar" id="nav-bar"></div>
    `;
    this.renderPages();
    this.renderNavBar();
  }

  renderPages() {
    const content = document.getElementById('content');
    this.pages.forEach(page => {
      const pageDiv = document.createElement('div');
      pageDiv.className = `page ${page.id === this.currentPage ? 'active' : ''}`;
      pageDiv.id = `page-${page.id}`;
      pageDiv.innerHTML = `
        <div class="card">
          <h2>${page.title}</h2>
          <p>Content for ${page.title} page</p>
        </div>
      `;
      content.appendChild(pageDiv);
    });
  }

  renderNavBar() {
    const navBar = document.getElementById('nav-bar');
    this.pages.forEach(page => {
      const btn = document.createElement('button');
      btn.className = `nav-btn ${page.id === this.currentPage ? 'active' : ''}`;
      btn.textContent = page.emoji;
      btn.onclick = () => this.switchPage(page.id);
      navBar.appendChild(btn);
    });
  }

  switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    event.target.classList.add('active');
    this.currentPage = pageId;
  }

  attachEventListeners() {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }
}

window.app = new MiniApp();
