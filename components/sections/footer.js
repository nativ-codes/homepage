import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Logo from '../ui/logo';

import useResponsiveTimeline from '../../utils/use-responsive-timeline';
import {getFooterTimeline} from '../../utils/timelines';

function Footer({}) {
	useResponsiveTimeline({
		screenTimelineFn: getFooterTimeline
	});

	return (
		<section className="footer-section bg-primary flex justify-center h-screen w-screen" id="footer">
			<Logo />
		</section>
	);
}

export default Footer;