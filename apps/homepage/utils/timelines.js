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
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".about-section-left",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
		},
	});
}

function getAboutRightSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".about-section-right",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
		},
	});
}

function getWorkLargeScreenTimeline() {
	//  return;
	const listraFramesCount = 38;
	const listraFrameWidth = 316;
	
	// Zave-it sprite: 2688x5088, 7 columns x 6 rows, 41 frames
	// Display size: 300 x 684 (accounting for 8px border on all sides)
	const zaveItFrameDisplayWidth = 300;
	const zaveItFrameDisplayHeight = 684;
	const zaveItCols = 7;
	const zaveItFramesCount = 41;

	const timeline = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: ".work-section",
			start: ".work-section",
			end: "+=500%",
			pin: true,
			scrub: true,
		},
	});
	
	// Step 1->2: Fade out both apps, fade in first app logo
	timeline
		.to("#both-apps-initial", { opacity: 0 }, 0)
		.to("#logo-listra-1", { opacity: 1 }, "<")
		// Step 2->3: Fade out logo, fade in sprite and play animation
		.to("#logo-listra-1", { opacity: 0 }, ">")
		.to("#sprite-listra-1", { opacity: 1 }, "<")
		.to(
			"#work-listra-1",
			{
				backgroundPosition: -listraFrameWidth * listraFramesCount + "px 0px",
				ease: "steps(" + listraFramesCount + ")",
			},
			">"
		)
		// Step 3->4: Fade out sprite, fade in logo with download buttons
		.to("#sprite-listra-1", { opacity: 0 }, ">")
		.to("#download-listra-1", { opacity: 1 }, "<")
		// Step 4->5: Fade out first app download, fade in second app logo
		.to("#download-listra-1", { opacity: 0 }, ">")
		.to("#logo-listra-2", { opacity: 1 }, "<")
		// Step 5->6: Fade out logo, fade in sprite
		.to("#logo-listra-2", { opacity: 0 }, ">")
		.to("#sprite-listra-2", { opacity: 1 }, "<");
	
	// Animate through zave-it sprite using a frame counter
	timeline.to(
		{},
		{
			duration: 1,
			onUpdate: function() {
				const progress = this.progress();
				const frame = Math.floor(progress * (zaveItFramesCount - 1));
				const col = frame % zaveItCols;
				const row = Math.floor(frame / zaveItCols);
				const x = -col * zaveItFrameDisplayWidth;
				const y = -row * zaveItFrameDisplayHeight;
				
				const element = document.getElementById("work-listra-2");
				if (element) {
					element.style.backgroundPosition = `${x}px ${y}px`;
				}
			}
		},
		">"
	);
	
	// Step 6->7: Fade out sprite, fade in logo with download buttons
	timeline
		.to("#sprite-listra-2", { opacity: 0 }, ">")
		.to("#download-listra-2", { opacity: 1 }, "<");
	
	return timeline;
}

function getWorkLeftSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".work-section-left",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
		},
	});
}

function getWorkRightSmallScreenTimeline() {
	const listraFramesCount = 38;
	const listraFrameWidth = 316;

	// Zave-it sprite: 2688x5088, 7 columns x 6 rows, 41 frames
	// Display size: 300 x 684 (accounting for 8px border on all sides)
	const zaveItFrameDisplayWidth = 300;
	const zaveItFrameDisplayHeight = 684;
	const zaveItCols = 7;
	const zaveItFramesCount = 41;

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: ".work-section-right",
			start: "top top",
			end: "+=500%",
			pin: true,
			scrub: true,
			pinSpacing: true,
		},
	});

	// Step 1->2: Fade out both apps, fade in first app logo
	timeline
		.to("#both-apps-initial", { opacity: 0 }, 0)
		.to("#logo-listra-1", { opacity: 1 }, "<")
		// Step 2->3: Fade out logo, fade in sprite and play animation
		.to("#logo-listra-1", { opacity: 0 }, ">")
		.to("#sprite-listra-1", { opacity: 1 }, "<")
		.to(
			"#work-listra-1",
			{
				backgroundPosition: -listraFrameWidth * listraFramesCount + "px 0px",
				ease: "steps(" + listraFramesCount + ")",
			},
			">"
		)
		// Step 3->4: Fade out sprite, fade in logo with download buttons
		.to("#sprite-listra-1", { opacity: 0 }, ">")
		.to("#download-listra-1", { opacity: 1 }, "<")
		// Step 4->5: Fade out first app download, fade in second app logo
		.to("#download-listra-1", { opacity: 0 }, ">")
		.to("#logo-listra-2", { opacity: 1 }, "<")
		// Step 5->6: Fade out logo, fade in sprite
		.to("#logo-listra-2", { opacity: 0 }, ">")
		.to("#sprite-listra-2", { opacity: 1 }, "<");

	// Animate through zave-it sprite using a frame counter
	timeline.to(
		{},
		{
			duration: 1,
			onUpdate: function() {
				const progress = this.progress();
				const frame = Math.floor(progress * (zaveItFramesCount - 1));
				const col = frame % zaveItCols;
				const row = Math.floor(frame / zaveItCols);
				const x = -col * zaveItFrameDisplayWidth;
				const y = -row * zaveItFrameDisplayHeight;

				const element = document.getElementById("work-listra-2");
				if (element) {
					element.style.backgroundPosition = `${x}px ${y}px`;
				}
			}
		},
		">"
	);

	// Step 6->7: Fade out sprite, fade in logo with download buttons
	timeline
		.to("#sprite-listra-2", { opacity: 0 }, ">")
		.to("#download-listra-2", { opacity: 1 }, "<");

	return timeline;
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
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-section-left",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
		},
	});
}

function getContactRightSmallScreenTimeline() {
	return gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-section-right",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
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
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top top",
			end: "+=100%",
			pin: true,
			pinSpacing: true,
			scrub: 0.5,
		},
	});

	// Animate from closed state (start) to open state (end)
	// This way when you scroll down, it opens; scroll up, it closes
	timeline
		.from(
			".logo-expanded-text",
			{
				opacity: 0,
			},
			0
		)
		.from(
			".logo-expanded-left-arrow",
			{
				x: -280,
				y: -50,
			},
			0
		)
		.from(
			".logo-expanded-right-arrow",
			{
				x: 280,
				y: 90,
			},
			0
		)
		.from(
			".logo-expanded",
			{
				rotation: -90,
			},
			0
		);

	return timeline;
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
				start: "top top",
				end: "+=100%",
				pin: true,
				pinSpacing: true,
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
