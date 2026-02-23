import { LuArrowUpRight } from "react-icons/lu";

export default function WhyUzoFin() {
  const rows = [
    [
      {
        title: "Multiple Pay Options",
        desc: "Give your customers the flexibility to pay with various payment options",
      },
      {
        title: "Unified Dashboard",
        desc: "Manage banking, payments, and merchants in one place.",
      },
      {
        title: "AI Payment Gateway",
        desc: "Make your customer checkout smooth and secure.",
      },
    ],
    [
      {
        title: "Automation At Its Finest",
        desc: "Automate your entire payment process effortlessly.",
      },
      {
        title: "Developer-Friendly API",
        desc: "Build, integrate, and launch faster.",
      },
      {
        title: "Secure Infrastructure",
        desc: "Enterprise-grade security you can trust.",
      },
    ],
    [
      {
        title: "Smart Insights",
        desc: "Real-time financial insights and analytics.",
      },
      {
        title: "Instant Onboarding",
        desc: "Fast and seamless customer verification.",
      },
      {
        title: "Global Payments",
        desc: "Accept payments from anywhere in the world.",
      },
    ],
  ];

  return (
    <section className="bg-black py-28 overflow-hidden">
      {/* Heading Section */}
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-poppins text-white">
          Why{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            UzoFin?
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Discover powerful automation, seamless payments, and intelligent APIs —
          all within a sleek, futuristic design.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="mt-20 space-y-14">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden whitespace-nowrap">
            <div
              className={`flex gap-20 w-max ${rowIndex % 2 === 0
                  ? "animate-marqueeLeft"
                  : "animate-marqueeRight"
                }`}
            >
              {[...row, ...row].map((item, index) => (
                <div key={index} className="flex items-start gap-4 min-w-[350px]" >

                  <div>
                    <h4 className=" font-normal text-[18px] leading-[22px] tracking-[0] text-white " > {item.title} </h4>
                    <span className=" font-normal text-[16px] tracking-[0] text-blue-400 " > {item.desc} </span>
                  </div>
                  <LuArrowUpRight size={20} className="text-gray-400 mt-1" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}