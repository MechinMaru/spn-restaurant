"use client";

import Colors from "@/constants/Color";
import TextStyles from "@/constants/TextStyles";
import React from "react";

type Props = {
  title: string;
};

const MenuButton: React.FC<Props> = ({ title = "ต้ม" }) => {
  const circleStyle = {
    width: "100px", // Diameter of the circle
    height: "100px", // Same as width to make it a perfect circle
    backgroundColor: Colors.green01, // Background color of the circle
    borderRadius: "50%",
    // Makes the div circular
  };

  return (
    <button
      style={{
        ...circleStyle,
        ...TextStyles.TextStyle2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: Colors.yellow,
      }}
      onClick={(e) => {
        document?.querySelector("#" + title)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
    >
      {title}
    </button>
  );
};

export default MenuButton;
