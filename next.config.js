/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	// reactStrictMode: true,
	reactStrictMode: false,
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
