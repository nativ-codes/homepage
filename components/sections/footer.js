import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Logo from '../ui/logo';

function Footer({}) {
	// useEffect(() => {
	// 	gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '.footer-section',
	// 			scrub: 0.5,
	// 			end: '+=400%',
	// 			pin: true,
	// 			pinSpacing: true
	// 		}
	// 	}).to('.text', {
	// 		opacity: 0,
	// 		duration: 0.2
	// 	}, 0).to('.left-arrow', {
	// 		translateX: -280,
	// 		translateY: -50,
	// 	}, 0).to('.right-arrow', {
	// 		translateX: 280,
	// 		translateY: 90,
	// 	}, 0).to('.logo', {
	// 		rotation: -90
	// 	}, 0);
	// }, []);

	return (
		<section className="footer-section bg-primary flex justify-center h-screen w-screen" id="footer">
			<Logo />
		</section>
	);
}

export default Footer;