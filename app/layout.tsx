// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Lexend } from "next/font/google";
import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

const siteUrl = "https://eccyber-systems-web.vercel.app";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  title: "ECCyber Systems | Cybersecurity & Digital Innovation",
  description:
    "ECCyber Systems - Empowering businesses with cybersecurity awareness, books, digital solutions, and software engineering.",
  metadataBase: new URL("https://eccyber-systems-web.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ECCyber Systems | Cybersecurity & Digital Innovation",
    description:
      "ECCyber Systems - Empowering businesses with cybersecurity awareness, books, digital solutions, and software engineering.",
    url: "https://eccyber-systems-web.vercel.app",
    siteName: "ECCyber Systems",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ECCyber Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECCyber Systems | Cybersecurity & Digital Innovation",
    description:
      "ECCyber Systems - Empowering businesses with cybersecurity awareness, books, digital solutions, and software engineering.",
    images: ["/opengraph-image.png"],
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${lexend.className}`}>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style>
            {`
              * {
                opacity: 1 !important;
                transform: none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          {/* <Navbar /> */}
          <ClientLayout>{children}</ClientLayout>
          {/* <Footer /> */}
        </RootLayoutComponent>
      </body>
    </html>
  );
}
