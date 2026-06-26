import Image from "next/image";

import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
	getWorkLargeScreenTimeline,
	getWorkLeftSmallScreenTimeline,
	getWorkRightSmallScreenTimeline,
} from "../../utils/timelines";

const googlePlayListra =
	"https://play.google.com/store/apps/details?id=com.listra";
const appStoreListra =
	"https://apps.apple.com/ro/app/listra-shopping-list-notes/id6445855837";

const googlePlayZaveIt =
	"https://play.google.com/store/apps/details?id=com.nativcodes.zaveit";
const appStoreZaveIt =
	"https://apps.apple.com/ro/app/zaveit-smart-bookmark-manager/id6747726703";

function Work({}) {
	useResponsiveTimeline({
		largeScreenTimelineFn: getWorkLargeScreenTimeline,
		smallScreenTimelineFn: [
			getWorkLeftSmallScreenTimeline,
			getWorkRightSmallScreenTimeline,
		],
	});

	return (
		<section
			className="work-section flex lg:h-screen flex-col lg:flex-row"
			id="work"
		>
			<div className="work-section-left bg-white relative flex justify-center items-center h-screen w-full lg:w-2/4">
				<div className="font-[LemonMilk] text-dark text-5xl tracking-wider">
					WORK
				</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="dark" />
				</div>
			</div>
			<div className="work-section-right relative bg-white p-[56px] lg:p-[96px] w-full h-screen lg:w-2/4">
				<div
					className="absolute inset-0 flex items-center justify-center"
					id="both-apps-initial"
				>
					<div className="flex flex-row gap-12">
						<div className="flex flex-col items-center">
							<Image
								width="180"
								height="180"
								alt="Listra logo"
								src="/assets/images/projects/listra/listra-logo.png"
							/>
							<h2 className="text-dark text-lg font-bold tracking-wider mt-4">
								Listra
							</h2>
						</div>
						<div className="flex flex-col items-center">
							<Image
								width="180"
								height="180"
								alt="ZaveIt logo"
								src="/assets/images/projects/zave-it/zave-it-logo.png"
							/>
							<h2 className="text-dark text-lg font-bold tracking-wider mt-4">
								ZaveIt
							</h2>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-0 opacity-0 items-center justify-center flex-col flex"
					id="logo-listra-1"
				>
					<Image
						width="180"
						height="180"
						alt="Listra logo"
						src="/assets/images/projects/listra/listra-logo.png"
					/>
					<h1 className="text-dark text-2xl font-bold tracking-wider mt-4">
						Listra: Shopping list & notes
					</h1>
				</div>

				<div
					className="absolute inset-0 flex items-center justify-center flex-col opacity-0"
					id="sprite-listra-1"
				>
					<h1 className="text-dark text-2xl font-bold tracking-wider mb-8">
						Listra: Shopping list & notes
					</h1>
					<div
						id="work-listra-1"
						style={{
							width: '316px',
							height: '700px',
							backgroundSize: 'auto 650px',
							backgroundImage: "url('/assets/images/projects/listra/listra-sprite.png')",
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
						}}
					/>
					<div className="flex flex-col md:hidden">
						<div className="flex justify-center">
							<Image
								width="158"
								height="325"
								alt="Listra flow"
								src="/assets/images/projects/listra/listra.gif"
							/>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-0 opacity-0 items-center justify-center flex-col flex"
					id="download-listra-1"
				>
					<Image
						width="180"
						height="180"
						alt="Listra logo"
						src="/assets/images/projects/listra/listra-logo.png"
					/>
					<div className="flex flex-row mt-10">
						<a
							rel="noreferrer"
							target="_blank"
							href={appStoreListra}
							className="cursor-pointer mr-4"
						>
							<Image
								width="150"
								height="44"
								alt="App store logo"
								src="/assets/images/projects/app-store.png"
							/>
						</a>
						<a
							rel="noreferrer"
							target="_blank"
							href={googlePlayListra}
							className="cursor-pointer"
						>
							<Image
								width="150"
								height="44"
								alt="Google play logo"
								src="/assets/images/projects/google-play.png"
							/>
						</a>
					</div>
				</div>

				<div
					className="absolute inset-0 opacity-0 items-center justify-center flex-col flex"
					id="logo-listra-2"
				>
					<Image
						width="180"
						height="180"
						alt="ZaveIt logo"
						src="/assets/images/projects/zave-it/zave-it-logo.png"
					/>
					<h1 className="text-dark text-2xl font-bold tracking-wider mt-4">
						ZaveIt: Smart Bookmark Manager
					</h1>
				</div>

				<div
					className="absolute inset-0 flex items-center justify-center flex-col opacity-0"
					id="sprite-listra-2"
				>
					<h1 className="text-dark text-2xl font-bold tracking-wider mb-8">
						ZaveIt: Smart Bookmark Manager
					</h1>
					<div 
						className="relative"
						style={{
							width: '316px',
							height: '700px',
							borderRadius: '40px',
							border: '8px solid #1e1a1a',
							boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
							overflow: 'hidden',
							backgroundColor: '#000',
							boxSizing: 'border-box'
						}}
					>
						<div
							id="work-listra-2"
							style={{
								width: '300px',
								height: '684px',
								backgroundSize: '2100px 4104px',
								backgroundImage: "url('/assets/images/projects/zave-it/zave-it-sprite.png')",
								backgroundRepeat: 'no-repeat',
								backgroundPosition: '0px 0px'
							}}
						/>
					</div>
					<div className="flex flex-col md:hidden">
						<div className="flex justify-center">
							<Image
								width="158"
								height="325"
								alt="ZaveIt flow"
								src="/assets/images/projects/zave-it/zave-it-sprite.png"
							/>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-0 opacity-0 items-center justify-center flex-col flex"
					id="download-listra-2"
				>
					<Image
						width="180"
						height="180"
						alt="ZaveIt logo"
						src="/assets/images/projects/zave-it/zave-it-logo.png"
					/>
					<div className="flex flex-row mt-10">
						<a
							rel="noreferrer"
							target="_blank"
							href={appStoreZaveIt}
							className="cursor-pointer mr-4"
						>
							<Image
								width="150"
								height="44"
								alt="App store logo"
								src="/assets/images/projects/app-store.png"
							/>
						</a>
						<a
							rel="noreferrer"
							target="_blank"
							href={googlePlayZaveIt}
							className="cursor-pointer"
						>
							<Image
								width="150"
								height="44"
								alt="Google play logo"
								src="/assets/images/projects/google-play.png"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Work;

// https://codeshack.io/images-sprite-sheet-generator/
