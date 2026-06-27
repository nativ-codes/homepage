import { useEffect } from "react";
import Image from "next/image";

import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
	getAboutLargeScreenTimeline,
	getAboutLeftSmallScreenTimeline,
	getAboutRightSmallScreenTimeline,
} from "../../utils/timelines";

function About() {
	useResponsiveTimeline({
		largeScreenTimelineFn: getAboutLargeScreenTimeline,
		smallScreenTimelineFn: [
			getAboutLeftSmallScreenTimeline,
			getAboutRightSmallScreenTimeline,
		],
	});

	return (
		<section className="about-section flex lg:h-screen flex-col lg:flex-row">
			<div className="about-section-left bg-primary relative flex justify-center items-center h-screen w-full lg:w-2/4">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">
					ABOUT
				</div>
				<div className="hexagon-icon hidden z-10 lg:block absolute right-[-65px] top-[96px]">
					<svg
						viewBox="0 0 512 512"
						width="130"
						height="130"
					>
						<clipPath id="hexagon">
							<path
								id="heart"
								d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
							c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
							c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"
							/>
						</clipPath>

						<image
							href="/assets/images/logo.png"
							width="100%"
							height="100%"
							clipPath="url(#hexagon)"
						/>
					</svg>
				</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="about-section-right relative bg-white p-[56px] lg:p-[96px] w-full h-screen lg:w-2/4">
				<h1 className="text-3xl sm:text-4xl font-bold text-dark mb-5">
					Hello world!
				</h1>

				<div className="text-base sm:text-lg text-dark mt-2">
					At <span className="italic">NativCodes</span>, it&apos;s just me - a tech enthusiast with a love for building creative and useful solutions. I develop apps, games, and websites, tackling everything from front-end design to back-end code and deployment.
				</div>
				<div className="text-base sm:text-lg text-dark mt-2">
					My projects, inspired by my own needs, range from travel blogs to stock market tools and casual games.
				</div>				
				<div className="text-base sm:text-lg text-dark mt-2">
					The best part? They&apos;re all free for you to enjoy and make life a little more fun!
				</div>
			</div>
		</section>
	);
}

export default About;
