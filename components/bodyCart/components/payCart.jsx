"use client";

import { CartContext } from "@/context/cartContext";
import { redirect } from "next/navigation";
import logoWsp from "../../../public/wspLogo.png";
import React, { useContext } from "react";
import Image from "next/image";

const PayCart = () => {
  const { cart, promo, enRegla } = useContext(CartContext);

  if (cart.length === 0 || enRegla === false) {
    redirect("/store");
  }

  const counts = cart.reduce((acc, curr) => {
    acc[curr.data.nombre] = (acc[curr.data.nombre] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="h-full w-full max-h-full flex flex-col">
      <h3 className="text-xl underline">Tu pedido:</h3>
      <div className="h-full max-h-full overflow-scroll">
        <ul>
          {Object.entries(counts).map(([nombre, count], index) => (
            <li key={index}>
              {nombre} x {count}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <select className="w-40 bg-[#181818] border-[#f7ba2b] rounded-xl focus:outline-none">
            <option>4 cm</option>
            <option>8 cm</option>
            <option>12 cm</option>
          </select>
          {promo ? (
            <span>Tienes la promo de {promo != 99 ? promo : "mas de 10"}</span>
          ) : null}
        </div>
        <div className="wsp-card shadow flex items-center justify-center gap-1 cursor-pointer">
          <Image src={logoWsp} width={50} height={50} alt="logo wsp" objectFit="contain"/>
          <h4 className="text-black text-xl font-semibold">Enviar pedido!</h4>
        </div>
      </div>
    </div>
  );
};

export default PayCart;
