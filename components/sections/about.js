import { useEffect } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function About({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.article',
				scrub: 0.5,
				start: 'top top',
				end: '+=500%',
				pin: '.about-section',
			}
		}).to('.html-tech-stack', {
			opacity: 0
		}, '>').to('.javascript-tech-stack', {
			opacity: 0
		}, '>').to('.nodejs-tech-stack', {
			opacity: 0
		}, '>').to('.mongodb-tech-stack', {
			opacity: 0
		}, '>').to('.git-tech-stack', {
			opacity: 0
		}, '>');
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
				<h1 className="text-4xl font-bold text-dark mb-5">Hello world!</h1>
				<div className="text-lg text-dark mt-2">Welcome to <span className="italic">NativCodes</span>, the place where we play with <span className="italic">The Code</span> and build awesome apps.</div>
				<div className="text-lg text-dark mt-2">We are a team of tech enthusiasts who thrive on solving complex problems and transforming ideas into reality. Our expertise lies in developing native applications for iOS and Android platforms, as well as building responsive websites using cutting-edge technologies.</div>
				<div className="text-lg text-dark mt-2">At <span className="italic">NativCodes</span>, we are committed to staying on the forefront of emerging technologies and trends. We continuously research and experiment with new tools and techniques, allowing us to provide our apps with the most performant, scalable, and secure implementations.</div>

				<div className="flex flex-row items-center flex-wrap justify-center mt-2">
					<div className="relative w-[200px] h-[200px]">
						<div className="absolute css-tech-stack">
							<Image src="/assets/images/tech/css-logo.png" alt="css logo" width="200" height="200" />
						</div>
						<div className="absolute html-tech-stack">
							<Image src="/assets/images/tech/html-logo.png" alt="html logo" width="200" height="200" />
						</div>
					</div>

					<div className="relative w-[200px] h-[200px]">
						<div className="absolute react-tech-stack">
							<Image src="/assets/images/tech/react-logo.png" alt="react logo" width="200" height="200" />
						</div>
						<div className="absolute javascript-tech-stack">
							<Image src="/assets/images/tech/javascript-logo.png" alt="javascript logo" width="200" height="200" />
						</div>
					</div>

					<div className="relative w-[200px] h-[200px]">
						<div className="absolute php-tech-stack">
							<Image src="/assets/images/tech/php-logo.png" alt="php logo" width="200" height="200" />
						</div>
						<div className="absolute nodejs-tech-stack">
							<Image src="/assets/images/tech/nodejs-logo.png" alt="nodejs logo" width="200" height="200" />
						</div>
					</div>

					<div className="relative w-[200px] h-[200px]">
						<div className="absolute mysql-tech-stack">
							<Image src="/assets/images/tech/mysql-logo.png" alt="mysql logo" width="200" height="200" />
						</div>
						<div className="absolute mongodb-tech-stack">
							<Image src="/assets/images/tech/mongodb-logo.png" alt="mongodb logo" width="200" height="200" />
						</div>
					</div>

					<div className="relative w-[200px] h-[200px]">
						<div className="absolute docker-tech-stack">
							<Image src="/assets/images/tech/docker-logo.png" alt="docker logo" width="200" height="200" />
						</div>
						<div className="absolute git-tech-stack">
							<Image src="/assets/images/tech/git-logo.png" alt="git logo" width="200" height="200" />
						</div>
					</div>
				</div>
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