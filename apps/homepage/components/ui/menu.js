import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useResponsive } from "../../utils/use-responsive-timeline";
const sections = ["home", "/", "about", "/", "work", "/", "contact", "/", "blog"];

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
				) : page === "blog" ? (
					<li
						key={`${page}-${index}`}
						className="px-2 font-bold text-sm"
					>
						<a 
							href="http://localhost:3003" 
							target="_blank" 
							rel="noopener noreferrer"
							className="cursor-pointer inline-flex items-center gap-1"
						>
							{page.toUpperCase()}
							<svg 
								className="w-5 h-5" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
								/>
							</svg>
						</a>
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
