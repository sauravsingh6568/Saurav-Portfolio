import React from "react";

const GradientSpheres = ({ sphere1Class, sphere2Class }) => {
  return (
    <>
      <div className={sphere1Class}></div>
      {sphere2Class && <div className={sphere2Class}></div>}
    </>
  );
};

export default GradientSpheres;
