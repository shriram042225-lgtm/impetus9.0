import type { Metadata } from "next";
import { Orbitron, Montserrat,Inter, Bebas_Neue, Roboto, Rowdies, Nunito } from "next/font/google";
import "./globals.css";
import { EraProvider } from "../context/EraContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas", // We will use this variable in Tailwind
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Impetus 9.0 | {%$theme$%}",
  description: "IIEST Shibpur's Annual Tech Fest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${montserrat.variable} ${inter.className} ${bebas.variable} ${roboto.variable} ${rowdies.variable} ${nunito.variable} bg-black text-white antialiased`}>
        <SplashScreen />
       <EraProvider>
        <Navbar />
        {children}
        <Footer />
        </EraProvider>
      </body>
    </html>
  );
}