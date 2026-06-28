import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import Logo from "../ui/logo";
import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
	getHeaderLargeScreenTimeline,
	getHeaderSmallScreenTimeline,
} from "../../utils/timelines";

function Header({}) {
	useResponsiveTimeline({
		largeScreenTimelineFn: getHeaderLargeScreenTimeline,
		smallScreenTimelineFn: getHeaderSmallScreenTimeline,
	});

	return (
		<section
			className="bg-dark h-screen w-screen header-section text-white flex justify-center"
			id="home"
		>
			<div className="absolute px-2 font-bold text-base top-8">
				Web & Mobile App Development
			</div>
			<Logo isPrimary />
			<div className="absolute z-10 bottom-0">
				<Menu theme="white" />
			</div>
		</section>
	);
}

export default Header;
