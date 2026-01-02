import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    title: "Luxury Estates | Premium Properties with 3D Tours",
    description:
        "Explore luxury real estate properties with immersive 3D virtual tours. Discover your dream home in Beverly Hills, Manhattan, Malibu and more.",
    keywords:
        "luxury real estate, 3D property tours, premium homes, virtual tours",
    openGraph: {
        title: "Luxury Estates | Premium Properties with 3D Tours",
        description:
            "Explore luxury real estate properties with immersive 3D virtual tours.",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
