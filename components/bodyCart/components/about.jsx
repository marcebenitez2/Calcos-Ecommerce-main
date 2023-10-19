import React from "react";

const About = () => {
  return (
    <div className="w-full h-full smn:hidden">
      <div className="w-full h-full pl-20 py-16 flex flex-col gap-8 lgn:pl-10 mdn:py-0 mdn:pl-0 mdn:gap-2">
        <div>
          <h1 className="text-3xl font-semibold">Desde ya...</h1>
          <p className="mdn:hidden">
            Nos alegra que nos hayas elegido a nosotros. A la brevedad nos
            estaremos contactando. Cualquier consulta no dudes en comentarnos
            via Whatsapp
          </p>
          <p className="mdn:hidden">Recorda tambien que podes solicitar calcomanias personalizadas</p>
          <p>Muchas gracias ❤️</p>
        </div>
        <p className="text-[#f7ba2b] font-semibold">VespStick</p>
      </div>
    </div>
  );
};

export default About;
