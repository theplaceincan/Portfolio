import type { Metadata } from "next";
import "./css/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollComponents from "./components/ScrollComponents";

export const metadata: Metadata = {
  title: "Abraha Atsbeha | Software Engineer",
  description: "Computer Science Student & Software Engineer at UNLV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent/10 selection:text-accent">
        <ScrollComponents />
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}