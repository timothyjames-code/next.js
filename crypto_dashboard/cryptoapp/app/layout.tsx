import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Crypto App",
  description: "Find the current best cryptocurrency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" min-h-screen flex flex-col relative">
        <Navbar />
        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
