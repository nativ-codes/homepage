import "./globals.css";

export const metadata = {
	title: "NativCodes",
	description: "Web & Mobile App Development",
	icons: {
		icon: "/assets/images/favicon.ico",
	},
	openGraph: {
		url: "http://nativ.codes",
		type: "website",
		title: "NativCodes",
		description: "Web & Mobile App Development",
		images: [
			{
				url: "https://nativ.codes/assets/images/nativ-codes.png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		domain: "nativ.codes",
		url: "http://nativ.codes",
		title: "NativCodes",
		description: "Web & Mobile App Development",
		images: ["https://nativ.codes/assets/images/nativ-codes.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
