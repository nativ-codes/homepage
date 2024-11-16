import { gsap } from "gsap/dist/gsap";

function getAboutLargeScreenTimeline() {
	//  return;
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".about-section",
				scrub: 0.5,
				start: ".about-section",
				pin: true,
				pinSpacing: true,
			},
		})
		.to(
			".hexagon-icon",
			{
				rotate: '180deg',
			},
		)
}

function getAboutLeftSmallScreenTimeline() {
	return;
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".about-section-left",
			scrub: 0.5,
			start: ".about-section-left",
			pin: true,
			pinSpacing: true,
		},
	});
}

function getAboutRightSmallScreenTimeline() {
	return;
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".about-section-right",
				scrub: 0.5,
				start: ".about-section-right",
				pin: true,
				pinSpacing: true,
			},
		})
		.to(
			".html-tech-stack",
			{
				opacity: 0,
			},
			">"
		)
		.to(
			".javascript-tech-stack",
			{
				opacity: 0,
			},
			">"
		)
		.to(
			".nodejs-tech-stack",
			{
				opacity: 0,
			},
			">"
		)
		.to(
			".mongodb-tech-stack",
			{
				opacity: 0,
			},
			">"
		);
}

function getWorkLargeScreenTimeline() {
	//  return;
	const listraFramesCount = 38;
	const listraFrameWidth = 316;

	return gsap
		.timeline({
			scrollTrigger: {
				// markers: true,
				trigger: ".work-section",
				start: ".work-section",
				end: "+=200%",
				pin: true,
				scrub: true,
			},
		})
		.to(
			"#work-listra",
			{
				backgroundPosition:
					-listraFrameWidth * listraFramesCount + "px 0px",
				ease: "steps(" + listraFramesCount + ")", // use a stepped ease for the sprite sheet
			},
			0
		)
		.to(
			"#download-listra",
			{
				opacity: 1,
			},
			">"
		)
		.to(
			"#sprite-listra",
			{
				opacity: 0,
			},
			"<"
		);
}

function getWorkLeftSmallScreenTimeline() {
	return;
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".work-section-left",
			scrub: 0.5,
			start: ".work-section-left",
			pin: true,
			pinSpacing: true,
		},
	});
}

function getWorkRightSmallScreenTimeline() {
	return;
	const listraFramesCount = 38;
	const listraFrameWidth = 158;

	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".work-section-right",
				start: ".work-section-right",
				end: "+=200%",
				pin: true,
				scrub: true,
				pinSpacing: true,
			},
		})
		.to(
			"#work-listra",
			{
				backgroundPosition:
					-listraFrameWidth * listraFramesCount + "px 0px",
				ease: "steps(" + listraFramesCount + ")", // use a stepped ease for the sprite sheet
			},
			0
		)
		.to(
			"#download-listra",
			{
				opacity: 1,
			},
			">"
		)
		.to(
			"#sprite-listra",
			{
				opacity: 0,
			},
			"<"
		);
}

function getContactLargeScreenTimeline() {
	//  return;
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-section",
			scrub: 1,
			start: ".contact-section",
			pin: true,
		},
	});
}

function getContactLeftSmallScreenTimeline() {
	return;
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-section-left",
			scrub: 0.5,
			start: ".contact-section-left",
			pin: true,
			pinSpacing: true,
		},
	});
}

function getContactRightSmallScreenTimeline() {
	return;
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-section-right",
			scrub: 0.5,
			start: ".contact-section-left",
			pin: true,
			pinSpacing: true,
		},
	});
}

function getFooterLargeScreenTimeline() {
	//  return;
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".footer-section",
				scrub: 0.5,
				start: ".footer-section",
				pin: true,
				pinSpacing: true,
			},
		})
		.to(
			".logo-expanded-text",
			{
				opacity: 0,
				duration: 0.2,
			},
			0
		)
		.to(
			".logo-expanded-left-arrow",
			{
				translateX: -280,
				translateY: -50,
			},
			0
		)
		.to(
			".logo-expanded-right-arrow",
			{
				translateX: 280,
				translateY: 90,
			},
			0
		)
		.to(
			".logo-expanded",
			{
				rotation: -90,
			},
			0
		);
}

function getFooterSmallScreenTimeline() {
	//  return;
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".footer-section",
				start: "-=20",
			},
		})
		.to(
			".logo-expanded-text",
			{
				opacity: 0,
				duration: 0.2,
			},
			0
		)
		.to(
			".logo-expanded-left-arrow",
			{
				translateX: -280,
				translateY: -50,
			},
			0
		)
		.to(
			".logo-expanded-right-arrow",
			{
				translateX: 280,
				translateY: 90,
			},
			0
		)
		.to(
			".logo-expanded",
			{
				rotation: -90,
			},
			0
		);
}

function getHeaderLargeScreenTimeline() {
	//  return;
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".header-section",
				start: ".header-section",
				pin: true,
				scrub: 0.5,
			},
		})
		.to(
			".logo-small-left-arrow",
			{
				translateX: 0,
				translateY: 0,
			},
			0
		)
		.to(
			".logo-small-right-arrow",
			{
				translateX: 0,
				translateY: 0,
			},
			0
		)
		.to(
			".logo-small-text",
			{
				opacity: 1,
			},
			">"
		)
		.to(
			".logo-small",
			{
				rotation: 0,
			},
			0
		);
}

function getHeaderSmallScreenTimeline() {
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: ".header-section",
				start: "+=1",
			},
		})
		.to(
			".logo-small-left-arrow",
			{
				translateX: 0,
				translateY: 0,
			},
			0
		)
		.to(
			".logo-small-right-arrow",
			{
				translateX: 0,
				translateY: 0,
			},
			0
		)
		.to(
			".logo-small-text",
			{
				opacity: 1,
			},
			">"
		)
		.to(
			".logo-small",
			{
				rotation: 0,
			},
			0
		);
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
	getFooterLargeScreenTimeline,
	getFooterSmallScreenTimeline,
	// Header
	getHeaderLargeScreenTimeline,
	getHeaderSmallScreenTimeline,
};
