import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const CalcosSelected = ({ cart, setCart, promo, enRegla, miniCart }) => {
  const counts = cart.reduce((acc, curr) => {
    acc[curr.data.nombre] = (acc[curr.data.nombre] || 0) + 1;
    return acc;
  }, {});

  const addOne = (nombre) => {
    if (cart.length < promo) {
      const itemToAdd = cart.find((item) => item.data.nombre === nombre);
      setCart([...cart, itemToAdd]);
    } else toast.error("Ya haz alcanzado el maximo de la oferta");
  };

  const removeOne = (nombre) => {
    const indexToRemove = cart.findIndex((item) => item.data.nombre === nombre);
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };

  return (
    <AnimatePresence>
      {miniCart ? (
        <motion.div
          className={`h-fit w-96 fixed flex flex-col top-6 right-5 border-4 rounded px-2 smn:w-80 ${
            enRegla ? "bg-slate-100" : "bg-red-600"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 50 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2 items-center">
            <h1 className={`text-lg  ${enRegla ? "text-black" : "text-white"}`}>
              Seleccionadas:
            </h1>
            <p className="text-orange-500">
              {promo != 99 ? `promo de ${promo}` : ""}
            </p>
          </div>
          <ul>
            {Object.entries(counts).map(([nombre, count], index) => (
              <li
                className="w-full flex justify-between items-center text-black "
                key={index}
              >
                {nombre} x {count}
                <div className="flex gap-3 text-4xl">
                  {count > 1 ? (
                    <button
                      className="cursor-pointer"
                      onClick={() => removeOne(nombre)}
                    >
                      -
                    </button>
                  ) : (
                    <TiDelete
                      className={`cursor-pointer ${
                        enRegla ? "text-red-600" : "text-black"
                      }`}
                      onClick={() => removeOne(nombre)}
                    />
                  )}
                  {enRegla ? (
                    <button
                      className={`cursor-pointer`}
                      onClick={() => addOne(nombre)}
                    >
                      +
                    </button>
                  ) : (
                    <button className={`cursor-pointer pointer-events-none`}>
                      +
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {enRegla && cart.length != 0 ? (
            <Link href={"/cart"}>
              <div className="text-orange-500 flex items-center gap-4 font-semibold animate-bounce animate-infinite animate-duration-500 animate-normal animate-fill-forwards">
                <span>Finalizar pedido</span>
                <BsArrowRight size={"30px"} />
              </div>
            </Link>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CalcosSelected;
