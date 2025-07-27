import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

function Hero() {
  return (
    <section
      id="home"
      className=" w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class={"gradient-sphere sphere-1"}
        sphere2Class={"gradient-sphere sphere-2"}
      />

      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full ">
          <div className="md:mt-40 mt-20">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I'm Here
            </p>
            <h1 className="text-5xl font-bold md:text-9xl">
              SAURAV KUMAR SINGH
            </h1>
            <h1 className="text-5xl font-bold md:text-9xl">CREATIVE</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img
                  className=" size-7 animate-bounce"
                  src="/images/arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col items-end">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="text-5xl font-bold md:text-9xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <HeroExperience />
      </div>
    </section>
  );
}

export default Hero;
