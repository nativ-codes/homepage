import { gsap } from 'gsap/dist/gsap';

function getAboutLargeScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
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

function getAboutLeftSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.about-section-left',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: true,
			pinSpacing: true
		}
	});
}

function getAboutRightSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.about-section-right',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: true,
			pinSpacing: true
		}
	});
}

function getWorkLargeScreenTimeline() {
	const listraFramesCount = 38;
	const listraFrameWidth = 316;

	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: ".work-section",
			start: "top top",
			end: "+=" + (listraFramesCount * listraFrameWidth),
			pin: true,
			scrub: true
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

function getWorkLeftSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.work-section-left',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: true,
			pinSpacing: true
		}
	});
}

function getWorkRightSmallScreenTimeline() {
	const listraFramesCount = 38;
	const listraFrameWidth = 316;

	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: ".work-section-right",
			start: "top top",
			end: "+=" + (listraFramesCount * listraFrameWidth),
			pin: true,
			scrub: true,
			pinSpacing: true
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

function getContactLargeScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: '.contact-section',
			scrub: 1,
			start: 'top top',
			pin: '.contact-section',
			end: '+=200%',
		}
	});
}

function getContactLeftSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.contact-section-left',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: true,
			pinSpacing: true
		}
	});
}

function getContactRightSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.contact-section-right',
			scrub: 0.5,
			start: 'top top',
			end: '+=200%',
			pin: true,
			pinSpacing: true
		}
	});
}

function getFooterTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: '.footer-section',
			scrub: 0.5,
			end: '+=400%',
			pin: true,
			pinSpacing: true
		}
	}).to('.logo-expanded-text', {
		opacity: 0,
		duration: 0.2
	}, 0).to('.logo-expanded-left-arrow', {
		translateX: -280,
		translateY: -50,
	}, 0).to('.logo-expanded-right-arrow', {
		translateX: 280,
		translateY: 90,
	}, 0).to('.logo-expanded', {
		rotation: -90
	}, 0);
}

function getHeaderTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: '.header-section',
			end: '+=200%',
			pin: true,
			scrub: 0.5,
			// pinSpacing: false
		}
	}).to('.logo-small-left-arrow', {
		translateX: 0,
		translateY: 0,
	}, 0).to('.logo-small-right-arrow', {
		translateX: 0,
		translateY: 0,
	}, 0).to('.logo-small-text', {
		opacity: 1
	}, '>').to('.logo-small', {
		rotation: 0
	}, 0);
}

export {
	// About
	getAboutLargeScreenTimeline,
	getAboutLeftSmallScreenTimeline,
	getAboutRightSmallScreenTimeline,
	// Work
	getWorkLargeScreenTimeline,
	getWorkLeftSmallScreenTimeline,
	getWorkRightSmallScreenTimeline,
	// Contact
	getContactLargeScreenTimeline,
	getContactLeftSmallScreenTimeline,
	getContactRightSmallScreenTimeline,
	// Footer
	getFooterTimeline,
	// Header
	getHeaderTimeline
};
