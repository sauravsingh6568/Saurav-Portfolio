import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { ContactBoy } from "./Boy";
import React from "react";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.5, 0]}>
        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
