import {useResponsive} from '../../utils/use-responsive-timeline';
const sections = ['home', '/', 'about', '/', 'work', '/', 'contact'];

function Menu({theme}) {
	const isSmallScreen = useResponsive();

	const scrollTo = page => () => {
		const largeScreenMapper = {
			home: 0,
			about: window.innerHeight * 2,
			work: window.innerHeight * 4,
			contact: window.innerHeight * 18
		}
		const smallScreenMapper = {
			home: 0,
			about: window.innerHeight * 2,
			work: window.innerHeight * 5.5,
			contact: window.innerHeight * 21
		}

		window.scrollTo({
			top: (isSmallScreen ? smallScreenMapper : largeScreenMapper)[page],
			behavior: 'smooth'
		});
	}

	return (
		<ul className={`flex flex-row text-${theme} my-8`}>
			{sections.map((page, index) => page === '/' ? (
				<li key={`${page}-${index}`} className="px-2 font-bold text-sm">{page}</li>
			) : (
				<li key={`${page}-${index}`} className="px-2 font-bold text-sm cursor-pointer" onClick={scrollTo(page)}>{page.toUpperCase()}</li>
			))}
		</ul>
	)
}

export default Menu;