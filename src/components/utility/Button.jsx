import { FiArrowRight } from "react-icons/fi";

export default function Button({
  text = "START BUILDING",
  className = "",
  onClick,
  variant = "primary",
  showIcon = true,
}) {
  const variants = {
    primary: `relative bg-[linear-gradient(98.88deg,#8C01FA_-2.99%,#000000_102.28%)] text-white overflow-hidden rounded-full hover:bg-[linear-gradient(92.18deg,#8C01FA_-0.81%,#000000_187.84%)]`,
    
    outline: `bg-transparent border border border-[#8C01FA] text-[#ffffff] rounded-full hover:bg-[#000000]/0`,
  };

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 font-medium tracking-wide transition-all duration-500 ease-out active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Rounded Gradient Border */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            padding: "1.4px",
            background: "conic-gradient(from 0deg, #ffffff, #4B0082, #ffffff)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            maskOrigin: "border-box",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        ></span>
      )}

      {/* Text */}
      <span className="relative z-10 font-poppins font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] leading-[20px] uppercase">
        {text}
      </span>

      {/* Icon */}
      {showIcon && (
        <span className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center overflow-hidden">
          <FiArrowRight className="absolute text-[14px] sm:text-[14px] md:text-[14px] transition-transform duration-300 ease-out group-hover:translate-x-6" />
          <FiArrowRight className="absolute text-[14px] sm:text-[14px] md:text-[14px] -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
        </span>
      )}
    </button>
  );
}