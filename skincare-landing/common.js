/* ========================================================
   결 스킨케어 — 공유 스크립트 (index / program / review / community 공통)
   scroll reveal + mobile nav + floating AI 챗봇(데모 키워드 매칭)
   ======================================================== */

/* ---------- Scroll fade-in ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

/* ---------- Mobile nav ---------- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

/* ================= FLOATING CHATBOT ================= */
/* 데모 모드: 키워드 매칭 로직. 실 서비스 전환 시 callChatbotAPI()를 서버리스 함수 호출로 교체하면 됨.
   원칙: 의료적 판단(어떤 프로그램이 더 나은지 등)은 회피하고 상담 예약으로 유도. 개인정보(패키지 잔여횟수 등)는 매장 문의로 안내. */
const demoResponses = [
  { keywords: ['영업시간', '언제', '몇시', '몇 시', '몇시까지', '휴무'], reply: '매일 오전 10시부터 오후 8시까지 영업해요 (마지막 예약은 오후 6시). 매주 일요일은 정기휴무입니다 🙂' },
  { keywords: ['잔여', '남은 횟수', '패키지 몇', '몇 회 남'], reply: '패키지권 잔여 횟수는 개인정보 확인이 필요해 챗봇에서는 안내가 어려워요. 매장으로 문의해주시면 바로 확인해드릴게요 (042-712-3456) 🙂' },
  { keywords: ['뭐가 나을까', '어떤 게 나을까', '뭐가 좋을까', '추천'], reply: '정확한 진단은 첫 방문 상담을 통해 안내드려요. 피부 타입에 따라 맞는 프로그램이 다르거든요. 신규 상담 예약 도와드릴까요?' },
  { keywords: ['예약'], reply: '네, 예약 도와드릴게요! 메인 페이지의 온라인 예약 섹션에서 날짜·시간·프로그램을 바로 선택하실 수 있어요. 신규 방문이시면 첫 상담 시간이 조금 더 걸릴 수 있어요.' },
  { keywords: ['위치', '오시는', '어디', '주소'], reply: '대전광역시 유성구 반석로 12, 2층이에요 🙂' },
  { keywords: ['프로그램', '종류', '뭐가 있'], reply: '페이셜뷰티·바디케어·스킨솔루션·스페셜·맨즈뷰티·웨딩케어·프리미엄패키지 7개 카테고리가 있어요. 자세한 구성은 Program 페이지에서 확인하실 수 있어요.' },
  { keywords: ['가격', '얼마', '비용'], reply: '카테고리별로 6만원대부터 시작해요. 정확한 가격은 Program 페이지의 각 카드에서 확인하실 수 있고, 패키지 상품은 상담 시 안내드려요 ✨' },
  { keywords: ['후기', '리뷰'], reply: 'Review 페이지에서 실제 이용 후기와 관리 전/후 변화를 확인하실 수 있어요 🙂' },
  { keywords: ['주차'], reply: '건물 내 주차가 가능하며 2시간 무료, 이후 시간당 요금이 발생해요 🚗' },
];

function getDemoReply(userMessage) {
  const found = demoResponses.find(r => r.keywords.some(k => userMessage.includes(k)));
  return found ? found.reply : '정확한 안내를 위해 매장으로 직접 문의 부탁드려요 (042-712-3456) 🙂';
}

async function callChatbotAPI(userMessage) {
  await new Promise(r => setTimeout(r, 500 + Math.random() * 400));
  return getDemoReply(userMessage);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function chatAppendUser(text) {
  const messages = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'cmsg-row user';
  row.innerHTML = `<div class="cmsg-bubble user">${escapeHtml(text)}</div>`;
  messages.appendChild(row);
  document.querySelectorAll('#chatMessages .chat-quick').forEach(el => el.remove());
  messages.scrollTop = messages.scrollHeight;
}

function chatAppendBot(text) {
  const messages = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'cmsg-row bot';
  row.innerHTML = `<div class="cmsg-bubble bot">${escapeHtml(text)}</div>`;
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

async function chatSend() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  chatAppendUser(text);
  const reply = await callChatbotAPI(text);
  chatAppendBot(reply);
}

function chatQuick(text) {
  document.getElementById('chatInput').value = text;
  chatSend();
}

const chatFab = document.getElementById('chatFab');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
if (chatFab && chatPanel && chatClose) {
  chatFab.addEventListener('click', () => chatPanel.classList.toggle('open'));
  chatClose.addEventListener('click', () => chatPanel.classList.remove('open'));
}
