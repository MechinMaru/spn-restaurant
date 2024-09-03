import Colors from "@/constants/Color";
import TextStyles from "@/constants/TextStyles";
import React from "react";

type Props = {
  name: string;
  description: string;
  price: string;
  isSpicy: boolean;
  isReccommend: boolean;
};

const MenuInfo: React.FC<Props> = ({
  name,
  description,
  price,
  isSpicy,
  isReccommend,
}: Props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        padding: "0px 10px 0px 10px",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        {isReccommend ? (
          <img
            src={"/images/ic_thumbs_up.png"}
            alt="icon_thumbs_up"
            width={24}
            height={24}
          ></img>
        ) : (
          <div></div>
        )}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <text
            style={{
              color: Colors.green01,
              ...TextStyles.TextStyle2,
            }}
          >
            {name}
          </text>
          {isSpicy ? (
            <img
              src={"/images/ic_chili_pepper.png"}
              alt="icon_chili"
              width={20}
              height={20}
            />
          ) : (
            <div></div>
          )}
        </div>

        <div
          style={{
            color: Colors.green01,
            ...TextStyles.TextStyle2,
          }}
        >
          {price}.-
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
