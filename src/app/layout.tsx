import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import CartProvider from "@/components/ui/Provider";
import ShoppingCartModel from "@/components/ui/ShoppingCartModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: {
  template:"abz_commerce" ,
  default: "ABZ Commerce"
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider >
      <ShoppingCartModel />
        <Navbar />
        {children}
       </CartProvider>
        </body>
    </html>
  );
}
