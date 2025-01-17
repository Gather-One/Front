"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import checkAnimation from "../../public/checkAnimation.json";

const CheckAnimation = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Player
        autoplay
        loop
        src={checkAnimation}
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};

export default CheckAnimation;
