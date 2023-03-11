import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function Contact({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.contact-section',
				scrub: 1,
				start: 'top top',
				pin: '.contact-section',
				end: '+=200%',
			}
		});
	}, []);

	return (
		<section className="flex h-screen overflow-hidden contact-section" id="contact">
			<div className="bg-dark h-screen w-[50vw] shrink-0 relative z-10 justify-center flex items-center">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">CONTACT</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="w-[50vw] bg-white p-[96px]">
				<div className="mb-10">
					<h1 className="text-4xl font-bold text-dark">Let&apos;s get in touch</h1>
					<div className="text-lg mt-5 text-dark">Or you can reach us anytime via <span className="italic">hello@nativ.codes</span></div>
				</div>
				<form className="flex flex-col flex-1 justify-center contact-article">
					<input className="outline-none border-0 border-b-[1px] border-[#ccc] focus:border-primary py-2 px-1 text-lg" placeholder="Name" />
					<input className="outline-none border-0 border-b-[1px] border-[#ccc] focus:border-primary py-2 px-1 text-lg mt-8" placeholder="Email" />
					<textarea className="outline-none border-0 border-b-[1px] border-[#ccc] mt-8 focus:border-primary py-2 px-1 text-lg" placeholder="Enter your message" />
					<input type="submit" value="SUBMIT" className="outline-none border-0 mt-8 bg-primary text-white font-bold py-4" placeholder="Enter your message" />
				</form>
			</div>
		</section>
	);
}

export default Contact;