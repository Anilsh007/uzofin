import { useEffect, useRef } from "react";
import heroL from "../assets/hero-L.svg";
import heroR from "../assets/hero-R.svg";
import Button from "./utility/Button";
import gsap from "gsap";

export default function HeroBanner() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      leftRef.current,
      { scale: 0.8, opacity: 0, transformOrigin: "left center" },
      { scale: 1, opacity: 1 }
    );

    tl.fromTo(
      rightRef.current,
      { scale: 0.8, opacity: 0, transformOrigin: "right center" },
      { scale: 1, opacity: 1 },
      "<"
    );

    tl.from(titleRef.current, { y: 50, opacity: 0 }, "-=0.3");
    tl.from(descRef.current, { y: 50, opacity: 0 }, "-=0.3");

    tl.from(buttonsRef.current, { y: 50, opacity: 0 }, "-=0.3");
  }, []);

  return (
    <section className="hero">
      <img ref={leftRef} src={heroL} alt="left shape" className="hero-shape hero-shape--left" />

      <img ref={rightRef} src={heroR} alt="right shape" className="hero-shape hero-shape--right" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>AI-powered <span className="hero-highlight"> Banking & Payment Solutions</span>
          <br />
          built for Modern Businesses
        </h1>

        <p className="hero-desc" ref={descRef}>UzOfin brings intelligent automation, real-time payments, and seamless financial operations together so you can scale without friction.</p>

        <div className="hero_buttons" ref={buttonsRef}>
          <Button text="START BUILDING" variant="primary" showIcon={true} />
          <Button text="READ DOCS" variant="outline" showIcon={true} />
        </div>
      </div>
    </section>
  );
}