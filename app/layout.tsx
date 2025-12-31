import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD


const orbitron = Orbitron({ 
  subsets: ["latin"], 
=======
import Footer from "@/components/Footer";
const orbitron = Orbitron({
  subsets: ["latin"],
>>>>>>> upstream/master
  variable: "--font-orbitron",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Impetus 9.0 | Chronicles of Innovation",
  description: "IIEST Shibpur's Annual Tech Fest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD

      <body className={`${orbitron.variable} ${montserrat.variable} bg-black text-white antialiased`}>
=======
      <body
        className={`${orbitron.variable} ${montserrat.variable} bg-black text-white antialiased`}
      >
>>>>>>> upstream/master
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
