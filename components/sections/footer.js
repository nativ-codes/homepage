import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Logo from "../ui/logo-expanded";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
	getFooterLargeScreenTimeline,
	getFooterSmallScreenTimeline,
} from "../../utils/timelines";

function Footer({}) {
	useResponsiveTimeline({
		largeScreenTimelineFn: getFooterLargeScreenTimeline,
		smallScreenTimelineFn: getFooterSmallScreenTimeline,
	});

	return (
		<section
			className="footer-section bg-primary flex justify-center h-screen w-screen"
			id="footer"
		>
			<Logo />
		</section>
	);
}

export default Footer;
