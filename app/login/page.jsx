"use client";
import app from "@/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {

  const router = useRouter()

 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      
      router.push("/admin")
    } catch (error) {
      setErrorMessage("Credenciales incorrectas"); 
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-[#ffde59]  h-80 rounded-xl flex flex-col py-5 gap-8 w-2/5 mdn:w-4/5">
        <h1 className="text-center text-3xl font-semibold text-[#1f1f1f]">
          LOGIN
        </h1>
        <form className="flex flex-col w-full items-center gap-4">
          <input
            className="bg-[#1f1f1f] w-3/5 h-8 px-3 rounded-md mdn:w-4/5"
            placeholder="Nombre de usuario"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="bg-[#1f1f1f] w-3/5 mdn:w-4/5 h-8 px-3 rounded-md"
            type="password"
            placeholder="Contraseña"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-1/3 bg-[#1f1f1f] h-16 rounded-md mdn:w-1/2"
            onClick={(e) => handleSubmit(e)}
          >
            Iniciar sesión
          </button>
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
