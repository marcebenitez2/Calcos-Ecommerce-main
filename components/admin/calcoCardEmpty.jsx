import Link from "next/link";
import { AiOutlineFileAdd } from "react-icons/ai";

const CalcoCardEmpty = () => {
  return (
    <div className="h-96 flex flex-col bg-white items-center justify-center mdn:h-64">
      <Link href={"/admin/add"} className="w-full h-full flex justify-center items-center">
        <AiOutlineFileAdd fill="black" size={"100px"} />
      </Link>
    </div>
  );
};

export default CalcoCardEmpty;
