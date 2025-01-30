// App data
const apps = [
    {
        id: 'appNo.1',
        name: '고쳐드림',
        icon: '.assets/001.png',
        description: 'AI 자소서 첨삭 앱',
        category: '생산성/교육',
        downloadLink: '#',
        privacyPolicy: `개인정보처리방침\n\n`,
        updates: [
            {
                version: '1.x.x',
                date: '20xx.xx.xx',
                details: [
                    '...',
                    '...'
                ]
            },
            {
                version: '1.0.0',
                date: '20xx.xx.xx',
                details: ['출시 대기중']
            }
        ]
    },
    {
        id: 'coming-soon',
        name: '준비중',
        icon: '.assets/002.png',
        description: '새로운 앱이 곧 출시됩니다',
        category: '개발중',
        downloadLink: '#',
        privacyPolicy: '준비중입니다.',
        updates: []
    }
];

// DOM Elements
const homePage = document.getElementById('homePage');
const appPage = document.getElementById('appPage');
const appGrid = document.getElementById('appGrid');
const backButton = document.getElementById('backButton');

// Initialize app
function initializeApp() {
    renderAppGrid();
    setupEventListeners();
}

// Render app grid
function renderAppGrid() {
    appGrid.innerHTML = apps.map(app => `
        <button class="app-card animate__animated animate__fadeIn" data-app-id="${app.id}">
            <div class="app-card-content">
                <div class="app-card-header">
                    <img src="${app.icon}" alt="${app.name} 아이콘">
                    <div class="app-card-title">
                        <h2>${app.name}</h2>
                        <p>${app.category}</p>
                    </div>
                </div>
                <p class="app-card-description">${app.description}</p>
            </div>
        </button>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // App card click events
    appGrid.addEventListener('click', (e) => {
        const appCard = e.target.closest('.app-card');
        if (appCard) {
            const appId = appCard.dataset.appId;
            showAppDetail(appId);
        }
    });

    // Back button click event
    backButton.addEventListener('click', showHome);
}

// Show app detail
function showAppDetail(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    // Update app detail content
    document.getElementById('appIcon').src = app.icon;
    document.getElementById('appIcon').alt = `${app.name} 아이콘`;
    document.getElementById('appName').textContent = app.name;
    document.getElementById('appDescription').textContent = app.description;
    document.getElementById('downloadButton').href = app.downloadLink;

    // Render updates
    const updatesContent = document.getElementById('updatesContent');
    if (app.updates.length > 0) {
        updatesContent.innerHTML = app.updates.map(update => `
            <div class="update-item animate__animated animate__fadeIn">
                <h3>버전 ${update.version} (${update.date})</h3>
                <ul>
                    ${update.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    } else {
        updatesContent.innerHTML = '<p>업데이트 내역이 없습니다.</p>';
    }

    // Render privacy policy
    document.getElementById('privacyContent').textContent = app.privacyPolicy;

    // Show app page
    homePage.classList.remove('active');
    appPage.classList.add('active');
}

// Show home page
function showHome() {
    appPage.classList.remove('active');
    homePage.classList.add('active');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
