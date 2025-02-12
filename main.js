/*----------------------   Toggle Icon NavBar   -----------------------------*/


let newIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

newIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*----------------------   Scroll Section Active Link   -----------------------------*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*----------------------   Sticky NavBar   -----------------------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100) ;

/*---------------------- Remove Toggle Icon and NavBar   -----------------------------*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*----------------------   scroll reveal   -----------------------------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    display: 200,
});

ScrollReveal().reveal('.home-content, heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

/*---------------- Typed JS--------------------------- */


var typed = new Typed("#element", {
    strings: ["Frontend Developer", "Web Designer", "Youtuber","Backend Developer","FullStack Developer","Coder"],
    typeSpeed : 50,
    startDelay: 500,
    backDelay: 1000,
    backSpeed: 15,
    loop: true,
    loopCount: 2,
    showCursor: true,
    cursorChar:"..."
});


