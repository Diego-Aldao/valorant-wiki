import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer";
import Aside from "./components/Layout/Aside";

export const metadata: Metadata = {
  title: "Valorant Wiki",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--raleway-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${raleway.variable} antialiased`}>
      <body>
        <div className="grid md:grid-cols-[80px,1fr] w-full max-w-7xl relative mx-auto">
          <Aside />
          <div className="md:col-start-2">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
