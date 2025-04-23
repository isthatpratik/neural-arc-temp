import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuralArc",
  description: "Where data meets neural intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased bg-[#F8F7F3]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
