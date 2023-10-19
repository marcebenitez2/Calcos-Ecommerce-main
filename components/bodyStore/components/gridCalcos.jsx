"use client";

import { categories } from "@/exports/categories";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const GridCalcos = ({ calcos, promoSelected, cart, setCart }) => {
  const [originalCalcos, setOriginalCalcos] = useState(calcos);
  const [calcosCopy, setCalcosCopy] = useState(calcos);
  const [inputSearch, setinputSearch] = useState("");
  const [clickedId, setClickedId] = useState(null);

  const handleSearch = (e) => {
    setinputSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filteredCalcos = originalCalcos.filter((x) =>
      x.data.nombre.toLowerCase().includes(searchTerm)
    );
    setCalcosCopy(filteredCalcos);
  };

  const categoryFilter = (e) => {
    if (e.target.value === "Todos") {
      setCalcosCopy(originalCalcos);
    } else {
      const categoryCalcos = originalCalcos.filter(
        (x) => x.data.categoria === e.target.value
      );
      setCalcosCopy(categoryCalcos);
    }
  };

  const addCart = (x) => {
    setClickedId(x.id);
    setTimeout(() => setClickedId(null), 300);
    if (promoSelected != null) {
      if (cart.length < promoSelected) {
        setCart([...cart, x]);
      } else {
        toast.error("No puedes agregar mas");
      }
    } else {
      setCart([...cart, x]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex flex-col gap-3 justify-between mdn:gap-4">
        <h1 className="text-4xl mdn:hidden">Catálogo:</h1>
        <div className="w-full flex gap-2 mdn:flex-col">
          <input
            className="w-full px-4 bg-transparent border border-[#ffde59] rounded mdn:w-full mdn:h-8"
            placeholder="Buscar..."
            onChange={handleSearch}
            value={inputSearch}
          />
          <select
            className="w-1/6 px-4 bg-transparent border border-[#ffde59] mdn:w-full rounded"
            onChange={categoryFilter}
          >
            {categories.map((x) => (
              <option key={x.id} className="text-black">
                {x.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-y-4 gap-x-4 place-items-center 2xln:grid-cols-5 xln:grid-cols-4 lgn:grid-cols-3 mdn:grid-cols-2 mdn:px-0 ">
        {calcosCopy.map((x) => (
          <div
            key={x.id}
            className={`card cursor-pointer mdn:w-full mdn:h-52 ${
              clickedId === x.id
                ? "animate-jump animate-once animate-duration-300"
                : ""
            }`}
            onClick={() => addCart(x)}
          >
            <div className="card-details">
              <img
                src={x.data.imagen}
                className="h-60 w-96 mdn:h-52 "
                alt={x.data.descripcion}
              />
            </div>
            <button className="card-button">Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCalcos;
