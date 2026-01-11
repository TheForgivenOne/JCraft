import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "JCraft - Premium Craftsmanship",
  description: "Showcasing exceptional craftsmanship and custom creations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body
        className={`${workSans.variable} font-display bg-background-light dark:bg-background-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
