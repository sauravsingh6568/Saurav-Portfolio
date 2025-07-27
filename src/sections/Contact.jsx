import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import GradientSpheres from "../components/GradientSpheres";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="flex-center md:p-0 px-5 relative">
      <GradientSpheres
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title="Contact Me"
          number="04"
          text="Let's collaborate on tailored, sustainable solutions"
        />
        <div className="bg-sky-900/100 rounded-3xl ">
          <div className="mt-20">
            <div className="grid grid-cols-12 gap-10">
              <div className="md:col-span-5 col-span-12 md:order-none order-2 relative z-10">
                <ContactForm />
              </div>

              <div className="md:col-span-7 col-span-12 md:order-2 order-1 flex justify-center items-center">
                <div className="relative w-full max-w-[500px] md:max-w-[600px] mx-auto">
                  <img
                    ref={imageRef}
                    src="/images/contact.png"
                    alt="Contact Illustration"
                    className="w-full h-auto object-contain transform md:scale-125 scale-100 md:-skew-x-6 md:skew-y-1 md:rotate-3 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
