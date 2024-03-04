"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className=" flex-1  padding-x">
        <h1 className="hero__title">Find Top 100+ Cryptocurrencies!</h1>

        <p className="hero__subtitle">
          Find out what the current best cryptocurrencies are.
        </p>

        <CustomButton
          title="Explore Cryptocurrencies"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/pngwing.com.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
