import MenuInfo from "@/components/MenuInfo";
import Colors from "@/constants/Color";
import TextStyles from "@/constants/TextStyles";
import { FoodItem } from "@/ts/foods";
import React from "react";

type Props = {
  headerTitle: string;
  description: string;
  foodItemList: FoodItem[] | undefined;
};

const MenuSection: React.FC<Props> = ({
  headerTitle = "ต้ม",
  description = "dfdfasdf",
  foodItemList = [],
}) => {
  return (
    <div
      id={headerTitle}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        paddingTop: "10px",
      }}
    >
      <text
        style={{
          ...TextStyles.TextStyle1,
          color: Colors.green01,
          alignItems: "center",
        }}
      >
        {headerTitle}
      </text>
      {foodItemList.length > 0 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {foodItemList.map((foodItem, key) => (
            <MenuInfo {...foodItem} key={key} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div
        style={{
          ...TextStyles.TextStyle3,
          color: Colors.orange,
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default MenuSection;
