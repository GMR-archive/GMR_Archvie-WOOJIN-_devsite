const apps = [
  {
    id: 'gochyeo-dream',
    name: '고쳐드림',
    icon: '/assets/001.jpg',
    description: 'AI 자소서 첨삭 앱',
    category: '생산성/교육',
    downloadLink: '#',
    privacyPolicy: `개인정보처리방침\n\n`,
    updates: [
      {
        version: '1.x.x',
        date: '20xx.0x.xx',
        details: [
          '...',
          '...'
        ]
      },
      {
        version: '1.0.0',
        date: '20xx.xx.xx',
        details: ['출시 대기']
      }
    ]
  },
  {
    id: 'coming-soon',
    name: '준비중',
    icon: '/assets/002.jpg',
    description: '새로운 앱이 곧 출시됩니다',
    category: '개발중',
    downloadLink: '#',
    privacyPolicy: '준비중입니다.',
    updates: []
  }
];

const rootElement = document.getElementById('root');
let currentPage = 'home';
let selectedAppId = null;

const renderHomePage = () => {
  rootElement.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">GMR_Archvie(WOOJIN) 개발자 사이트</h1>
        <p class="text-xl text-gray-600">출시/업데이트 및 개인정보처리방침, 후원</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${apps.map(app => `
          <button onclick="handleAppClick('${app.id}')" class="text-left block w-full">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <img src="${app.icon}" alt="${app.name} 아이콘" class="w-16 h-16 rounded-xl"/>
                  <div class="ml-4">
                    <h2 class="text-xl font-bold text-gray-900">${app.name}</h2>
                    <p class="text-sm text-gray-500">${app.category}</p>
                  </div>
                </div>
                <p class="text-gray-600">${app.description}</p>
              </div>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
};

const renderAppPage = (appId) => {
  const app = apps.find(a => a.id === appId);
  
  if (!app) {
    rootElement.innerHTML = '<div>앱을 찾을 수 없습니다.</div>';
    return;
  }

  rootElement.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onclick="handleBack()" class="text-blue-600 hover:text-blue-800 mb-8 inline-block">← 메인으로 돌아가기</button>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-8">
          <img src="${app.icon}" alt="${app.name} 아이콘" class="w-24 h-24 rounded-xl"/>
          <div class="ml-6">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">${app.name}</h1>
            <p class="text-gray-600">${app.description}</p>
            <a href="${app.downloadLink}" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">다운로드</a>
          </div>
        </div>
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">업데이트 내역</h2>
            ${app.updates.length > 0 ? `
              <div class="space-y-4">
                ${app.updates.map(update => `
                  <div class="border-l-4 border-blue-600 pl-4">
                    <h3 class="text-lg font-semibold">버전 ${update.version} (${update.date})</h3>
                    <ul class="mt-2 space-y-1">
                      ${update.details.map(detail => `<li class="text-gray-600">• ${detail}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            ` : '<p class="text-gray-600">업데이트 내역이 없습니다.</p>'}
          </section>
          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">개인정보처리방침</h2>
            <div class="prose max-w-none">
              <pre class="whitespace-pre-wrap font-sans text-gray-600">${app.privacyPolicy}</pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};

const handleAppClick = (appId) => {
  selectedAppId = appId;
  currentPage = 'app';
  renderAppPage(appId);
};

const handleBack = () => {
  currentPage = 'home';
  selectedAppId = null;
  renderHomePage();
};

// 최초 페이지 렌더링
renderHomePage();

