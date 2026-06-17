import type { Metadata } from "next";
import { Inria_Serif, Hind_Vadodara } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const hindVadodara = Hind_Vadodara({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valerio Italiano — UX Designer",
  description: "Staff UX designer with 20+ years of experience designing complex product experiences. Most recently at Google, working on advertising products.",
  openGraph: {
    title: "Valerio Italiano — UX Designer",
    description: "Staff UX designer with 20+ years of experience designing complex product experiences. Most recently at Google, working on advertising products.",
    url: "https://hellovaler.io",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inriaSerif.variable} ${hindVadodara.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-MNGEE06DVE" />
      </body>
    </html>
  );
}
