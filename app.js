const lessons = [
  {
    title: "مقدمة في الأمن السيبراني 🔒",
    content: "الأمن السيبراني هو علم حماية الأنظمة من الهجمات الرقمية. سنتعلم كيف نفكر مثل الهاكر ولكن لحماية الأنظمة، لا لاختراقها."
  },
  {
    title: "أنواع الهجمات 🧨",
    content: "من أبرزها: التصيد Phishing، وهجمات DDoS، والبرمجيات الخبيثة Malware. كل نوع له طرق كشفه والتصدي له."
  },
  {
    title: "أدوات القرصنة الأخلاقية 🧰",
    content: "مثل Wireshark لتحليل الشبكات، و Nmap لفحص المنافذ، و Metasploit لاختبار الثغرات الأمنية."
  },
  {
    title: "كيف تصبح هاكر أخلاقي 💻",
    content: "ابدأ بتعلم الشبكات، ثم أنظمة Linux، ثم البرمجة (Python مثلاً)، وبعدها تعلّم أدوات الـ PenTesting."
  },
  {
    title: "نهاية الدورة 🎓",
    content: "أحسنت يا إسلام! أنت الآن تعرف الأساسيات. يمكنك تطوير نفسك أكثر عبر محاكاة عملية في المرحلة القادمة 🔥"
  }
];

let currentLesson = 0;

function startLearning() {
  document.querySelector("main section").classList.add("hidden");
  document.getElementById("lesson").classList.remove("hidden");
  showLesson();
}

function showLesson() {
  document.getElementById("lesson-title").textContent = lessons[currentLesson].title;
  document.getElementById("lesson-content").textContent = lessons[currentLesson].content;
}

function nextLesson() {
  currentLesson++;
  if (currentLesson < lessons.length) {
    showLesson();
  } else {
    document.getElementById("lesson-title").textContent = "🚀 انتهيت!";
    document.getElementById("lesson-content").textContent = "أكملت كل الدروس يا إسلام، يمكنك الانتقال إلى قسم المحاكاة قريباً 💪";
    document.getElementById("next-btn").style.display = "none";
  }
      }
