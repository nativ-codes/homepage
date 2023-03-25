import {useEffect} from 'react';
import Head from 'next/head'

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from '../components/sections/header';
import About from '../components/sections/about';
import Work from '../components/sections/work';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';

import {
	getAboutLargeScreenTimeline,
	getAboutSmallScreenTimeline,
	getWorkLargeScreenTimeline
} from '../utils/timelines';

gsap.registerPlugin(ScrollTrigger);

const aboutTimeline = () => {
	console.log("aboutTimeline");
	let aboutLargeScreenTimeline;
	let aboutSmallScreenTimeline;

	// getWorkLargeScreenTimeline();
	// getAboutLargeScreenTimeline();

	return ({matches}) => {
		// console.log("matches", matches);
		// if (matches) {
		// 	aboutSmallScreenTimeline?.scrollTrigger?.kill();
		// 	aboutLargeScreenTimeline = getAboutLargeScreenTimeline();
		// } else {
		// 	aboutLargeScreenTimeline?.scrollTrigger?.kill();
		// 	aboutSmallScreenTimeline = getAboutSmallScreenTimeline();
		// }
	}
}

function Home() {

	useEffect(() => {
		const aboutTimelineFn = aboutTimeline();

		// Initial run
		aboutTimelineFn({
			matches: window.innerWidth >= 937
		});

		const mql = window.matchMedia("(min-width: 937px)");
		mql.addEventListener("change", aboutTimelineFn);
	}, [])

	return (
		<>
			<Head>
				<title>NativCodes</title>
				<link rel="shortcut icon" href="/assets/images/favicon.ico" />

				<meta name="description" content="Web & Mobile App Development" />

				<meta property="og:url" content="http://nativ.codes" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="NativCodes" />
				<meta property="og:description" content="Web & Mobile App Development" />
				<meta property="og:image" content="https://nativ.codes/assets/images/nativ-codes.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="nativ.codes" />
				<meta property="twitter:url" content="http://nativ.codes" />
				<meta name="twitter:title" content="NativCodes" />
				<meta name="twitter:description" content="Web & Mobile App Development" />
				<meta name="twitter:image" content="https://nativ.codes/assets/images/nativ-codes.png" />
			</Head>
			<Header />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	)
}

export default Home;