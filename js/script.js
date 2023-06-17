const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll('.navbar-menu li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        const section = document.querySelector(target);
        const sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    });
});

const fadeIn = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		fadeIn.style.backgroundColor = '#29323c';
	} else {
		fadeIn.style.backgroundColor = 'transparent';
	}
});