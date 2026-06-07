import type { Metadata } from "next";
import { Inria_Serif, Hind_Vadodara } from "next/font/google";
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
  title: "hellovalerio — Valerio Italiano",
  description: "Senior UX designer with 20+ years of experience, most recently at Google.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inriaSerif.variable} ${hindVadodara.variable}`}>
      <body><div style={{ overflowX: "hidden" }}>{children}</div></body>
    </html>
  );
}
