import CalcoCard from "./calcoCardAdmin";
import CalcoCardEmpty from "./calcoCardEmpty";
import OfertaCardAdmin from "./ofertaCardAdmin";
import { fetchCalcos, fetchOfertas } from "../../firebase/firebase";

export async function fetchdatabase() {
  const ofertas = await fetchOfertas();
  const calcos = await fetchCalcos();
  return [ofertas, calcos];
}

async function StickerGridAdmin() {
  const [ofertas, calcos] = await fetchdatabase();

  return (
    <div className="flex flex-col gap-12 animate-fade-up animate-once animate-duration-[250ms] animate-ease-linear">
      <div className="w-full px-40 xln:px-9 mdn:px-5 flex flex-col gap-7">
        <h1 className="text-4xl">CALCOS:</h1>
        <div className="w-full grid grid-cols-7 gap-y-4 gap-x-4 smn:grid-cols-2 mdn:grid-cols-4 lgn:grid-cols-5 xln:grid-cols-6 2xln:grid-cols-7 ">
          <CalcoCardEmpty />
          {calcos.map((calco) => (
            <CalcoCard calco={calco.data} id={calco.id} key={calco.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StickerGridAdmin;
