"use client";

import { useLayoutEffect } from "react";

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

		// Cleanup all ScrollTrigger instances when unmounting
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<>
			<Header />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
