


// منع المتصفح من تذكر مكان النزول بعد الريفريش
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// إجبار الصفحة على الرجوع لأعلى نقطة عند التحميل
window.scrollTo(0, 0);







/* ======          Loading Screen   =========== Preloader Logic ================= */
window.addEventListener('load', function() {
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
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

    showProjects(0, 3);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const btnText = this.textContent.trim();

            if (btnText === 'All') {
                showProjects(0, 3);
            } else if (btnText === 'Other') {
                showProjects(3, 7);
            }
        });
    });
});

















/* ================= Loading Screen & Hero Animations ================= */

function startHeroAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    

    fadeElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(element);
    });
}


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





























