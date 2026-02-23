import React from "react";
import Button from "./utility/Button";
import imgBg from "../assets/starthere.svg";

export default function StartHere() {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8">

      {/* Main Content Box */}
      <div
        className="relative z-10 max-w-7xl w-full text-center backdrop-blur-md bg-black/40 p-6 sm:p-10 rounded-xl bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${imgBg})`,
          backgroundPosition: 'left 50px top -20px',
          backgroundSize: 'contain',
        }}
      >
        <h1 className="text-[28px] sm:text-[48px] md:text-[72px] lg:text-[88px] leading-snug sm:leading-tight md:leading-[88px] lg:leading-[96px] tracking-[1px] sm:tracking-[2px] font-light">
          The future of your industry{" "}
          <span className="bg-[linear-gradient(78.75deg,#714DFF_0%,#9C83FF_31.28%,#E151FF_77.97%,#FFF759_95.64%)] bg-clip-text text-transparent font-medium">
            starts here
          </span>
        </h1>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button text="BOOK A DEMO" variant="primary" showIcon />
          <Button text="BUILD AI" variant="outline" showIcon />
        </div>
      </div>

    </section>
  );
}