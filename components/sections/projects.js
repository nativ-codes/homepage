import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

function Projects({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.projects',
				scrub: 0.5,
				start: 'top top',
				end: '500%',
				pin: '.projects-section'
			}
		}).to('.projects', {
			x: "-=250vw"
		})
	}, []);

	return (
		<section className="flex flex-row projects-section">
			<div className="shrink-0 h-screen w-[50vw] bg-white z-10">This is the PROJECTS section</div>
			<div className="flex flex-row projects">
				<div className="h-screen w-[50vw] bg-[red]">section red</div>
				<div className="h-screen w-[50vw] bg-[blue]">section blue</div>
				<div className="h-screen w-[50vw] bg-[red]">section red</div>
				<div className="h-screen w-[50vw] bg-[blue]">section blue</div>
				<div className="h-screen w-[50vw] bg-[red]">section red</div>
				<div className="h-screen w-[50vw] bg-[blue]">section blue</div>
			</div>
		</section>
	);
}

export default Projects;