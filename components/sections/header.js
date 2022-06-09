import {useEffect} from 'react';
import { gsap } from 'gsap/dist/gsap';

import Logo from '../ui/logo';
import Menu from '../ui/menu';

function Header({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.header-section',
				// start: "top top", 
				pin: true, 
				pinSpacing: false
			}
		})
	}, []);

	return (
		<section className="bg-dark h-screen w-screen header-section text-white flex justify-center" id="home">
			<div className="absolute">
				<Menu theme="primary" />
			</div>
			<Logo />
		</section>
	);
}

export default Header;