import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import img5 from "../assets/5.svg";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  {
    title: "Scalability & Integration",
    desc: (<> Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.{" "} <a href="#" className="underline"> Know more </a>{" "}</>
    ),
  },
  {
    title: "Step-by-step guide",
    desc: (<> Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.{" "} <a href="#" className="underline"> Know more </a>{" "}</>
    ),
  },
  {
    title: "Modern & clean design",
    desc: (<> Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.{" "} <a href="#" className="underline"> Know more </a>{" "}</>
    ),
  },
];

export default function IndustryCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const scrollAnim = useRef(null);
  const cardAnims = useRef([]);

  useEffect(() => {
    const totalWidth = sliderRef.current.scrollWidth / 2;

    scrollAnim.current = gsap.to(sliderRef.current, {
      x: -totalWidth,
      duration: 18,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    const cards = gsap.utils.toArray(".card-wrapper");
    cards.forEach((card, i) => {
      const direction = i % 2 === 0 ? -60 : 60;

      const anim = gsap.fromTo(
        card,
        { y: direction },
        {
          y: -direction,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      cardAnims.current.push(anim);
    });
  }, []);

  const handleMouseEnter = () => {
    scrollAnim.current.pause();
    cardAnims.current.forEach((anim) => anim.pause());
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    scrollAnim.current.play();
    cardAnims.current.forEach((anim) => anim.play());
    setIsPaused(true);
  };

  return (
    <>
      <div
        className=" w-full h-[5rem] absolute"
        style={{
          zIndex: 9,
          background:
            "linear-gradient(rgb(0 0 0) 0%, rgb(255 255 255 / 0%) 100%)",
        }}
      />
      <section className="relative overflow-hidden pt-24 pb-24 bg-black">
        <div className="inset-0 -z-10 overflow-hidden">
          <img src={img1} className="bg-slide bg1" />
          <img src={img2} className="bg-slide bg2" />
          <img src={img3} className="bg-slide bg3" />
          <img src={img4} className="bg-slide bg4" />
          <img src={img5} className="bg-slide bg5" />
        </div>

        {/* HEADING */}
        <div className="relative z-10 text-center mb-16 px-4">
          <p className="text-2xl sm:text-3xl text-cyan-400">24/7 support</p>

          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-8xl text-white font-light">Industry{" "}
            <span className="bg-[linear-gradient(78.75deg,#714DFF_0%,#9C83FF_59.62%,#E151FF_77.97%)] bg-clip-text text-transparent">Standard</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          className="overflow-hidden relative h-[70vh]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={sliderRef} className="flex gap-6 sm:gap-10 w-max mt-16">
            {[...features, ...features].map((item, index) => (
              <div
                key={index}
                className="card-wrapper"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-[430px] h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 text-center">
                  <h3 className="font-normal text-[28px] text-center text-purple-300 mb-3">{item.title}</h3>
                  <p className="text-[20px] font-normal text-center text-gray-300">{item.desc}
                    <span className={hoveredIndex === index ? "inline-block scale-100 transition-all duration-500" : "opacity-0 scale-0 inline-block transition-all duration-500"}>
                      <FiCheckCircle className="ml-2 inline text-purple-500 transition-opacity duration-300" />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className=" w-full h-[5rem] absolute"
        style={{
          zIndex: 9,
          marginTop: "-79px",
          background: "linear-gradient(rgb(255 255 255 / 0%) 0%, rgb(0 0 0) 100%)",
        }}
      />
    </>
  );
}