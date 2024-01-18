import type { Metadata } from "next";
import { Bebas_Neue, Raleway } from "next/font/google";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer";
import Aside from "./components/Layout/Aside/Aside";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Valorant Wiki",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--raleway-font",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${bebas.variable} antialiased`}
    >
      <body>
        <div className="grid md:grid-cols-[80px,1fr] w-full max-w-7xl mx-auto relative">
          <Aside />
          <div className="md:col-start-2 relative">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
