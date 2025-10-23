const lessons = [
  {
    title: "ما هو الأمن السيبراني؟",
    content: "هو علم حماية الأنظمة والشبكات من الهجمات الرقمية."
  },
  {
    title: "أنواع الهجمات",
    content: "مثل هجمات الفيروسات، التصيد، والهندسة الاجتماعية."
  },
  {
    title: "القرصنة الأخلاقية",
    content: "استخدام مهارات الاختراق لاختبار الحماية بشكل قانوني."
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
    document.getElementById("lesson-title").textContent = "🎉 أحسنت يا إسلام!";
    document.getElementById("lesson-content").textContent = "لقد أكملت الدورة بنجاح 🚀";
  }
}
