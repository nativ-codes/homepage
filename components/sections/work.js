import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

var frame_count  = 29,
	offset_value = 316;

function Projects({}) {
	useEffect(() => {
	// 	gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '.work',
	// 			scrub: 0.5,
	// 			start: 'top top',
	// 			end: '200%',
	// 			pin: '.work-section',
	// 		}
	// 	})

		gsap.to("#work-listra", {
		  backgroundPosition: (-offset_value * frame_count) + "px 0px",
		  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
		  scrollTrigger: {
		    trigger: ".work-section",
		    start: "top top",
		    end: "+=" + (frame_count * offset_value),
		    pin: true,
		    scrub: true,
		    markers: true,
		  }
		});
	}, []);

	return (
		<section className="flex flex-row work-section" id="work">
			<div className="shrink-0 h-screen w-[50vw] bg-white z-10 relative justify-center flex items-center">
				<div className="font-[LemonMilk] text-dark text-5xl tracking-wider">WORK</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="dark" />
				</div>
			</div>
			<div className="flex flex-row flex-1 work items-center justify-center">
				<div id="work-listra" className="align-center"/>
				<div id="download" />
			</div>
		</section>
	);
}

export default Projects;