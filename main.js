



/* ======          Loading Screen   =========== Preloader Logic ================= */
window.addEventListener('load', function() {
    // 1000 مللي ثانية يعني ثانية واحدة بالظبط
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            preloader.classList.add('hide-preloader');
        }
    }, 2400); 
});
















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







// ================= projects============اعرض أول 3 مشاريع===========

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function showProjects(startIndex, endIndex) {
        projectCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block'; // إظهار الكارت
            } else {
                card.style.display = 'none'; // إخفاء الكارت
            }
        });
    }

    // 1. أول ما الصفحة تفتح، اعرض أول 3 مشاريع فقط (من الفهرس 0 إلى 2)
    showProjects(0, 3);

    // 2. تفعيل الأزرار
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const btnText = this.textContent.trim();

            if (btnText === 'All') {
                // عرض أول 3 مشاريع
                showProjects(0, 3);
            } else if (btnText === 'Other') {
                // عرض الـ 4 مشاريع المتبقية (من الفهرس 3 إلى 7)
                showProjects(3, 7);
            }
        });
    });
});













