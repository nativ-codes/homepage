import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function About({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.article',
				scrub: 0.5,
				start: 'top top',
				pin: '.about-section',
			}
		}).to('.article', {
			y: "-=50%"
		});
	}, []);

	return (
		<section className="flex h-screen overflow-hidden about-section" id="about">
			<div className="bg-primary h-screen w-[50vw] shrink-0 relative z-10 justify-center flex items-center">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">ABOUT</div>
				<svg viewBox="0 0 512 512" width="130" height="130" className="absolute right-[-65px] top-[96px]">
					<clipPath id="hexagon">
						<path id="heart" d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
						c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
						c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"/>
					</clipPath>

					<image href="/assets/images/logo.png" width="100%" height="100%" clipPath="url(#hexagon)" />
				</svg>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="h-[200vh] w-[50vw] article bg-white p-[96px]" id="about-right">
				At NativCodes, we build web and mobile apps. That&apos;s it.
			</div>
		</section>
	);
}

/*

js react
html css
nodejs php
mongodb mysql
git docker

*/

export default About;