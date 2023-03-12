const sections = ['home', '/', 'about', '/', 'work', '/', 'contact'];

function Menu({theme}) {
	const scrollTo = page => () => {
		const scrollToMapper = {
			home: 0,
			about: window.innerHeight,
			work: window.innerHeight * 7,
			contact: window.innerHeight * 21
		}

		window.scrollTo({
			top: scrollToMapper[page],
			behavior: 'smooth'
		});
	}

	return (
		<ul className={`flex flex-row text-${theme} my-8`}>
			{sections.map(page => page === '/' ? (
				<li className="px-2 font-bold text-sm">{page}</li>
			) : (
				<li className="px-2 font-bold text-sm cursor-pointer" onClick={scrollTo(page)}>{page.toUpperCase()}</li>
			))}
		</ul>
	)
}

export default Menu;