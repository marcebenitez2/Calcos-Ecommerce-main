"use client";

import React, { useContext } from "react";
import logo from "../../public/logoStore.png";
import Image from "next/image";
import Link from "next/link";
import { BsCartFill } from "react-icons/bs";
import { CartContext } from "@/context/cartContext";

const LogoAndCart = () => {
  const { cart, setCart, promo, setPromo, enRegla, setEnRegla,miniCart,setMiniCart} = useContext(CartContext);

  return (
    <div className="w-screen fixed flex justify-between py-7 px-10 mdn:px-1 z-50 smn:py-3">
      <Link href={"/store"}>
        <Image src={logo} width={75} alt="Logo" />
      </Link>
      <BsCartFill
        fill={enRegla ? "#ffde59" : "red"}
        className={`text-5xl mdn:text-4xl cursor-pointer`}
        onClick={() => setMiniCart(!miniCart)}
      />
      <div className="absolute right-8 top-5 w-2 h-2 p-3 bg-white border rounded-full flex justify-center items-center smn:top-1">
        <span className="text-black">{cart.length}</span>
      </div>
    </div>
  );
};

export default LogoAndCart;
