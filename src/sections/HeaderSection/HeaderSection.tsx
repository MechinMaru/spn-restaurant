import MenuButton from "@/components/MenuButton";
import Colors from "@/constants/Color";
import TextStyles from "@/constants/TextStyles";
import React from "react";

type Props = {};

const HeaderSection: React.FC<Props> = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img src={"/images/spn_logo.png"} alt="logo" width={200} height={200} />

        <text
          style={{
            color: Colors.green01,
            ...TextStyles.TextStyle1,
          }}
        >
          -.ร้านอาหารสองพี่น้อง.-
        </text>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          padding: "30px 30px 30px 30px",
        }}
      >
        <MenuButton title="เมนูวันนี้"></MenuButton>
        <MenuButton title="ต้ม"></MenuButton>
        <MenuButton title="ทอด"></MenuButton>
        <MenuButton title="ยำ"></MenuButton>
        <MenuButton title="ผัด"></MenuButton>
        <MenuButton title="จานเดียว"></MenuButton>
      </div>
    </div>
  );
};

export default HeaderSection;
