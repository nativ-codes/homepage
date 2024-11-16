import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { useResponsive } from "../../utils/use-responsive-timeline";
const sections = ["home", "/", "about", "/", "work", "/", "contact"];

function Menu({ theme }) {
	const isSmallScreen = useResponsive();
	const searchParams = useSearchParams();
	const searchParamsPage = searchParams.get('page');

	const scrollTo = (page) => () => {
		const largeScreenMapper = {
			home: 0,
			about: window.innerHeight * 2,
			work: window.innerHeight * 4,
			contact: window.innerHeight * 7,
		};
		const smallScreenMapper = {
			home: 0,
			about: window.innerHeight,
			work: window.innerHeight * 3,
			contact: window.innerHeight * 5,
		};

		window.scrollTo({
			top: (isSmallScreen ? smallScreenMapper : largeScreenMapper)[page],
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (searchParamsPage) {
			scrollTo(searchParamsPage)();
		}
	}, [searchParamsPage])

	return (
		<ul className={`flex flex-row text-${theme} my-8`}>
			{sections.map((page, index) =>
				page === "/" ? (
					<li
						key={`${page}-${index}`}
						className="px-2 font-bold text-sm"
					>
						{page}
					</li>
				) : (
					<li
						key={`${page}-${index}`}
						className="px-2 font-bold text-sm cursor-pointer"
						onClick={scrollTo(page)}
					>
						{page.toUpperCase()}
					</li>
				)
			)}
		</ul>
	);
}

function MenuWrapper(props) {
	return (
		<Suspense fallback={null}>
			<Menu {...props} />
		</Suspense>
	);
}

export default MenuWrapper;
