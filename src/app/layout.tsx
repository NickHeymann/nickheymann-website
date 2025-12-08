import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nick Heymann | Videographie & Marketing",
  description: "Professionelle Videoproduktion und Marketing für Unternehmen. Imagefilme, Eventvideos, Social Media Content und mehr.",
  keywords: ["Videographie", "Marketing", "Hamburg", "Videoproduktion", "Imagefilm", "Social Media"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
