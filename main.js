// منع المتصفح من تذكر مكان النزول بعد الريفريش
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// إجبار الصفحة على الرجوع لأعلى نقطة عند التحميل
window.scrollTo(0, 0);

/* ================= Loading Screen & Hero Animations ================= */
function startHeroAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // إظهار العنصر
                observer.unobserve(entry.target); // إيقاف المراقبة
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    
    // إضافة تأخير زمني لكل عنصر عشان يظهروا ورا بعض
    fadeElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(element);
    });
}

// كود التحميل (Preloader) المدمج مع الأنيميشن
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            preloader.classList.add('hide-preloader');
        }
        
        setTimeout(function() {
            startHeroAnimations();
        }, 300);
    }, 2400); 
});

/* ================= Mobile Menu Toggle ================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* ================= Theme Toggle ================= */
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});

/* ================= Projects Filtering ================= */
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function showProjects(startIndex, endIndex) {
        projectCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'flex'; // استخدام flex للحفاظ على التصميم
            } else {
                card.style.display = 'none';
            }
        });
    }

    // أول ما الصفحة تفتح، اعرض أول 3 مشاريع فقط
    showProjects(0, 3);

    // تفعيل الأزرار بناءً على attribute الثابت
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterType = this.getAttribute('data-i18n');

            if (filterType === 'filter_all') {
                showProjects(0, 3);
            } else if (filterType === 'filter_other') {
                showProjects(3, projectCards.length);
            }
        });
    });
});

