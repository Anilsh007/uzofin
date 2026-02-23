import React, { useEffect, useRef } from "react";
import spiral from "../assets/spiral.svg";
import curve from "../assets/curveBg.svg";
import gsap from "gsap";

const features = [
  {
    title: "AI Banking",
    desc: "Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.",
    value: "3,969",
    showBadge: true,
    label: "TRANSACTIONS PER SECOND",
    barColor: "bg-[#1FCFF1]",
    mt: "lg:mt-0"
  },
  {
    title: "Payments",
    desc: "Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.",
    value: "1,675",
    showBadge: true,
    label: "VALIDATOR NODES",
    barColor: "bg-[#FFD512]",
    mt: "lg:mt-[-6rem]"
  },
  {
    title: "Payouts",
    desc: "Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.",
    value: "163,077,581,394",
    showBadge: true,
    label: "TOTAL TRANSACTIONS",
    barColor: "bg-[#9945FF]",
    mt: "lg:mt-0"
  },
  {
    title: "Merchant Onboarding",
    desc: "Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments — done in minutes.",
    value: "100%",
    showBadge: false,
    label: (<> ON-TIME MERCHANT <br /> ONBOARD </>),
    barColor: "bg-[#19FB9B]",
    mt: "lg:mt-[-6rem]"
  },
];

export default function FinancialSuiteSection() {

  const spiralRef = useRef(null);

  useEffect(() => {
    if (!spiralRef.current) return;

    let currentRotation = 0;
    let rotationCount = 0; // odd/even rotations

    const rotateLoop = () => {
      // Toggle scale rotation count
      const scaleValue = rotationCount % 2 === 0 ? 0.8 : 1;

      // Forward rotation (clockwise)
      gsap.to(spiralRef.current, {
        rotation: currentRotation + 180,
        scale: scaleValue,
        duration: 7,
        ease: "power1.inOut",
        onComplete: () => {
          currentRotation += 180;
          rotationCount += 1;

          // reverse
          gsap.to(spiralRef.current, {
            rotation: currentRotation - 5,
            duration: 5,
            ease: "power1.inOut",
            onComplete: () => {
              currentRotation -= 5;
              rotateLoop();
            },
          });
        },
      });
    };

    rotateLoop();
  }, []);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden pt-24 lg:pt-36">

      <img src={curve} alt="curve" className="absolute w-full object-contain opacity-100 -top-48 sm:-top-32" />

      <div className="relative z-10 max-w-[90vw] mx-auto lg:max-w-[1200px]">

        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">

          <div className="lg:pl-40 text-center lg:text-left">
            <h1 className="main-heading text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-tight lg:leading-tight">
              Your Business Pays Are Now <br /> Faster and Secure
            </h1>

            <img src={spiral} alt="spiral" ref={spiralRef} className="mt-12 w-64 sm:w-80 lg:w-96 mx-auto lg:mx-0" />
          </div>

          <div className="mt-12 lg:mt-0 flex flex-col space-y-8 text-center lg:text-left">
            <div>
              <h3 className="stat-number-primary">11.5M+</h3>
              <p className="stat-label">TRANSACTIONS PROCESSED MONTHLY</p>
            </div>
            <div>
              <h3 className="stat-number-secondary">99.9%</h3>
              <p className="stat-label">PLATFORM UPTIME AND RELIABILITY</p>
            </div>
            <div>
              <h3 className="stat-wrapper">
                <span className="stat-number-large">70%</span>{" "}
                <span className="stat-number-small">Faster</span>
              </h3>
              <p className="stat-label">MERCHANT ONBOARDING WITH AI AUTOMATION</p>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-36 flex flex-col lg:flex-row lg:justify-between items-center">

          <div className="w-full lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 px-4 lg:px-0">
            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">Our Intelligent <br /> Financial Suite </h2>
            <p className="section-desc mt-4 text-base sm:text-lg">Tools that accelerate every step of your financial workflow.</p>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 w-full lg:w-2/3 px-4 lg:px-0">
            {features.map((item, index) => (
              <div key={index} className={`feature-card ${item.mt} w-full sm:w-full lg:w-[320px] mx-auto`}>

                <h4 className="feature-title flex items-center">
                  <span className={`${item.barColor} w-1 h-5 inline-block mr-3`}></span>
                  {item.title}
                </h4>

                <p className="feature-desc mt-4">{item.desc}</p>

                <div className="mt-6">
                  <p className="feature-value">
                    {item.showBadge && (
                      <span className="w-2 h-2 bg-[#1FCFF1] rounded-full inline-block mr-1"></span>
                    )}
                    {item.value}
                  </p>
                  <span className="feature-label">{item.label}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}