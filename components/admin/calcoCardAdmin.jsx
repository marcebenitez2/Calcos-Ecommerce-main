"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { categories } from "@/exports/categories";
import { actualizarCalco, eliminarCalco } from "@/firebase/firebase";
import LoadingSpinner from "../loadingSpinner";

const CalcoCardAdmin = ({ calco, id }) => {
  const [edit, setEdit] = useState(false);
  const [updateImage, setupdateImage] = useState(calco.imagen);
  const [updateName, setupdateName] = useState(calco.nombre);
  const [updateCategory, setupdateCategory] = useState(calco.categoria);
  const [isloading, setisloading] = useState(false);

  const startEdit = () => {
    setEdit(!edit);
  };

  const changeImage = (file) => {
    setupdateImage(file);
  };

  const guardarCambios = (id, updateImage, updateName, updateCategory) => {
    setisloading(true);
    actualizarCalco(id, updateImage, updateName, updateCategory)
      .then(() => {
        setTimeout(() => {
          setisloading(false);
        }, 3000);
        setEdit(false)
      })
      .catch((error) => {
        console.error("Error al guardar los cambios:", error);
        setisloading(false);
      });
  };

  return (
    <div className="h-96 mdn:h-64 text-xs">
      {edit ? (
        isloading ? (
          <div className="h-full w-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between px-2 bg-zinc-600 gap-5 py-6">
            <div className="flex flex-col">
              <input
                type="file"
                onChange={(e) => {
                  changeImage(e.target.files[0]);
                }}
              />
              <div className="flex flex-col ">
                <label>Nombre</label>
                <input
                  value={updateName}
                  type="text"
                  className="w-full text-black h-7"
                  onChange={(e) => setupdateName(e.target.value)}
                />
              </div>
              <div>
                <label>Categorias</label>
                <select
                  className="text-black h-7 py-0 w-full"
                  value={updateCategory}
                  onChange={(e) => setupdateCategory(e.target.value)}
                >
                  {categories.map((x) => (
                    <option key={x.id}>{x.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <button onClick={() => eliminarCalco(id)}>Eliminar</button>
              <button
                className="bg-[#ffde59] text-black h-8"
                onClick={() =>
                  guardarCambios(id, updateImage, updateName, updateCategory)
                }
              >
                Guardar Cambios
              </button>
              <button onClick={startEdit}>Cancelar</button>
            </div>
          </div>
        )
      ) : (
        <div className="w-full h-full flex flex-col bg-white ">
          <img src={updateImage} className="h-4/5" />
          <div className="w-full h-1/5 pb-2 px-2 justify-between items-end bg-gradient-to-b from-white via-black to-black flex">
            <h3>{calco.nombre}</h3>
            <FiEdit2
              size={"25px"}
              onClick={startEdit}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalcoCardAdmin;
