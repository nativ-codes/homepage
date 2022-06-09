import {useEffect} from 'react';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from '../components/sections/header';
import About from '../components/sections/about';
import Work from '../components/sections/work';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';

gsap.registerPlugin(ScrollTrigger);

function Home() {
	return (
		<>
			<Header />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	)
}

export default Home;