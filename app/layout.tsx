import type { Metadata } from "next";
import { Changa, Readex_Pro } from "next/font/google";
import "./globals.css";

const changa = Changa({
  variable: "--font-changa",
  subsets: ["latin", "arabic"],
});

const readexPro = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Mustafa Hamad ElAmin | Front-End Developer",
  description:
    "Front-end developer building fast, responsive web interfaces in English and Arabic with React, Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${changa.variable} ${readexPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
