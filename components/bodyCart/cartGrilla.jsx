import Image from "next/image";
import React from "react";
import logo from "../../public/logoStore.png";
import PayCart from "./components/payCart";
import About from "./components/about";

const CartGrilla = () => {

  return (
    <div className="pay-card animate-fade animate-duration-1000 overflow-x-hidden overflow-y-hidden">
      <div className="pay-card-info flex flex-col px-20 py-8 h-full xln:px-10 smn:py-2 smn:px-2">
        <div className="flex w-full justify-between">
          <h1 className="text-5xl tracking-tighter text-[#f7ba2b] lgn:text-4xl smn:text-2xl">
            Finalizando compra...
          </h1>
          <Image
            src={logo}
            width={80}
            height={150}
            className="absolute right-8 top-3 smn:right-0"
            alt="Logo oficial"
            sizes="(max-width: 768px) 50vw"
          />
        </div>
        <div className="w-full h-full flex py-10 mdn:flex-col mdn:gap-10 smn:py-0">
            <PayCart/>
            <About/>
        </div>
      </div>
    </div>
  );
};

export default CartGrilla;
