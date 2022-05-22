const navLogin = document.querySelector('#nav__login');
const formLogin = document.querySelector('.section__login');

navLogin.addEventListener('click', (event)=>{
	event.preventDefault();
	const item = event.target;
	navLogin.classList.toggle('invisible');
	setTimeout(function() {
		formLogin.classList.toggle('invisible');
	}, 250);
	
});