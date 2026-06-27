import "./globals.css";

export const metadata = {
  title: "Blog | NativCodes",
  description: "Thoughts on software development, web technologies, and building things.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
