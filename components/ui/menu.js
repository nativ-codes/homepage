import { gsap } from 'gsap/dist/gsap';

const sections = ['home', '/', 'about', '/', 'work', '/', 'contact'];

function Menu({theme}) {
	const scrollTo = (page, key) => () => {
		const scrollToMapper = {
			home: 0,
			about: window.innerHeight,
			work: window.innerHeight * 4,
			contact: window.innerHeight * 10
		}
		console.log("key", key);
		console.log("page", page);
		// gsap.to(window, {duration: 1, scrollTo: {y: key === 0 ? 0 : key*100}})

		// if(page === 'about') {
		// 	gsap.to(window, {duration: 1, scrollTo: key === 0?0:`${key*100}vh`})
		// 	console.log("document.querySelector('#about')", document.querySelector('#about'));
		// } else {
			// gsap.to(window, {duration: 1, scrollTo: scrollToMapper[page]});
			// gsap.to(document.querySelector('#about-right'), {duration: 2, scrollTo: 'max'});
		// }
		window.scrollTo({
			top: scrollToMapper[page],
			behavior: 'smooth'
		});
		// console.log("scrollTo[page]", scrollTo[page], scrollTo);

	}

	return (
		<ul className={`flex flex-row text-${theme} my-8`}>
			{sections.map((page, key) => page === '/' ? (
				<li className="px-2 font-bold text-sm">{page}</li>
			) : (
				<li className="px-2 cursor-pointer font-bold text-sm" onClick={scrollTo(page, key)}>{page.toUpperCase()}</li>
			))}
		</ul>
	)
}

export default Menu;