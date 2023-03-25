import { gsap } from 'gsap/dist/gsap';

function getAboutLargeScreenTimeline() {
	console.log("getAboutLargeScreenTimeline");
	return gsap.timeline({
		scrollTrigger: {
			trigger: '.about-section',
			scrub: 0.5,
			start: 'top top',
			end: '+=500%',
			pin: true
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
}

function getAboutSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: '.about-section-right',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: '.about-section-right',
		}
	});
}

function getWorkLargeScreenTimeline() {
	const listraFramesCount = 38;
	const listraFrameWidth = 316;

	return gsap.timeline({
		scrollTrigger: {
			trigger: ".work-section",
			start: "top top",
			end: "+=" + (listraFramesCount * listraFrameWidth),
			pin: true,
			scrub: true,
			markers: true,
		}
	}).to("#work-listra", {
	  backgroundPosition: (-listraFrameWidth * listraFramesCount) + "px 0px",
	  ease: "steps(" + listraFramesCount + ")", // use a stepped ease for the sprite sheet
	}, 0).to("#download-listra", {
	  opacity: 1
	}, ">").to("#sprite-listra", {
	  opacity: 0
	}, "<");
}

export {
	getAboutLargeScreenTimeline,
	getAboutSmallScreenTimeline,
	getWorkLargeScreenTimeline
};
