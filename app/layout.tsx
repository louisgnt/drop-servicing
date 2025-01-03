import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/components/ui/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Nom de l'agences
  title: "",
  // Definir a la fin
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
