import bgImage from "../assets/StartBuilding.svg";
import Button from "./utility/Button";

export default function FasterApi() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-black w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8 py-12" style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="w-full text-center mt-[-6.6rem]">

        <h1 className="font-normal text-[32px] sm:text-[40px] md:text-[70px] lg:text-[70px] text-white "
        > Build Faster with Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Powerful API’s</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mx-auto leading-relaxed"> Plug into secure, developer-friendly financial API’s and launch in days, not months </p>

        <div className="mt-7 flex justify-center">
          <Button text="START BUILDING" variant="primary" showIcon={true} />
        </div>

      </div>
    </section>
  );
}