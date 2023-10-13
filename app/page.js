import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomePageImage from "../public/HomePageImage.png";
import SearchProperty from "@/components/SearchProperty";

export default function Home() {
  return (
    <div className="text-white font-fontstyle p-5 md:mx-10 md:mt-3">
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[210px] h-[217px] bg-[#AC6FFA] rounded-full blur-[125px]"
      ></div>
      <div
        aria-hidden="true"
        className="absolute top-[150px] -left-[100px] w-[269px] h-[277px] bg-[#AC6FFA] rounded-full blur-[125px]"
      ></div>
      <Navbar />

      {/* Home Page */}
      <div className="relative mt-10 flex flex-col space-y-10 md:flex-row md:space-x-10 justify-center items-center">
        <div className=" flex flex-col space-y-5  items-start max-w-xl self-start">
          <div className="text-5xl md:text-7xl font-bold leading-tight">
            Exploring<br></br>
            <span className="text-[#AC6FFA]">Accommodation</span> <br></br>Made
            Easy
          </div>
          <div className="text-xl mt-2">
            Effortlessly find your perfect hostel/PG: Discover, Compare, and
            Save with Ease
          </div>
          <div className="absolute z-1 bottom-5">
            <SearchProperty />
          </div>
        </div>
        <Image
          className="w-[350px] h-[450px]"
          src={HomePageImage}
          width={"300px"}
          height={"400px"}
          objectFit="fit"
        />
      </div>
    </div>
  );
}
