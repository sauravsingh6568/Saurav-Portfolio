import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    //Slide-in animation for the cards
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.inout",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        markers: false,
      },
    });
    //staggered text animation
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.inout",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        markers: false,
      },
    });
  });

  return (
    <section id="about" className="flex-center relative md:p-0 px-5 ">
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          text="I am a passionate Creator, Lifelong Lerner and Developer"
          number={"01"}
        />

        <div className=" md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Saurav Singh
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I’m a passionate Frontend Developer dedicated to creating
                    responsive, dynamic, and user-centric web experiences. I
                    specialize in React JS, JavaScript, HTML5, CSS3, and
                    Tailwind CSS, focusing on clean, scalable code and modern
                    UI/UX principles.
                  </p>
                </div>
              </div>
            </div>
            {/* 3d cute Alien */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* Web design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2 ">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Design &Dev
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2 ">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UI/UX Design
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>
            {/* Moti card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  {[
                    "|| कृष्णाय वासुदेवाय हरये परमात्मने ।प्रणतः क्लेशनाशाय गोविंदाय नमो नमः ।।",
                    '"You are never Wrong To do right things"',
                    '"If you can’t solve the problem, get a bigger problem"',
                  ].map((text, index) => (
                    <h1
                      className="md:text-2xl text-1.5xl font-animated-text"
                      key={index}
                    >
                      {text}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
            {/* bento social links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center md:gap-5 gap-2">
                        <img src={item.icon} alt={item.icon} />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {item.name}
                        </h1>
                      </div>
                      <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="lg:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
