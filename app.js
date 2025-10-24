// لغة افتراضية
let lang = localStorage.getItem('ce_lang') || 'ar';
let currentLessonIndex = 0;
let xp = parseInt(localStorage.getItem('ce_xp') || '0', 10);

// عناصر الواجهة
const home = document.getElementById("homeSection");
const lessons = document.getElementById("lessonSection");
const simulate = document.getElementById("simulateSection");
const profile = document.getElementById("profileSection");

const homeBtn = document.getElementById("homeBtn");
const learnBtn = document.getElementById("learnBtn");
const simulateBtn = document.getElementById("simulateBtn");
const profileBtn = document.getElementById("profileBtn");
const langBtn = document.getElementById("langBtn");

const startBtn = document.getElementById("startBtn");
const nextLessonBtn = document.getElementById("nextLessonBtn");
const xpSpan = document.getElementById("xp");

const simList = document.getElementById("sim-list");
const simArea = document.getElementById("simulation-area");
const simBack = document.getElementById("sim-back");
const simSubmit = document.getElementById("sim-submit");
const simInput = document.getElementById("sim-input");
const simPrompt = document.getElementById("sim-prompt");
const simFeedback = document.getElementById("sim-feedback");
const simTitle = document.getElementById("sim-ch-title");
const simDesc = document.getElementById("sim-ch-desc");

homeBtn.onclick = () => showSection("home");
learnBtn.onclick = () => showSection("lessons");
simulateBtn.onclick = () => showSection("simulate");
profileBtn.onclick = () => showSection("profile");
langBtn.onclick = toggleLang;

startBtn.onclick = () => { startLearning(); showSection("lessons"); };
nextLessonBtn.onclick = nextLesson;

simBack.onclick = () => { simArea.classList.add('hidden'); simList.classList.remove('hidden'); simFeedback.textContent = ''; simInput.value = ''; };

simSubmit.onclick = checkSimAnswer;

document.addEventListener('DOMContentLoaded', () => {
  renderUI();
  xpSpan.textContent = xp;
});

// --- العرض والتنقل
function showSection(name) {
  [home, lessons, simulate, profile].forEach(sec => sec.classList.add("hidden"));
  document.querySelectorAll("nav .nav-left button").forEach(btn => btn.classList.remove("active"));
  switch (name) {
    case "home": home.classList.remove("hidden"); homeBtn.classList.add("active"); break;
    case "lessons": lessons.classList.remove("hidden"); learnBtn.classList.add("active"); break;
    case "simulate": simList.classList.remove("hidden"); simulate.classList.remove("hidden"); simulateBtn.classList.add("active"); break;
    case "profile": profile.classList.remove("hidden"); profileBtn.classList.add("active"); break;
  }
}

// --- اللغة
function toggleLang() {
  lang = (lang === 'ar') ? 'en' : 'ar';
  localStorage.setItem('ce_lang', lang);
  renderUI();
}

function renderUI() {
  // نصوص الواجهة
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.getElementById('app-title').textContent = '🔒 Cyber Edu';
    document.getElementById('welcome-title').textContent = 'مرحبًا بك يا إسلام 👋';
    document.getElementById('welcome-desc').textContent = 'تعلّم الأمن السيبراني والاختراق الأخلاقي خطوة بخطوة من خلال دروس عملية وتفاعلية.';
    startBtn.textContent = 'ابدأ الآن 🚀';
    nextLessonBtn.textContent = 'التالي ▶️';
    document.getElementById('simulate-title').textContent = '🧠 محاكاة عملية';
    document.getElementById('simulate-desc').textContent = 'تعلم عبر تحديات آمنة داخل المتصفح — حل التحدي للحصول على نقاط XP.';
    document.getElementById('profile-title').textContent = '👤 الملف الشخصي';
    document.getElementById('profile-name').textContent = 'الاسم: إسلام';
    document.getElementById('profile-level').textContent = 'المستوى: مبتدئ 🔰';
    langBtn.textContent = 'EN';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.getElementById('app-title').textContent = '🔒 Cyber Edu';
    document.getElementById('welcome-title').textContent = 'Welcome, Islam 👋';
    document.getElementById('welcome-desc').textContent = 'Learn cybersecurity & ethical hacking step-by-step with practical interactive lessons.';
    startBtn.textContent = 'Start Now 🚀';
    nextLessonBtn.textContent = 'Next ▶️';
    document.getElementById('simulate-title').textContent = '🧠 Simulation';
    document.getElementById('simulate-desc').textContent = 'Learn with safe in-browser challenges — solve to earn XP.';
    document.getElementById('profile-title').textContent = '👤 Profile';
    document.getElementById('profile-name').textContent = 'Name: Islam';
    document.getElementById('profile-level').textContent = 'Level: Beginner 🔰';
    langBtn.textContent = 'AR';
  }

  // دروس
  currentLessonIndex = 0;
  renderLesson();
  // محاكاة
  renderSimList();
  xpSpan.textContent = xp;
}

