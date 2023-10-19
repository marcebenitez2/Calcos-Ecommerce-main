"use client";

import { cargarCalco, cargarOFerta } from "@/firebase/firebase";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "./../../../node_modules/react-icons/ai";
import Link from "next/link";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("calcomania");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("Otros");
  const [imagen, setImagen] = useState(null);
  const [nombreOferta, setnombreOferta] = useState("");
  const [categoriaOferta, setcategoriaOferta] = useState("Todos");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  function cargar(nombre, categoria, imagen) {
    cargarCalco(nombre, categoria, imagen);
    setNombre("");
    setCategoria("Otros");
    setImagen(null);
  }

  function cargarOferta(nombreOferta, categoriaOferta) {
    cargarOFerta(nombreOferta, categoriaOferta);
    setnombreOferta("");
    setcategoriaOferta("Todos");
  }

  const renderForm = () => {
    if (selectedOption === "calcomania") {
      return (
        <div className="h-full w-full flex flex-col items-center justify-evenly pt-6 gap-4">
          <div className="w-full flex justify-center gap-4">
            <input
              className="w-1/3 h-8 px-4 text-black"
              placeholder="Nombre de la calco"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <select
              className="text-black"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>Anime</option>
              <option>Amor</option>
              <option>Videojuegos</option>
              <option>Futbol</option>
              <option>Basquet</option>
              <option>Otros</option>
            </select>
          </div>
          <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
          <button
            className="w-1/4 h-12 bg-[#1f1f1f]"
            onClick={() => cargar(nombre, categoria, imagen)}
          >
            Cargar
          </button>
        </div>
      );
    } else if (selectedOption === "oferta") {
      return (
        <div className="h-full w-full flex flex-col items-center pt-6 gap-8">
          <input
            className="w-1/2 h-8 px-4 text-black"
            placeholder="Nombre de la oferta"
            value={nombreOferta}
            onChange={(e) => setnombreOferta(e.target.value)}
          />
          <select
            className="text-black"
            value={categoriaOferta}
            onChange={(e) => setcategoriaOferta(e.target.value)}
          >
            <option>Anime</option>
            <option>Amor</option>
            <option>Videojuegos</option>
            <option>Futbol</option>
            <option>Basquet</option>
            <option>Otros</option>
          </select>
          <button
            className="w-1/4 h-12 bg-[#1f1f1f]"
            onClick={() => cargarOferta(nombreOferta, categoriaOferta)}
          >
            Cargar
          </button>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/5 h-2/5 bg-[#ffde59] flex flex-col items-center p-6 rounded-xl">
        <div className="flex justify-between w-full">
          <Link href={"/admin"}>
            <AiOutlineArrowLeft size={"40px"} fill="black" />
          </Link>
          <h1 className="text-black text-4xl font-semibold">
            Añadir {selectedOption}
          </h1>
          <span></span>
        </div>
        {renderForm()}
        <div className="flex justify-center w-full gap-8 items-center">
          <div
            className={`${
              selectedOption === "calcomania"
                ? "bg-[#1f1f1f]"
                : "bg-white text-black"
            }  w-1/4 h-12 flex items-center justify-center text-2xl cursor-pointer `}
            onClick={() => handleOptionClick("calcomania")}
          >
            CALCOMANIA
          </div>
          <div
            className={`${
              selectedOption === "oferta"
                ? "bg-[#1f1f1f]"
                : "bg-white text-black"
            }  w-1/4 h-12 flex items-center justify-center text-2xl cursor-pointer `}
            onClick={() => handleOptionClick("oferta")}
          >
            OFERTA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
