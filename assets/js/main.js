/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
/*===== ACTIVE AND REMOVE LINK DECO =====*/
$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#nav-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__section', {});
// sr.reveal('.home__img', { delay: 400 });
// sr.reveal('.home__container', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__section', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL EDUCATION*/
sr.reveal('.education__section', {});
sr.reveal('.education__section', { delay: 400 });

/*SCROLL RESUME*/
sr.reveal('.resume__section', {});
sr.reveal('.resume__img', { delay: 200 })

/*SCROLL EXPERIENCE*/
sr.reveal('.experience__section', {});

/*SCROLL SKILLS*/
sr.reveal('.skills__section', {})
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });


/*SCROLL CONTACT*/
sr.reveal('.contact__section', {});
sr.reveal('.contact__input', { interval: 200 }); 