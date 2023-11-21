import type { Metadata } from "next";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Luca Squad",
  description:
    "A state-of-the-art construction company with an established reputation for excellence and integrity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}