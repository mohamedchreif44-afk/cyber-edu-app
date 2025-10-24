// 🧠 محتوى الدروس
const lessons = {
  intro: {
    title: "مقدمة في الأمن السيبراني",
    content: `
      <p>الأمن السيبراني هو علم حماية الأنظمة والشبكات من الهجمات الإلكترونية. 👨‍💻</p>
      <p>الهدف الأساسي هو <strong>منع الوصول غير المصرح به</strong> وحماية البيانات.</p>
      <ul>
        <li>تعلم كيف يفكر الهاكر.</li>
        <li>فهم نقاط الضعف في الأنظمة.</li>
        <li>استخدام الأدوات الأخلاقية للتجربة والاختبار.</li>
      </ul>
      <p>✨ تذكّر: القرصنة الأخلاقية تهدف إلى <strong>الحماية لا الإضرار</strong>.</p>
    `
  },

  network: {
    title: "أمن الشبكات",
    content: `
      <p>أمن الشبكات يعني حماية البيانات أثناء انتقالها عبر الإنترنت أو الشبكات المحلية.</p>
      <p>من أهم التقنيات المستخدمة:</p>
      <ul>
        <li>جدران الحماية (Firewalls)</li>
        <li>تشفير البيانات (Encryption)</li>
        <li>VPN لحماية الاتصال</li>
      </ul>
      <p>🔒 استخدم أدوات مثل <strong>Wireshark</strong> لتحليل الشبكات وفهم الثغرات.</p>
    `
  },

  web: {
    title: "اختراق الويب الأخلاقي",
    content: `
      <p>الويب هو أكثر مجال يتعرض للهجمات، لذا فهمه ضروري لأي مختبر اختراق.</p>
      <p>أهم الثغرات التي يجب تعلمها:</p>
      <ul>
        <li>SQL Injection 💉</li>
        <li>XSS - Cross Site Scripting ⚔️</li>
        <li>CSRF - تزوير الطلبات</li>
      </ul>
      <p>🧰 استخدم أدوات مثل <strong>Burp Suite</strong> و <strong>OWASP ZAP</strong> لاختبار المواقع بشكل آمن.</p>
    `
  },

  tools: {
    title: "أدوات الهاكر الأخلاقي",
    content: `
      <p>من أهم الأدوات التي يستخدمها مختبرو الاختراق:</p>
      <ul>
        <li><strong>Nmap</strong> — فحص الأجهزة والخدمات على الشبكة.</li>
        <li><strong>Metasploit</strong> — لاختبار الثغرات واستغلالها بشكل قانوني.</li>
        <li><strong>Hydra</strong> — لتجربة كلمات المرور.</li>
        <li><strong>Kali Linux</strong> — النظام الأشهر لاختبار الاختراق.</li>
      </ul>
      <p>⚠️ استخدم هذه الأدوات فقط على الأنظمة المصرح لك باختبارها!</p>
    `
  }
};

// 🧩 دالة عرض الدروس
function showLesson(key) {
  const lesson = lessons[key];
  const box = document.getElementById("lesson");

  if (lesson) {
    box.innerHTML = `
      <h2>${lesson.title}</h2>
      <div>${lesson.content}</div>
    `;
  }
}
