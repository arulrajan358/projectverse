import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjectVerse - Build Projects That Get You Hired",
  description: "India's largest AI-powered Student Innovation Ecosystem. Discover project ideas, buy complete project kits, get custom-built solutions, and find mentors.",
  keywords: "Final Year Projects, AI Projects, Data Science Projects, Engineering Projects, Student Projects, Machine Learning Projects, Academic Projects",
  openGraph: {
    title: "ProjectVerse - Student Innovation Ecosystem",
    description: "Discover project ideas, buy complete project kits, get custom-built solutions, and learn from industry experts.",
    url: "https://projectverse.in",
    siteName: "ProjectVerse",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectVerse - Student Innovation Ecosystem",
    description: "Discover project ideas, buy complete project kits, get custom-built solutions, and learn from industry experts.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-50`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
