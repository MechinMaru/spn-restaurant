import HeaderSection from "@/sections/HeaderSection";
import MenuSection from "@/sections/MenuSection";
import React from "react";

import todayMenuData from "@/data/menus/today_item.json";
import soupData from "@/data/menus/soup_item.json";
import friedData from "@/data/menus/fried_item.json";
import saladData from "@/data/menus/salad_item.json";
import stirFriedData from "@/data/menus/stir_fried_item.json";
import singleDishData from "@/data/menus/single_dish_item.json";
import otherData from "@/data/menus/other_item.json";
import FooterSection from "@/sections/FooterSection";
import Colors from "@/constants/Color";
type Props = {};

const RestaurantPage: React.FC<Props> = ({}) => {
  const today_menu = todayMenuData;
  const soup = soupData;
  const fried = friedData;
  const salad = saladData;
  const stir_fried = stirFriedData;
  const single_dish = singleDishData;
  const other = otherData;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: Colors.yellow,
      }}
    >
      <HeaderSection></HeaderSection>
      <div
        style={{
          maxWidth: "1024px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "50px 0px 50px 0px",
          gap: "50px",
        }}
      >
        <MenuSection
          headerTitle="เมนูวันนี้"
          description={today_menu.description}
          foodItemList={today_menu.items}
        ></MenuSection>

        <MenuSection
          headerTitle="ต้ม"
          description={soup.description}
          foodItemList={soup.items}
        ></MenuSection>
        <MenuSection
          headerTitle="ทอด"
          description={fried.description}
          foodItemList={fried.items}
        ></MenuSection>
        <MenuSection
          headerTitle="ยำ"
          description={salad.description}
          foodItemList={salad.items}
        ></MenuSection>
        <MenuSection
          headerTitle="ผัด"
          description={stir_fried.description}
          foodItemList={stir_fried.items}
        ></MenuSection>
        <MenuSection
          headerTitle="จานเดียว"
          description={single_dish.description}
          foodItemList={single_dish.items}
        ></MenuSection>
        <MenuSection
          headerTitle="อื่นๆ"
          description={other.description}
          foodItemList={other.items}
        ></MenuSection>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default RestaurantPage;
