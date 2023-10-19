import LogoAndCart from "@/app/store/logoAndCart";
import React from "react";
import { CartProvider } from "@/context/cartContext";

const Layout = ({ children }) => {
  return (
    <div>
      <LogoAndCart />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
