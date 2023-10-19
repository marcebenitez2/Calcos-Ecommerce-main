import { CartProvider } from "@/context/cartContext";
import "./globals.css";
import { Lexend } from "next/font/google";

const inter = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "VespSticks",
  description: "Tienda oficial de Stickes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