function renderLesson() {
  const item = lessonsContent[lang][currentLessonIndex];
  if (item) {
    document.getElementById('lesson-title').textContent = item.title;
    document.getElementById('lesson-content').textContent = item.content;
  }
}

function startLearning() {
  currentLessonIndex = 0;
  showSection('lessons');
  renderLesson();
}

function nextLesson() {
  xp += 10;
  localStorage.setItem('ce_xp', xp);
  xpSpan.textContent = xp;
  currentLessonIndex++;
  if (currentLessonIndex < lessonsContent[lang].length) {
    renderLesson();
  } else {
    document.getElementById('lesson-title').textContent = (lang === 'ar') ? '🎉 أحسنت!' : '🎉 Well done!';
    document.getElementById('lesson-content').textContent = (lang === 'ar') ? 'لقد أكملت جميع الدروس.' : 'You completed all lessons.';
    nextLessonBtn.style.display = 'none';
  }
}

// --- محاكاة: عرض القائمة
function renderSimList() {
  simList.innerHTML = '';
  const arr = simulations[lang];
  arr.forEach(s => {
    const card = document.createElement('div');
    card.className = 'sim-card';
    const left = document.createElement('div');
    left.innerHTML = `<strong>${s.title}</strong><div style="opacity:0.8;margin-top:6px">${s.desc}</div>`;
    const btn = document.createElement('button');
    btn.textContent = (lang === 'ar') ? 'ابدأ' : 'Start';
    btn.onclick = () => openSim(s.id);
    card.appendChild(left);
    card.appendChild(btn);
    simList.appendChild(card);
  });
  simList.classList.remove('hidden');
  simArea.classList.add('hidden');
}

// فتح تحدي
let currentSim = null;
function openSim(id) {
  const s = simulations[lang].find(x => x.id === id);
  if (!s) return;
  currentSim = s;
  simTitle.textContent = s.title;
  simDesc.textContent = s.desc;
  simPrompt.textContent = s.prompt;
  simInput.value = '';
  simFeedback.textContent = '';
  simList.classList.add('hidden');
  simArea.classList.remove('hidden');
}

// التحقق من الإجابة
function checkSimAnswer() {
  if (!currentSim) return;
  const user = simInput.value.trim();
  if (!user) {
    simFeedback.textContent = (lang === 'ar') ? 'أدخل قيمة أولاً.' : 'Please enter a value.';
    return;
  }
  if (user === currentSim.answer) {
    simFeedback.textContent = (lang === 'ar') ? 'صحيح! حصلت على 20 XP 🎉' : 'Correct! You earned 20 XP 🎉';
    xp += 20;
    localStorage.setItem('ce_xp', xp);
    xpSpan.textContent = xp;
    // إخفاء زر التقديم
    simSubmit.disabled = true;
  } else {
    simFeedback.textContent = (lang === 'ar') ? 'الإجابة غير صحيحة، جرّب مرة أخرى.' : 'Wrong answer, try again.';
  }
    }
