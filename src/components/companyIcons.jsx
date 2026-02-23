import React from "react";
import brave from "../assets/logos/brave.svg";
import circle from "../assets/logos/circle.svg";
import discord from "../assets/logos/discord.svg";
import google from "../assets/logos/google.svg";
import jump from "../assets/logos/jump.svg";
import lollapalooza from "../assets/logos/lollapalooza.svg";
import magiceden from "../assets/logos/magiceden.svg";

const companies = [
    { name: "Brave", logo: brave },
    { name: "Circle", logo: circle },
    { name: "Discord", logo: discord },
    { name: "Google", logo: google },
    { name: "Jump", logo: jump },
    { name: "Lollapalooza", logo: lollapalooza },
    { name: "Magic Eden", logo: magiceden },
];

export default function TrustedCompanies() {
    return (
        <section className="bg-black py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] tracking-wide uppercase text-[#37CCF7] mb-10"> Powering tools and integration for companies around the world </p>

                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
                    {companies.map((company, index) => (
                        <img key={index} src={company.logo} alt={company.name} className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 object-contain opacity-80 transition-transform duration-300 hover:scale-105"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}