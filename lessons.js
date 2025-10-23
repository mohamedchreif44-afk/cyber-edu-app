const lessonsContent = {
  ar: [
    { title: "1️⃣ مقدمة في الأمن السيبراني", content: "الأمن السيبراني يحمي الأنظمة والبيانات. سنتعلم مبادئ الحماية وأخلاقيات الاختبار." },
    { title: "2️⃣ الشبكات الأساسية", content: "مفاهيم الشبكات، IP، المنافذ، وكيف تتواصل الأجهزة مع بعضها." },
    { title: "3️⃣ تطبيقات الويب و OWASP", content: "مقدمة عن ثغرات تطبيقات الويب مثل XSS و SQL Injection (نظري فقط) وكيفية الوقاية." },
    { title: "4️⃣ أدوات ومسارات", content: "أدوات تحليل الشبكات وطرق التعلم (Wireshark, Nmap, Burp - مقدمة نظرية)." },
    { title: "5️⃣ الخلاصة", content: "ماذا تتعلم بعد هذه الدورة وكيف تبني مسارك المهني كمختبر اختراق أخلاقي." }
  ],
  en: [
    { title: "1️⃣ Intro to Cybersecurity", content: "Cybersecurity protects systems and data. We'll learn protection principles and ethical testing." },
    { title: "2️⃣ Networking Basics", content: "Network concepts, IPs, ports and how devices communicate." },
    { title: "3️⃣ Web Apps & OWASP", content: "Intro to common web vulnerabilities and how to prevent them (theory only)." },
    { title: "4️⃣ Tools & Paths", content: "Overview of analysis tools and learning paths (Wireshark, Nmap, Burp - theory)." },
    { title: "5️⃣ Summary", content: "Next steps to grow as an ethical hacker and professional path." }
  ]
};

// Simulation challenges (safe, educational)
const simulations = {
  ar: [
    {
      id: "sim1",
      title: "تحدي: العثور على العلم داخل نص",
      desc: "افتح مصدر الصفحة (View Source) وابحث عن السطر الذي يحتوي على FLAG: ثم اكتب القيمة هنا.",
      prompt: "أدخل قيمة العلم (flag):",
      answer: "FLAG{WELCOME_ISLAM}"
    },
    {
      id: "sim2",
      title: "تحدي: فك تشفير بسيط",
      desc: "النص المشفّر Base64: 'U0FURUlUQ19Jc2xhbQ==' — فكّه ثم اكتب النتيجة هنا.",
      prompt: "أدخل النص المفكوك:",
      answer: "SATEITC_Islam"
    }
  ],
  en: [
    {
      id: "sim1",
      title: "Challenge: Find the flag in page source",
      desc: "Open the page source and look for the line with FLAG: then type the value here.",
      prompt: "Enter the flag value:",
      answer: "FLAG{WELCOME_ISLAM}"
    },
    {
      id: "sim2",
      title: "Challenge: Simple decode",
      desc: "Base64 string: 'U0FURUlUQ19Jc2xhbQ==' — decode it and enter the result.",
      prompt: "Enter decoded text:",
      answer: "SATEITC_Islam"
    }
  ]
};
