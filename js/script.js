// App data
const apps = [
    {
        id: 'appNo.1',
        name: '고쳐드림',
        icon: './assets/001.png',
        description: 'AI 자소서 첨삭 앱',
        category: '생산성/교육',
        downloadLink: '#',
        privacyPolicy: `최종 업데이트: 2025년 1월 30일

본 개인정보 처리방침은 이용자가 서비스를 사용할 때의 정보 처리 방식과 이용자의 개인정보 보호 권리에 대해 설명합니다.

본 애플리케이션은 회원가입 없이 즉시 사용할 수 있으며, 이용자가 입력한 데이터(지원 기업, 직무명, 자기소개서 등)를 저장하지 않습니다. 당사는 OpenAI API를 활용하여 입력된 내용을 분석할 뿐, 이를 직접 저장하거나 관리하지 않습니다.

따라서 본 서비스는 이용자의 개인정보를 수집하지 않으며, 이에 대한 별도의 개인정보 수집 동의는 필요하지 않습니다. 다만, 사용자의 입력 내용에 개인정보(이름, 연락처 등)가 포함되지 않도록 주의해 주시기 바랍니다.

0. 용어 정의

애플리케이션: "고쳐드림" 애플리케이션을 의미합니다.
회사: "고쳐드림" 애플리케이션을 운영하는 당사를 의미합니다.
서비스: "고쳐드림" 애플리케이션에서 제공하는 자기소개서 첨삭 서비스를 의미합니다.
이용자: 애플리케이션을 사용하는 모든 개인을 의미합니다.

1. 개인정보 수집 및 저장에 대한 안내
- 당사는 이용자의 개인정보를 수집하거나 저장하지 않습니다.
- 이용자가 입력하는 기업명, 직무명, 자기소개서 등은 분석을 위해 "OpenAI API"로 전송되지만, 서버에 저장되지 않습니다.
- 분석이 완료된 후 입력된 데이터는 즉시 삭제됩니다.
- 당사는 OpenAI API를 통해 이용자의 입력 데이터를 처리합니다.
- OpenAI는 API를 통해 전송된 데이터를 모델 개선이나 훈련 목적으로 사용하지 않으며, 데이터는 오직 요청에 대한 응답을 제공하는 데에만 사용됩니다. OpenAI의 데이터 처리 방식에 대한 자세한 사항은 OpenAI 개인정보 보호정책을 참조하십시오.

2. 이용자 유의사항
- 이용자는 서비스 이용 시 개인정보(이름, 전화번호, 이메일, 주민등록번호 등)를 입력하지 않도록 주의해야 합니다.
- 당사는 OpenAI API를 통해 입력된 데이터를 처리하지만, 해당 데이터는 회사의 서버에 저장되지 않습니다.

3. 데이터 보안 및 보호

- 당사는 이용자의 데이터를 저장하지 않지만, 입력된 데이터는 암호화된 연결(HTTPS)을 통해 OpenAI API로 전송됩니다. 이를 통해 데이터의 보안을 강화하고 있습니다.
- 이용자의 입력 정보는 AI 분석 후 즉시 삭제되며, 어떠한 방식으로도 보관되지 않습니다.

4. 외부 링크 안내

- 본 서비스는 OpenAI API를 통해 데이터를 전송하여 분석을 수행합니다.
- OpenAI의 개인정보 보호 정책 및 보안 규정에 대해서는 OpenAI 개인정보 보호정책을 확인하시기 바랍니다.
- 당사는 OpenAI의 데이터 처리 방침에 대해 책임지지 않으며, OpenAI와 관련된 모든 사항은 해당 정책(https://openai.com/policies/privacy-policy/)을 따릅니다.

5. 개인정보 처리방침 변경 안내

- 본 개인정보 처리방침은 필요에 따라 변경될 수 있습니다.
- 변경 사항이 있을 경우, 본 페이지에 업데이트 내용을 게시하여 이용자에게 고지합니다.

6. 문의 방법

개인정보 처리방침에 대한 문의는 아래의 이메일로 연락해 주세요.

- 이메일: gamemaraarchive@gmail.com

`,
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
        icon: './assets/002.png',
        description: '새로운 앱이 곧 출시됩니다',
        category: '생산성/교육',
        downloadLink: '#',
        privacyPolicy: '준비중입니다.',
        updates: []
    },
    {
        id: 'coming-soon2',
        name: '준비중',
        icon: './assets/002.png',
        description: '새로운 앱이 곧 출시됩니다',
        category: '게임',
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
