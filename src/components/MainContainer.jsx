import React from "react";
import Delivery from "../img/delivery.png";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content-none before:w-20 before:h-1 before:">
            Our fresh & healthy fruits
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
