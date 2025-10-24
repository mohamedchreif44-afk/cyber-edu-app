const lessons = {
  intro: {
    title: "مقدمة في الأمن السيبراني",
    content: `
      <p>الأمن السيبراني هو علم حماية الأنظمة والشبكات من الهجمات الإلكترونية 👨‍💻</p>
      <p>الهدف: فهم كيف يفكر الهاكر لحماية الأنظمة من التهديدات.</p>
      <ul>
        <li>فهم أنواع الهجمات</li>
        <li>تعلم الأدوات الدفاعية</li>
        <li>التحليل و الرد على التهديدات</li>
      </ul>
    `
  },
  network: {
    title: "أمن الشبكات",
    content: `
      <p>يهتم أمن الشبكات بحماية نقل البيانات عبر الإنترنت.</p>
      <ul>
        <li>VPN وFirewalls</li>
        <li>تحليل الحزم بـ Wireshark</li>
        <li>كشف الثغرات في الشبكات</li>
      </ul>
    `
  },
  web: {
    title: "اختراق الويب",
    content: `
      <p>تعلم اختبار أمان المواقع واكتشاف الثغرات.</p>
      <ul>
        <li>SQL Injection 💉</li>
        <li>XSS (اختراق عبر السكريبت)</li>
        <li>CSRF</li>
      </ul>
    `
  },
  tools: {
    title: "أدوات الهكر الأخلاقي",
    content: `
      <ul>
        <li>Kali Linux</li>
        <li>Metasploit Framework</li>
        <li>Hydra</li>
        <li>Nmap</li>
      </ul>
      <p>⚠️ استخدم الأدوات في الأغراض الأخلاقية فقط!</p>
    `
  }
};

function openLesson(key) {
  const lesson = lessons[key];
  const lessonScreen = document.getElementById('lessonScreen');
  const lessonContent = document.getElementById('lessonContent');

  lessonContent.innerHTML = `<h2>${lesson.title}</h2>${lesson.content}`;
  lessonScreen.classList.remove('hidden');
}

function closeLesson() {
  document.getElementById('lessonScreen').classList.add('hidden');
}
