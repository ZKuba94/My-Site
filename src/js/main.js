const navMobile = document.querySelector('.nav-mobile');
const navMobileBtn = document.querySelector('.nav-mobile__btn');
const navMobileBtnItem = document.querySelector('.icon-tabler-chevron-right');
const textTypewriter = document.querySelector('.header__textarea-title');
const navMobileItems = document.querySelectorAll('.nav-mobile__list-item, .nav-mobile__list-item-projects');
const projectsListBtn = document.querySelector('.icon-tabler-chevron-down');
const projectsList = document.querySelector('.nav-mobile__list-two');
const sections = document.querySelectorAll('header, section');
const footerYear = document.querySelector('.footer__copyright-year');

const messageArray = [`> Hi, I'm Jakub,<br> > Welcome on my website!`];
let txtPos = -10;
const speed = 100;

const typewriter = () => {
	document.querySelector('.header__textarea-title').innerHTML =
		messageArray[0].substring(0, txtPos) + `<span class="blinker">\u25ae</span>`;
	if (txtPos++ != messageArray[0].length) setTimeout(typewriter, speed);
};

const showNavMobile = () => {
	if (!navMobileBtnItem.classList.contains('chevron-right-rotate')) {
		navMobile.style.transform = 'translateX(100%)';
		navMobileBtn.style.animationPlayState = 'paused';
		navMobileBtnItem.classList.add('chevron-right-rotate');
	} else {
		navMobile.style.transform = 'translateX(0)';
		navMobileBtn.style.animationPlayState = 'running';
		navMobileBtnItem.classList.remove('chevron-right-rotate');
	}
};

const showProjectsList = () => {
	projectsList.classList.toggle('nav-mobile__list-two-show');
};

// scrollspy
window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 300;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			document.querySelectorAll('header nav ul a').forEach(link => {
				link.classList.remove('active');
				document.querySelector('header nav ul a[href*=' + id + ']').classList.add('active');
			});
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

projectsListBtn.addEventListener('click', showProjectsList);
navMobileItems.forEach(el => el.addEventListener('click', showNavMobile));
navMobileBtn.addEventListener('click', showNavMobile);

typewriter();
handleCurrentYear();