/* ================= Language Translation System ================= */
const translations = {
    en: {
        nav_logo_name: "Ahmed <span>Mohamed</span>",
        nav_home: "Home", nav_about: "About", nav_edu: "Education", nav_skills: "Skills",
        nav_services: "Services", nav_projects: "Projects", nav_testi: "Testimonials", nav_contact: "Contact",
        
        hero_greet: "<span>|</span> Hi, I'm",
        hero_name: "Ahmed <span>Mohamed</span>",
        hero_title: "Front-End Developer",
        hero_desc: "I design and build clean, responsive websites with a focus<br>on user experience and modern web technologies.<br>Turning ideas into smooth and engaging digital experiences.",
        btn_view_work: "<i class=\"fa-solid fa-arrow-trend-up\"></i> View My Work",
        btn_cv: "<i class=\"fa-solid fa-download\"></i> Download CV",
        badge_role: "Front-End Developer",
        badge_loc: "Based in Egypt",

        about_uni: "Benha University", about_fac: "Faculty of Computers",
        about_role: "Front-End Developer", about_loc: "<i class=\"fa-solid fa-location-dot\"></i> Based in Faqous",
        about_me_tag: "About Me", about_heading: "Who <span>I Am</span>",
        about_desc: "I am a passionate Front-End Developer and a student at the Faculty of Computers and Artificial Intelligence, Benha University. I enjoy turning ideas into interactive and user-friendly web experiences. I work with HTML, CSS, JavaScript, Bootstrap, and React to build clean and efficient interfaces. I have experience in developing various projects, and I am always striving to improve my skills and reach a professional level in web development.",
        about_card1_title: "Web Development", about_card1_desc:"HTML • CSS • JavaScript • Bootstrap • React",
        about_card2_title: "Education", about_card2_desc: "Benha University",
        about_card3_title: "Teamwork", about_card3_desc: "Collaborative & Friendly",
        about_card4_title: "Continuous Learning", about_card4_desc: "Always Improving",
        btn_view_projects: "<i class=\"fa-solid fa-arrow-right\"></i> View My Projects",

        edu_subtitle: "MY EDUCATION & TRAINING", edu_title: "Education & <span>Training</span>",
        edu_desc: "My academic background and professional training have equipped me with<br>the knowledge and skills to build modern web experiences.",
        edu_box1_title: "Education", edu_box1_desc: "My Academic Journey",
        edu_uni_name: "Benha University", edu_uni_fac: "Faculty of Computers and Artificial Intelligence",
        edu_uni_major: "Information Systems (IS)", edu_date: "<i class=\"fa-regular fa-calendar\"></i> 2024 – Present",
        edu_box2_title: "Training", edu_box2_desc: "Professional Development",
        edu_train_title: "Digital Egypt Pioneers Initiative (DEPI)", edu_train_role: "React Frontend Web Developer Trainee | 2026",
        edu_train_li1: "Completed 120+ hours of technical training in frontend and web development.",
        edu_train_li2: "Built interactive and responsive web interfaces using HTML5, CSS, JavaScript, Bootstrap, and React.",
        edu_train_li3: "Currently learning TypeScript, Node.js, Express, Docker, Kubernetes, and software development best practices.",
        edu_train_li4: "Practiced Git and GitHub for version control and project management.",
        edu_train_li5: "Studied UX/UI principles, code style and patterns, functional documentation, and unit testing.",
        edu_train_li6: "Developed practical experience through training modules and a capstone project.",

        skills_subtitle: "MY SKILLS", skills_title: "Technical & <span>Professional</span> Skills",
        skills_desc: "Here are the tools, technologies, and soft skills I use and develop<br>to build modern and efficient web experiences.",
        skill_html_desc: "Semantic and accessible markup for the web.",
        skill_css_desc: "Modern styling with Flexbox and Grid.",
        skill_js_desc: "Logic, interactivity and modern ES6+ features.",
        skill_react_desc: "Building dynamic and scalable user interfaces.",
        skill_boot_desc: "Responsive and beautiful UI components.",
        skill_tail_desc: "Utility-first CSS for faster development.",
        skill_git_desc: "Version control and collaboration.",
        skill_github_desc: "Manage code, collaborate and track progress.",
        skill_vscode_desc: "Powerful editor for better productivity.",
        skill_prob_title: "Problem Solving", skill_prob_desc: "Finding efficient solutions to real-world challenges.",
        skill_resp_title: "Responsive Design", skill_resp_desc: "Creating great experiences on all devices.",
        skill_comm_title: "Communication", skill_comm_desc: "Clear, effective and team-oriented.",

        serv_subtitle: "MY SERVICES", serv_title: "What I <span>Offer</span>",
        serv_desc: "As a Front-End Developer, I provide high-quality web solutions<br>that are modern, responsive, and user-friendly.",
        serv_1_title: "Responsive Web Development", serv_1_desc: "Build websites that look great and work perfectly on all devices and screen sizes.",
        serv_2_title: "UI Component Development", serv_2_desc: "Create reusable and scalable components using React and modern frontend technologies.",
        serv_3_title: "Landing Page Development", serv_3_desc: "Design and develop fast, modern and conversion-focused landing pages.",
        serv_4_title: "UI/UX Implementation", serv_4_desc: "Turn designs into clean, interactive and pixel-perfect interfaces.",
        serv_5_title: "TypeScript Integration", serv_5_desc: "Write clean, maintainable and scalable code with TypeScript.",
        serv_6_title: "Performance Optimization", serv_6_desc: "Improve loading speed and ensure a smooth user experience across all devices.",
        serv_7_title: "Version Control & GitHub", serv_7_desc: "Collaborate effectively and manage projects with Git and GitHub.",
        serv_8_title: "Debugging & Problem Solving", serv_8_desc: "Find and fix issues efficiently with a focus on clean code and best practices.",

        proj_subtitle: "MY WORK", proj_title: "P<span>rojects</span>",
        proj_desc: "Here are some of the projects I've worked on, showcasing my skills<br>and passion for building modern web experiences.",
        proj_cat_personal: "<i class=\"fa-solid fa-desktop\"></i> Personal Website",
        proj_cat_web: "<i class=\"fa-solid fa-laptop-code\"></i> Web Application",
        proj_cat_ui: "<i class=\"fa-solid fa-pen-nib\"></i> UI/UX Project",
        proj_1_desc: "A fully responsive personal portfolio website built with HTML, CSS and JavaScript. It features smooth scrolling navigation, dynamically generated content section, and a clean, modern design.",
        proj_2_desc: "A fully responsive e-commerce website built with HTML and CSS. It features a dedicated fashion catalog for men and women, showcases exclusive summer offers and discounts, with smooth scrolling and a modern, attractive design.",
        proj_3_desc: "A fully responsive restaurant website built with HTML, CSS, and JavaScript. It features an appealing food menu, allows easy table reservations, with smooth scrolling and a modern design that reflects a cozy atmosphere.",
        proj_4_desc: "A fully responsive mental health website built with HTML, CSS, and JavaScript. It provides a safe space to manage stress and build healthy habits, showcases tools for a happier life, with smooth scrolling and a calm, comforting design.",
        proj_5_desc: "A simple, fully responsive restaurant website built with HTML and CSS. It features an elegant food menu and a modern design. As the second website I ever created, it is a simple practical project that reflects my early beginnings and progress in my front-end development learning journey.",
        proj_6_desc: "A fully responsive insurance website built with HTML and CSS. It features a detailed services section, showcases professional agents and policies, with smooth scrolling and a modern, trustworthy design.",
        proj_7_desc: "A very simple web project built using only HTML and CSS. It marks my real starting point in front-end development, and I am proud of it as the very first practical project I ever built at the beginning of my journey in this field.",
        btn_view_proj: "<i class=\"fa-solid fa-arrow-up-right-from-square\"></i> View Project &rarr;",
        
        testi_subtitle: "TESTIMONIALS", testi_title: "What People <span>Say</span>",
        testi_desc: "Here are some kind words from people I've worked with,<br>sharing their experience and feedback about my work.",
        testi_1_role: "Frontend Developer", testi_1_rev: "\"Ahmed was easy to work with and very responsive. He understood the requirements quickly and delivered clean, well-structured code. I appreciated his communication throughout the project.\"",
        testi_2_role: "UI/UX Designer", testi_2_rev: "\"I collaborated with Ahmed on a small web project, and he did a great job. He followed the design closely, was helpful with suggestions, and always met the deadlines. Would definitely work with him again.\"",
        testi_3_role: "Project Manager", testi_3_rev: "\"Ahmed is a dedicated and hardworking developer. He has a solid understanding of front-end technologies and pays attention to details. The project was delivered on time and met our expectations.\"",

        cont_subtitle: "GET IN TOUCH", cont_title: "Contact <span>Me</span>",
        cont_desc: "I'm always open to new opportunities, collaborations, or just a friendly chat.<br>Feel free to reach out — I'd love to hear from you!",
        cont_letstalk: "<span class=\"line\"></span> Let's Talk", cont_getintouch: "Get In Touch",
        cont_info: "Whether you have a project in mind, want to collaborate, or just want to say hello — I'm here and ready to help.",
        cont_email: "Email", cont_phone: "Phone", cont_wa: "WhatsApp",
        cont_loc: "Location", cont_loc_val: "Faqous, Sharqia, Egypt",
        btn_send: "<i class=\"fa-solid fa-paper-plane\"></i> Send Message",
        filter_all: "All", filter_other: "Other",
        ph_name: "Full Name", ph_email: "Email Address", ph_subject: "Subject", ph_msg: "Message",
        foot_text: "© 2026 <span class=\"highlight-name\">Ahmed Mohamed</span>. All rights reserved. Designed & Developed by <span class=\"highlight-name\">Ahmed</span>."
    },
    ar: {
        nav_logo_name: "أحمد <span>محمد</span>",
        nav_home: "الرئيسية", nav_about: "عني", nav_edu: "التعليم", nav_skills: "المهارات",
        nav_services: "الخدمات", nav_projects: "المشاريع", nav_testi: "الآراء", nav_contact: "تواصل معي",

        hero_greet: "<span>|</span> مرحباً، أنا",
        hero_name: "أحمد <span>محمد</span>",
        hero_title: "مطور واجهات أمامية",
        hero_desc: "أصمم وأبني مواقع ويب نظيفة ومتجاوبة مع التركيز<br>على تجربة المستخدم وتقنيات الويب الحديثة.<br>أحول الأفكار إلى تجارب رقمية سلسة وجذابة.",
        btn_view_work: "<i class=\"fa-solid fa-arrow-trend-up\"></i> تصفح أعمالي",
        btn_cv: "<i class=\"fa-solid fa-download\"></i> تحميل السيرة الذاتية",
        badge_role: "مطور واجهات أمامية",
        badge_loc: "مقيم في مصر",

        about_uni: "جامعة بنها", about_fac: "كلية الحاسبات",
        about_role: "مطور واجهات أمامية", about_loc: "<i class=\"fa-solid fa-location-dot\"></i> مقيم في فاقوس ",
        about_me_tag: "نبذة عني", about_heading: "من <span>أنا</span>",
        about_desc: "أنا مطور واجهات أمامية شغوف وطالب في كلية الحاسبات والذكاء الاصطناعي بجامعة بنها. أستمتع بتحويل الأفكار إلى تجارب ويب تفاعلية وسهلة الاستخدام. أعمل باستخدام HTML و CSS و JavaScript و Bootstrap و React لبناء واجهات نظيفة وفعالة. لدي خبرة في تطوير مشاريع متنوعة، وأسعى دائمًا لتحسين مهاراتي والوصول إلى مستوى احترافي في تطوير الويب.",
        about_card1_title: "تطوير الويب", about_card1_desc: "HTML • CSS • JavaScript • Bootstrap • React",
        about_card2_title: "التعليم", about_card2_desc: "جامعة بنها",
        about_card3_title: "العمل الجماعي", about_card3_desc: "متعاون وودود",
        about_card4_title: "التعلم المستمر", about_card4_desc: "تطور دائم",
        btn_view_projects: "<i class=\"fa-solid fa-arrow-left\"></i> تصفح مشاريعي",

        edu_subtitle: "التعليم والتدريب", edu_title: "التعليم <span>والتدريب</span>",
        edu_desc: "خلفيتي الأكاديمية وتدريبي المهني زوداني بالمعرفة<br>والمهارات اللازمة لبناء تجارب ويب حديثة.",
        edu_box1_title: "التعليم", edu_box1_desc: "مسيرتي الأكاديمية",
        edu_uni_name: "جامعة بنها", edu_uni_fac: "كلية الحاسبات والذكاء الاصطناعي",
        edu_uni_major: "نظم المعلومات", edu_date: "<i class=\"fa-regular fa-calendar\"></i> 2024 – الحاضر",
        edu_box2_title: "التدريب", edu_box2_desc: "التطوير المهني",
        edu_train_title: "مبادرة رواد مصر الرقمية (DEPI)", edu_train_role: "متدرب تطوير واجهات أمامية (React) | 2026",
        edu_train_li1: "إكمال أكثر من 120 ساعة من التدريب التقني في تطوير الواجهات الأمامية.",
        edu_train_li2: "بناء واجهات تفاعلية ومتجاوبة باستخدام HTML5 و CSS و JavaScript و Bootstrap و React.",
        edu_train_li3: "أتعلم حالياً TypeScript و Node.js و Express و Docker و Kubernetes وأفضل الممارسات.",
        edu_train_li4: "استخدام Git و GitHub للتحكم في الإصدارات وإدارة المشاريع.",
        edu_train_li5: "دراسة مبادئ تصميم تجربة/واجهة المستخدم وأنماط الأكواد والتوثيق الوظيفي.",
        edu_train_li6: "اكتساب خبرة عملية من خلال وحدات التدريب ومشاريع التخرج.",

        skills_subtitle: "مهاراتي", skills_title: "المهارات التقنية <span>والمهنية</span>",
        skills_desc: "إليك الأدوات والتقنيات والمهارات الشخصية التي أستخدمها وأطورها<br>لبناء تجارب ويب حديثة وفعالة.",
        skill_html_desc: "كتابة هيكل دلالي ويسهل الوصول إليه للويب.",
        skill_css_desc: "تنسيق حديث باستخدام Flexbox و Grid.",
        skill_js_desc: "المنطق والتفاعل وميزات ES6+ الحديثة.",
        skill_react_desc: "بناء واجهات مستخدم تفاعلية وقابلة للتطوير.",
        skill_boot_desc: "مكونات واجهة مستخدم متجاوبة وجميلة.",
        skill_tail_desc: "استخدام CSS يعتمد على الخدمات لسرعة التطوير.",
        skill_git_desc: "التحكم في الإصدارات والتعاون في الأكواد.",
        skill_github_desc: "إدارة الكود والتعاون ومتابعة التقدم.",
        skill_vscode_desc: "محرر قوي لإنتاجية أفضل.",
        skill_prob_title: "حل المشكلات", skill_prob_desc: "إيجاد حلول فعالة للتحديات الواقعية.",
        skill_resp_title: "التصميم المتجاوب", skill_resp_desc: "إنشاء تجارب رائعة على جميع الأجهزة.",
        skill_comm_title: "التواصل", skill_comm_desc: "تواصل واضح، فعال وموجه نحو الفريق.",

        serv_subtitle: "خدماتي", serv_title: "ماذا <span>أقدم</span>",
        serv_desc: "كمطور واجهات أمامية، أقدم حلول ويب عالية الجودة<br>تتميز بالحداثة والتجاوب وسهولة الاستخدام.",
        serv_1_title: "تطوير ويب متجاوب", serv_1_desc: "بناء مواقع تبدو رائعة وتعمل بشكل مثالي على جميع الأجهزة والشاشات.",
        serv_2_title: "تطوير مكونات الواجهة", serv_2_desc: "إنشاء مكونات قابلة لإعادة الاستخدام باستخدام React والتقنيات الحديثة.",
        serv_3_title: "تصميم صفحات الهبوط", serv_3_desc: "تصميم وتطوير صفحات هبوط سريعة وحديثة تركز على التحويل.",
        serv_4_title: "تطبيق تجربة المستخدم", serv_4_desc: "تحويل التصميمات إلى واجهات نظيفة وتفاعلية ودقيقة التفاصيل.",
        serv_5_title: "التكامل مع TypeScript", serv_5_desc: "كتابة كود نظيف وقابل للصيانة وقابل للتطوير باستخدام TypeScript.",
        serv_6_title: "تحسين الأداء", serv_6_desc: "تحسين سرعة التحميل وضمان تجربة مستخدم سلسة على جميع الأجهزة.",
        serv_7_title: "التحكم في الإصدارات (GitHub)", serv_7_desc: "التعاون بفعالية وإدارة المشاريع باستخدام Git و GitHub.",
        serv_8_title: "تصحيح الأخطاء وحل المشاكل", serv_8_desc: "اكتشاف الأخطاء وإصلاحها بكفاءة مع التركيز على الكود النظيف وأفضل الممارسات.",

        proj_subtitle: "أعمالي", proj_title: "المشـ<span>ـاريع</span>",
        proj_desc: "إليك بعض المشاريع التي عملت عليها، تعرض مهاراتي<br>وشغفي ببناء تجارب ويب حديثة.",
        proj_cat_personal: "<i class=\"fa-solid fa-desktop\"></i> موقع شخصي",
        proj_cat_web: "<i class=\"fa-solid fa-laptop-code\"></i> تطبيق ويب",
        proj_cat_ui: "<i class=\"fa-solid fa-pen-nib\"></i> مشروع UI/UX",
        proj_1_desc: "موقع محفظة شخصية متجاوب بالكامل تم بناؤه باستخدام HTML و CSS و JavaScript. يتميز بتنقل سلس، وقسم محتوى ديناميكي، وتصميم نظيف وحديث.",
        proj_2_desc: "موقع تجارة إلكترونية متجاوب بالكامل تم بناؤه باستخدام HTML و CSS. يتميز بكتالوج أزياء للرجال والنساء، ويعرض عروض وتخفيضات حصرية، مع تصميم عصري وجذاب.",
        proj_3_desc: "موقع مطعم متجاوب بالكامل تم بناؤه باستخدام HTML و CSS و JavaScript. يتميز بقائمة طعام جذابة، ويتيح حجز الطاولات بسهولة، مع تصميم يعكس أجواء مريحة.",
        proj_4_desc: "موقع للصحة النفسية متجاوب بالكامل تم بناؤه باستخدام HTML و CSS و JavaScript. يوفر مساحة آمنة لإدارة التوتر، ويعرض أدوات لحياة أكثر سعادة، بتصميم هادئ ومريح.",
        proj_5_desc: "موقع مطعم بسيط ومتجاوب تم بناؤه باستخدام HTML و CSS. يتميز بقائمة طعام أنيقة. هو ثاني موقع قمت بإنشائه، ويعكس بداياتي وتقدمي في رحلة تطوير الواجهات الأمامية.",
        proj_6_desc: "موقع تأمين متجاوب بالكامل تم بناؤه باستخدام HTML و CSS. يتميز بقسم مفصل للخدمات، ويعرض الوكلاء والسياسات، بتصميم حديث وموثوق.",
        proj_7_desc: "مشروع ويب بسيط جداً تم بناؤه باستخدام HTML و CSS فقط. يمثل نقطة انطلاقي الحقيقية في تطوير الواجهات الأمامية، وأنا فخور به كأول مشروع عملي أقوم ببنائه.",
        btn_view_proj: "<i class=\"fa-solid fa-arrow-up-right-from-square\"></i> تصفح المشروع &larr;",

        testi_subtitle: "الآراء", testi_title: "ماذا يقول <span>الناس</span>",
        testi_desc: "إليك بعض الكلمات الطيبة من أشخاص عملت معهم،<br>يشاركون تجربتهم وآرائهم حول عملي.",
        testi_1_role: "مطور واجهات أمامية", testi_1_rev: "\"كان العمل مع أحمد سهلاً وكان متجاوبًا للغاية. لقد فهم المتطلبات بسرعة وسلم أكواداً نظيفة ومنظمة بشكل جيد. أقدر تواصله طوال فترة المشروع.\"",
        testi_2_role: "مصمم تجربة/واجهة المستخدم", testi_2_rev: "\"تعاونت مع أحمد في مشروع ويب صغير، وقام بعمل رائع. اتبع التصميم بدقة، وكان متعاوناً باقتراحاته، والتزم دائماً بالمواعيد النهائية. بالتأكيد سأعمل معه مرة أخرى.\"",
        testi_3_role: "مدير مشاريع", testi_3_rev: "\"أحمد مطور مخلص ومجتهد. لديه فهم قوي لتقنيات الواجهة الأمامية ويهتم بالتفاصيل. تم تسليم المشروع في الوقت المحدد وحقق توقعاتنا.\"",

        cont_subtitle: "تواصل معي", cont_title: "اتصل <span>بي</span>",
        cont_desc: "أنا دائماً منفتح على الفرص الجديدة، والتعاون، أو حتى لدردشة ودية.<br>لا تتردد في التواصل — يسعدني أن أسمع منك!",
        cont_letstalk: "<span class=\"line\"></span> لنتحدث", cont_getintouch: "ابقى على تواصل",
        cont_info: "سواء كان لديك مشروع في ذهنك، أو ترغب في التعاون، أو فقط تريد إلقاء التحية — أنا هنا ومستعد للمساعدة.",
        cont_email: "البريد الإلكتروني", cont_phone: "الهاتف", cont_wa: "واتساب",
        cont_loc: "الموقع", cont_loc_val: "فاقوس، الشرقية، مصر",
        btn_send: "<i class=\"fa-solid fa-paper-plane\"></i> إرسال رسالة",
        filter_all: "الكل", filter_other: "أخرى",
        ph_name: "الاسم الكامل", ph_email: "البريد الإلكتروني", ph_subject: "الموضوع", ph_msg: "الرسالة",
        foot_text: "© 2026 <span class=\"highlight-name\">أحمد محمد</span>. جميع الحقوق محفوظة. تم التصميم والتطوير بواسطة <span class=\"highlight-name\">أحمد</span>."
    }
};

const langToggle = document.getElementById('langToggle');

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
});


document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
});
