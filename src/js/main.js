const navMobile = document.querySelector('.nav-mobile');
const navMobileBtn = document.querySelector('.nav-mobile__btn');
const navMobileBtnItem = document.querySelector('.icon-tabler-chevron-right');
const textTypewriter = document.querySelector('.header__textarea-title');
const navMobileItems = document.querySelectorAll('.nav-mobile__list-item, .nav-mobile__list-item-projects');
const projectsListBtn = document.querySelector('.icon-tabler-chevron-down');
const projectsList = document.querySelector('.nav-mobile__list-two');
const sections = document.querySelectorAll('header, section');
const footerYear = document.querySelector('.footer__copyright-year');
const switchingColorButton = document.querySelector('.theme-button');
const switchingIcon = switchingColorButton.querySelector('.theme-icon');

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

// Swiching theme colors
const changeColors = () => {
	console.log(switchingColorButton);
	switchingColorButton.classList.toggle('dark');
	switchingColorButton.classList.toggle('light');
	switchingIcon.classList.toggle('dark');
	switchingIcon.classList.toggle('light');
	checkColors();
};

const checkColors = () => {
	if (switchingColorButton.classList.contains('light')) {
		document.documentElement.style.setProperty('--second-bg-color', '#f8f9ff');
		document.documentElement.style.setProperty('--first-font-color', '#f8f9ff');
		document.documentElement.style.setProperty('--second-font-color', '#000000');
		document.documentElement.style.setProperty('--third-bg-color', '#150f68');
		document.documentElement.style.setProperty('--fourth-bg-color', '#2c23af');
		document.documentElement.style.setProperty('--second-shadow-color', '#9695b68e');
		document.documentElement.style.setProperty('--fourth-font-color', '#2c23af');
		document.documentElement.style.setProperty('--fifth-font-color', '#150f68');
	} else if (switchingColorButton.classList.contains('dark')) {
		document.documentElement.style.setProperty('--second-bg-color', '#070e21');
		document.documentElement.style.setProperty('--first-font-color', '#000000');
		document.documentElement.style.setProperty('--second-font-color', '#f8f9ff');
		document.documentElement.style.setProperty('--third-bg-color', '#2c23af');
		document.documentElement.style.setProperty('--fourth-bg-color', '#150f68');
		document.documentElement.style.setProperty('--second-shadow-color', '#150f6893');
		document.documentElement.style.setProperty('--fourth-font-color', '#150f68');
		document.documentElement.style.setProperty('--fifth-font-color', '#2c23af');
	}
};

function handleCurrentYear() {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
}

switchingColorButton.addEventListener('click', changeColors);
projectsListBtn.addEventListener('click', showProjectsList);
navMobileItems.forEach(el => el.addEventListener('click', showNavMobile));
navMobileBtn.addEventListener('click', showNavMobile);

checkColors();
typewriter();
handleCurrentYear();
