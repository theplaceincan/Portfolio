import type { Metadata } from "next";
import "./css/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "Abraha Atsbeha | Portfolio",
  description: "Computer Science Student at UNLV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent/10 selection:text-accent">
        <div className="mx-auto max-w-[1000px] px-10 pt-20">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}