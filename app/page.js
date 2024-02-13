"use client";

import { useLayoutEffect } from "react";
import Head from "next/head";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "../components/sections/header";
import About from "../components/sections/about";
import Work from "../components/sections/work";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";

function Home() {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	return (
		<>
			<Head>
				<title>NativCodes</title>
				<link rel="shortcut icon" href="/assets/images/favicon.ico" />

				<meta
					name="description"
					content="Web & Mobile App Development"
				/>

				<meta property="og:url" content="http://nativ.codes" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="NativCodes" />
				<meta
					property="og:description"
					content="Web & Mobile App Development"
				/>
				<meta
					property="og:image"
					content="https://nativ.codes/assets/images/nativ-codes.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="nativ.codes" />
				<meta property="twitter:url" content="http://nativ.codes" />
				<meta name="twitter:title" content="NativCodes" />
				<meta
					name="twitter:description"
					content="Web & Mobile App Development"
				/>
				<meta
					name="twitter:image"
					content="https://nativ.codes/assets/images/nativ-codes.png"
				/>
			</Head>
			<Header />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
