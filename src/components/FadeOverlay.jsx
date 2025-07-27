// components/FadeOverlay.jsx
import React from "react";
import { useTexture } from "@react-three/drei";

const FadeOverlay = () => {
  const texture = useTexture("/images/fade-gradient.png");

  return (
    <mesh position={[0, -1.2, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[4, 2]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={1}
        depthWrite={false}
      />
    </mesh>
  );
};

export default FadeOverlay;
