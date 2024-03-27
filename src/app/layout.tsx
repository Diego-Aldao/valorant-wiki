import type { Metadata } from "next";
import { Raleway, Unbounded } from "next/font/google";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer";
import Aside from "../components/Layout/Aside/Aside";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Valorant Wiki",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--raleway-font",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--unbounded-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${unbounded.variable} antialiased scroll-smooth`}
    >
      <body>
        <SpeedInsights />
        <Header />
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
}
