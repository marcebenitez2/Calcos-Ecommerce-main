import StickerGrid from "@/components/admin/GridAdmin";
import Navbar from "./welcome";

export const metadata = {
  title: "Admin",
};

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="w-full pt-10">
        <StickerGrid />
      </div>
    </div>
  );
};

export default Page;
