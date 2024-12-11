import React, { useState } from "react";
import Bubble from './bubble.js'

const Hover = ({ img1, img2, bubble, scale, text}) => {
  const [showChatBubble, setShowChatBubble] = useState(false);

  const handleClick = () => {
    setShowChatBubble((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setShowChatBubble(false); 
    console.log("here");
  };

  return (
    <div
      className="group h-full w-full relative cursor-pointer"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group-hover:hidden">
        <img src={img1} alt="Default" className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(255,204,225,0.6)]"/>
      </div>
      <div className="hidden group-hover:flex">
        <img src={img2} alt="Hovered" className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(255,204,225,0.6)]"/>
      </div>

      {showChatBubble && (
        <Bubble bubble={bubble} text={text} />
        )}
    </div>
  );
};

export default Hover;
