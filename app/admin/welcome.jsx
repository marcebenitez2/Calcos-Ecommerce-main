import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full bg-[#ffde59]">
      <Link href={"/store"}>
        <AiOutlineArrowLeft
          fill="black"
          size={"40px"}
          className="absolute top-6 left-6"
        />
      </Link>
      <h1 className="text-5xl pt-3 text-center text-black font-semibold mdn:text-xl">
        Bienvenido Martin!
      </h1>
      <p className="text-center text-black">Gestionar catalogo</p>
    </div>
  );
};

export default Navbar;
