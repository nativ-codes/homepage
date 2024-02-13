import Image from "next/image";
import Link from "next/link";

function NotFound() {
	return (
		<section className="bg-dark h-screen w-screen flex justify-center">
			<div className="not-found flex flex-col items-center justify-center">
				<Image
					src="/assets/images/page-not-found.png"
					alt="Page not found"
					width={378}
					height={126}
				/>
				<Link
					className="text-white mt-10 font-bold text-sm cursor-pointer"
					href="/"
				>
					GO BACK
				</Link>
			</div>
		</section>
	);
}

export default NotFound;
