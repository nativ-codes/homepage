import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function Projects({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.work',
				scrub: 0.5,
				start: 'top top',
				end: '500%',
				pin: '.work-section',
			}
		}).to('.work', {
			x: "-=250vw",
		})
	}, []);

	return (
		<section className="flex flex-row work-section" id="work">
			<div className="shrink-0 h-screen w-[50vw] bg-white z-10 relative justify-center flex items-center">
				<div className="font-[LemonMilk] text-dark text-5xl tracking-wider">WORK</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="dark" />
				</div>
			</div>
			<div className="flex flex-row work">
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