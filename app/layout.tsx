// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Aditya Shinde – Web Developer Portfolio",
  description: "Creative Direction for Bold Brands and Experiences.",
   icons: {
    icon: '/portfolio.png', // 👈 Favicon path relative to /public
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.png" />
      </head>
      <body className={`${poppins.className}`}>
        
        <main>{children}</main>
        
      </body>
    </html>
  );
}
