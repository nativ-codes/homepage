import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useResponsive } from "../../utils/use-responsive-timeline";
const sections = ["home", "/", "about", "/", "work", "/", "contact"];

function Menu({ theme }) {
	const isSmallScreen = useResponsive();
	const searchParams = useSearchParams();
	const searchParamsPage = searchParams.get('page');

	const scrollTo = (page) => () => {
		// Refresh ScrollTrigger to get accurate positions
		ScrollTrigger.refresh();

		const largeScreenMapper = {
			home: 0,
			about: window.innerHeight * 2,
			work: window.innerHeight * 4,
			contact: window.innerHeight * 10,
		};
		const smallScreenMapper = {
			home: 0,
			about: window.innerHeight * 2,
			work: window.innerHeight * 6,
			contact: window.innerHeight * 14,
		};

		window.scrollTo({
			top: (isSmallScreen ? smallScreenMapper : largeScreenMapper)[page],
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (searchParamsPage) {
			// Small delay to ensure ScrollTrigger is initialized
			setTimeout(() => {
				ScrollTrigger.refresh();
				scrollTo(searchParamsPage)();
			}, 100);
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
