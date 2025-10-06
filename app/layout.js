import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Francisco J. Perez | Full Stack Engineer",
  description:
    "Portfolio website of Francisco J. Perez, a Full Stack Engineer specializing in building exceptional digital experiences using React, Next.js, Express, Node.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
