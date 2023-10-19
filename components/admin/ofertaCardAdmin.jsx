const OfertaCardAdmin = ({ oferta }) => {
  return (
    <div className="h-96 w-full flex flex-col justify-center items-center bg-white ">
      <h2 className="text-black text-2xl">{oferta.data.categoria}</h2>
      <img
        src={
          "https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-promo-label-png-768x512.png"
        }
        alt="Oferta"
      />
      <h2 className="text-black text-4xl">{oferta.data.nombre}</h2>
    </div>
  );
};

export default OfertaCardAdmin;
