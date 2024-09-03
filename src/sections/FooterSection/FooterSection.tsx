import Colors from "@/app/constants/Color";
import TextStyles from "@/app/constants/TextStyles";
import React from "react";

type Props = {};

const FooterSection: React.FC<Props> = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow,
        ...TextStyles.TextStyle2,
        color: Colors.green01,
      }}
    >
      <div style={{ ...TextStyles.TextStyle2, color: Colors.green01 }}>
        ขอขอบคุณลูกค้าทุกท่านที่มาอุดหนุน
      </div>
      <div
        style={{
          height: "80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={"/images/ic_clock.png"}
            alt="icon_clock"
            width={24}
            height={24}
          ></img>
          <text>เปิดบริการทุกวัน 16.00 - 21.00 น.</text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <img
            src={"/images/ic_phone.png"}
            alt="icon_phone"
            width={24}
            height={24}
          ></img>
          <text>โทร 044-518544</text>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
