// App data
const apps = [
    {
        id: 'appNo.1',
        name: '고쳐드림',
        icon: './assets/001.png',
        description: 'AI 자소서 첨삭 앱',
        category: '생산성/교육',
        downloadLink: '#',
        privacyPolicy: `최종 업데이트: 2025년 2월 2일

본 개인정보 처리방침은 이용자가 서비스를 사용할 때의 정보 처리 방식과 이용자의 개인정보 보호 권리에 대해 설명합니다.

본 애플리케이션은 회원가입 없이 즉시 사용할 수 있으며, 이용자가 입력한 데이터(기업명, 직무명, 직무설명, 문항, 자기소개서 등)는 분석 목적으로만 사용되며, 별도로 저장되지 않습니다. 당사는 Firebase Functions를 통해 백엔드 호출을 진행하고, OpenAI API를 활용하여 입력된 내용을 분석합니다. 분석 완료 후 입력된 데이터는 즉시 삭제됩니다.

0. 용어 정의
- 애플리케이션: "고쳐드림" 애플리케이션을 의미합니다.
- 회사(당사): "고쳐드림" 애플리케이션을 운영하는 개발자 본인을 의미합니다.
- 서비스: "고쳐드림" 애플리케이션에서 제공하는 자기소개서 첨삭 서비스를 의미합니다.
- 이용자: 애플리케이션을 사용하는 모든 개인을 의미합니다.

1. 개인정보 수집 및 저장에 대한 안내
- 당사는 이용자의 개인정보(이름, 전화번호, 이메일, 주민등록번호 등)를 수집하거나 저장하지 않습니다.
- 이용자가 입력하는 기업명, 직무명, 직무설명, 문항, 자기소개서 등은 분석 목적으로만 Firebase Functions와 OpenAI API를 통해 전송되며, 서버에 저장되지 않습니다.
- 분석이 완료된 후, 입력된 데이터는 즉시 삭제됩니다.
- 당사는 OpenAI API를 통해 이용자의 입력 데이터를 처리하며, OpenAI는 해당 데이터를 모델 개선이나 훈련 목적으로 사용하지 않고, 오직 요청에 대한 응답 제공에 한해 사용합니다.
- API 호출 및 데이터 이용 관련해서는, 당사 시스템에서 입력 데이터를 별도로 저장하거나 보관하지 않으므로 문제없으며, OpenAI 및 Firebase의 정책에 따라 처리됩니다. 다만, 제3자 서비스 제공자의 정책 및 보안 절차에 대해서는 당사가 통제할 수 없음을 유의해 주시기 바랍니다.

2. 이용자 유의사항
- 이용자는 서비스 이용 시 개인정보(이름, 전화번호, 이메일, 주민등록번호 등)를 입력하지 않도록 주의해야 합니다.
- 이용자가 부주의하게 개인정보를 입력하여 발생하는 문제에 대해서는 당사가 책임지지 않습니다.
- 서비스 내 입력 데이터는 분석 후 삭제되나, 민감한 정보가 포함되지 않도록 유의해 주시기 바랍니다.

3. 데이터 보안 및 보호
- 당사는 이용자의 데이터를 서버에 저장하지 않으며, 입력된 데이터는 암호화된 연결(HTTPS)을 통해 전송됩니다.
- 최신 보안 기술을 적용하여 데이터 전송 및 처리를 진행하고 있으나, 예기치 못한 오류나 해킹 등의 예외 상황에 대해서는 책임 한계가 있음을 미리 알려드립니다.
- 당사는 제3자 서비스 제공자(OpenAI, Firebase)의 데이터 처리 및 보안에 대해 통제할 수 없으므로, 관련 사항은 각 서비스 제공자의 정책을 따릅니다.

4. 외부 링크 안내
- 본 서비스는 OpenAI API와 Firebase Functions를 통해 데이터를 전송하여 분석을 수행합니다.
- OpenAI의 개인정보 보호 정책 및 보안 규정은 OpenAI 개인정보 보호정책을 참조해 주시기 바랍니다.
- 당사는 제3자 서비스 제공자의 데이터 처리 방침에 대해 책임지지 않으며, 해당 서비스의 정책에 따라 이용자의 데이터가 처리될 수 있음을 안내드립니다.

5. 법령 준수 및 이용자 권리
- 당사는 관련 개인정보 보호법 등 국내외 법령을 준수합니다.
- 이용자는 언제든지 자신의 개인정보 처리와 관련하여 정보 열람, 정정, 삭제 요청 등의 권리를 행사할 수 있습니다. 다만, 본 서비스는 개인정보를 수집 및 저장하지 않으므로, 별도의 조치가 필요하지 않은 점 참고해 주시기 바랍니다.

6. 개인정보 처리방침 변경 안내
- 본 개인정보 처리방침은 관련 법령 및 서비스 개선에 따라 변경될 수 있습니다.
- 변경 사항이 있을 경우, 본 페이지 및 애플리케이션 내 공지사항을 통해 신속하게 고지됩니다.

7. 책임의 한계
- 당사는 서비스 이용 과정에서 발생할 수 있는 기술적 문제나 예외 상황에 대해 최선의 보안 조치를 취하고 있으나, 이러한 상황으로 인해 발생하는 민/형사상 책임에 대해서는 제한이 있을 수 있습니다.
- 이용자는 서비스 사용 시 본 정책을 숙지하고, 부주의하게 개인정보를 입력하지 않도록 주의해 주시기 바랍니다.

8. 문의 방법
개인정보 처리방침에 대한 문의는 아래의 이메일로 연락해 주세요.

gamemaraarchive@gmail.com

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
        name: '준비중2',
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
