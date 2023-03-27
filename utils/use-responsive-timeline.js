import {useEffect} from 'react';

const killScrollTrigger = timelineScrollTrigger => {
	if(Array.isArray(timelineScrollTrigger)) {
		timelineScrollTrigger.forEach(currentTimelineScrollTrigger => currentTimelineScrollTrigger?.scrollTrigger?.kill())
	} else {
		timelineScrollTrigger?.scrollTrigger?.kill()
	}
}

const activateScrollTrigger = timelineFn => {
	if(Array.isArray(timelineFn)) {
		return timelineFn.map(currentTimelineFn => currentTimelineFn?.())
	} else {
		return timelineFn?.();
	}
}

const timeline = ({largeScreenTimelineFn, smallScreenTimelineFn, screenTimelineFn}) => {
	let largeScreenTimeline;
	let smallScreenTimeline;
	screenTimelineFn?.();

	return ({matches}) => {
		if(matches) {
			killScrollTrigger(smallScreenTimeline);
			largeScreenTimeline = activateScrollTrigger(largeScreenTimelineFn);
		} else {
			killScrollTrigger(largeScreenTimeline);
			smallScreenTimeline = activateScrollTrigger(smallScreenTimelineFn);
		}
	}
}

const useResponsiveTimeline = props => {
	useEffect(() => {
		const timelineFn = timeline(props);

		// Initial run
		timelineFn({
			matches: window.innerWidth >= 937
		});

		const mql = window.matchMedia("(min-width: 937px)");
		mql.addEventListener("change", timelineFn);		
	}, [])
}

export default useResponsiveTimeline;