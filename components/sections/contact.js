import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";

import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
	getContactLargeScreenTimeline,
	getContactLeftSmallScreenTimeline,
	getContactRightSmallScreenTimeline,
} from "../../utils/timelines";

function Contact({}) {
	const [isFormSent, setIsFormSent] = useState(false);

	useResponsiveTimeline({
		largeScreenTimelineFn: getContactLargeScreenTimeline,
		smallScreenTimelineFn: [
			getContactLeftSmallScreenTimeline,
			getContactRightSmallScreenTimeline,
		],
	});

	const handleOnSubmit = (event) => {
		event.preventDefault();
		setIsFormSent(true);
		const data = new FormData(event.target);
		const form = Object.fromEntries(data);

		fetch("https://nativ.codes/apps/api/contact.php", {
			method: "POST",
			body: JSON.stringify(form),
		});

		event.target.reset();
	};

	return (
		<section
			className="contact-section flex lg:h-screen flex-col lg:flex-row"
			id="contact"
		>
			<div className="contact-section-left bg-dark relative flex justify-center items-center h-screen w-full lg:w-2/4">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">
					CONTACT
				</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="contact-section-right bg-white p-[56px] lg:p-[96px] w-full h-screen lg:w-2/4">
				<div className="mb-10">
					<h1 className="text-3xl sm:text-4xl font-bold text-dark">
						Let&apos;s get in touch
					</h1>
					<div className="text-base sm:text-lg mt-5 text-dark">
						Or you can reach us anytime via{" "}
						<span className="italic">hello [at] nativ.codes</span>
					</div>
				</div>
				<form
					className="flex flex-col flex-1 justify-center contact-article"
					onSubmit={handleOnSubmit}
				>
					<input
						required
						name="name"
						className="outline-none border-0 border-b-[1px] border-[#ccc] focus:border-primary py-2 px-1 text-lg"
						placeholder="Name"
					/>
					<input
						required
						name="email"
						className="outline-none border-0 border-b-[1px] border-[#ccc] focus:border-primary py-2 px-1 text-lg mt-8"
						placeholder="Email"
					/>
					<textarea
						required
						name="message"
						className="outline-none border-0 border-b-[1px] border-[#ccc] mt-8 focus:border-primary py-2 px-1 text-lg"
						placeholder="Enter your message"
					/>
					<div className="relative flex grow-1 mt-8">
						<input
							type="submit"
							value="SUBMIT"
							className="flex-1 outline-none border-0 bg-primary text-white font-bold py-4 cursor-pointer"
							placeholder="Enter your message"
						/>
						<div
							className={`transition-[width] duration-1000 z-1 absolute bg-dark h-full flex items-center justify-center cursor-pointer ${
								isFormSent ? "w-full" : "w-0"
							}`}
						>
							<span
								className={`transition-[opacity] delay-1000 duration-500 text-white font-bold ${
									isFormSent ? "opacity-1" : "opacity-0"
								}`}
							>
								SENT
							</span>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact;
