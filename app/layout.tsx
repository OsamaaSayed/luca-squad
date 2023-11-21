import type { Metadata } from "next";



import "../styles/globals.css";
import Footer from "@/components/shared/Footer";

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

        {children}
        <Footer/>
      </body>
    </html>
  );
}