import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono, Josefin_Sans } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin"
});

export const metadata: Metadata = {
  title: "Abhi Kansara | Photography",
  description: "Visual Storyteller & Photographer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} ${josefin.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}