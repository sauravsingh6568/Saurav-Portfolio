// src/components/Loader.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const sRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onComplete,
        });
      },
    });

    tl.fromTo(
      sRef.current,
      { scale: 0, opacity: 0, rotate: 0 },
      {
        scale: 5,
        opacity: 1,
        rotate: 360,
        duration: 1,
        ease: "power3.inOut",
      }
    ).to(sRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"
    >
      <h1
        ref={sRef}
        className="text-[10rem] font-extrabold tracking-widest bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-xl"
      >
        S
      </h1>
    </div>
  );
};

export default Loader;
