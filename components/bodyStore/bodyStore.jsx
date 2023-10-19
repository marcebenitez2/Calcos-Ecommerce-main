"use client";
import React, { useContext, useEffect, useState } from "react";
import Offer from "./components/offer";
import GridCalcos from "./components/gridCalcos";
import CalcosSelected from "./components/calcosSelected";
import { CartContext } from "@/context/cartContext";
import TitleAndHero from "./components/titleAndHero";

const BodyStore = ({ calcos }) => {
  const {
    cart,
    setCart,
    promo,
    setPromo,
    enRegla,
    setEnRegla,
    miniCart,
    setMiniCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === promo) setEnRegla(true);
    if (cart.length > promo) setEnRegla(false);
  }, [cart]);

  function changeBlur() {
    if (miniCart) {
      setMiniCart(false);
    }
  }

  return (
    <div>
      <div
        className={`w-full px-80 m-auto h-full py-7 2xln:px-40 lgn:px-24 mdn:px-16 mdn:py-16 smn:px-6 ${
          miniCart ? "blur" : ""
        }`}
        onClick={changeBlur}
      >
        <div
          className={`w-full flex flex-col gap-10 ${
            miniCart ? "pointer-events-none" : ""
          }`}
        >
          <TitleAndHero />
          <Offer cart={cart} changePromo={setPromo} setEnRegla={setEnRegla} />
          <GridCalcos
            calcos={calcos}
            promoSelected={promo}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
      <CalcosSelected
        cart={cart}
        setCart={setCart}
        promo={promo}
        enRegla={enRegla}
        miniCart={miniCart}
      />
    </div>
  );
};

export default BodyStore;
