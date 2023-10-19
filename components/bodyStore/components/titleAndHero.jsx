import React from "react";
import hero from './../../../public/hero2.jpeg'
import Image from "next/image";

const TitleAndHero = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-5">
      <h1 className="text-5xl font-semibold text-[#ffde59] mdn:text-3xl">Bienvenido</h1>
      <Image src={hero} className="rounded-xl" alt="img-heros"/>
    </div>
  );
};

export default TitleAndHero;
