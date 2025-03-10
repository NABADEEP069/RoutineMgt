"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 antialiased`}
      >
        {/* Show Navbar only if the current path is NOT '/signup' */}
        {pathname !== "/signup" && <Navbar />}
        
        <div className={`${pathname !== "/signup" ? "pt-16" : ""}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
