import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

// Configure the Work Sans font
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

// Define metadata for the application
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
      <head>
        {/* Load Material Symbols font - required for MaterialIcon component */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..0&display=swap"
        />
      </head>
      <body
        className={`font-display bg-background-light dark:bg-background-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
