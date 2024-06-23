import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai buddy for your entertainment and design needs",
  description: "A user friendly ai app for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <Toaster position="bottom-center" />
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
