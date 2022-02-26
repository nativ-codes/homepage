import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from '../components/sections/header';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Footer from '../components/sections/footer';

gsap.registerPlugin(ScrollTrigger);

function Home() {
	return (
		<>
			<Header />
			<About />
			<Projects />
			<Footer />
		</>
	)
}

export default Home;