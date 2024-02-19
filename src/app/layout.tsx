import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/Components/Footer";


export const metadata: Metadata = {
  title: "Gyani Baba",
  description: "This is website like google for asking anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
      <Footer />
      </body>
    </html>
  );
}
