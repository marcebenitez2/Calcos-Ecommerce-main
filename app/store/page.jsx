import React from "react";
import { BsFillPersonFill } from "../../node_modules/react-icons/bs";
import Link from "next/link";
import { fetchCalcos } from "@/firebase/firebase";
import BodyStore from "@/components/bodyStore/bodyStore";
import TitleAndHero from "@/components/bodyStore/components/titleAndHero";

async function getCalcos() {
  const calcos = await fetchCalcos();
  return calcos;
}

const Page = async () => {
  const calcos = await getCalcos();

  return (
    <div>
      <Link href={"/login"}>
        <BsFillPersonFill
          className="fixed left-10 bottom-10 text-6xl smn:left-0 z-50 mdn:text-5xl"
          fill="#ffde59"
        />
      </Link>
      <BodyStore calcos={calcos} />
    </div>
  );
};

export default Page;
