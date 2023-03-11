import { useEffect } from 'react';
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

const listraFramesCount = 29;
const listraFrameWidth = 316;

const googlePlayListra = "https://play.google.com/store/apps/details?id=com.listra";
const appStoreListra = "https://apps.apple.com/ro/app/listra-shopping-list-notes/id6445855837";

function Projects({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: ".work-section",
				start: "top top",
				end: "+=" + (listraFramesCount * listraFrameWidth),
				pin: true,
				scrub: true,
				// markers: true,
			}
		}).to("#work-listra", {
		  backgroundPosition: (-listraFrameWidth * listraFramesCount) + "px 0px",
		  ease: "steps(" + listraFramesCount + ")", // use a stepped ease for the sprite sheet
		}, 0).to("#download-listra", {
		  opacity: 1
		}, ">").to("#sprite-listra", {
		  opacity: 0
		}, "<");
	}, []);

	return (
		<section className="flex flex-row work-section" id="work">
			<div className="shrink-0 h-screen w-[50vw] bg-white z-10 relative justify-center flex items-center">
				<div className="font-[LemonMilk] text-dark text-5xl tracking-wider">WORK</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="dark" />
				</div>
			</div>
			<div className="relative flex flex-1">
				<div class="absolute inset-0 flex items-center justify-center" id="sprite-listra">
					<div id="work-listra" className="align-center"/>
				</div>
				<div class="absolute inset-0 opacity-0 flex items-center justify-center flex-col" id="download-listra">
					<img src="/projects/listra/listra-logo.png" />
					<div className="flex flex-row mt-10">
					 <a target="_blank" href={appStoreListra} className="cursor-pointer">
						<img src="/projects/app-store.png" className="flex flex-row mr-4" />
					</a>
					 <a target="_blank" href={googlePlayListra} className="cursor-pointer">
						<img src="/projects/google-play.png" />
					</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

// https://codeshack.io/images-sprite-sheet-generator/
