import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Explore Your Mood, Create Your Style: AiBud - Where Entertainment Meets Fashion!",
  description:
    "Select your mood for curated movie, TV, novel, and song recommendations. Design your dream dress with AI-generated images based on your style and color choices. Explore, create, and enjoy—it's all just a click away! ",
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
