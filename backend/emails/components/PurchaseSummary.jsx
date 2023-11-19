import React from "react";
import { Section } from "@react-email/components";
import PurchaseSummaryTableHeading from "./PurchaseSummaryTableHeading";
import LineItem from "./LineItem";
import LineBreak from "./LineBreak";
import itemInfo from "../../data/header.json";

const PurchaseSummary = ({ items }) => {
  const baseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL;

  // Inline styles
  const summaryStyle = {
    padding: "24px 0",
  };
  // Component Generators
  const createLineItems = () => {
    return Object.entries(items).map((item) => {
      const itemName = item[0];
      const itemQty = item[1];

      // If items list contains undefined or zero quantity, do not return a list item component.
      if (!itemQty) return null;

      const imgUrl = `${baseUrl}${itemInfo.image[itemName].path}`;
      const imgAlt = `${baseUrl}${itemInfo.image[itemName].alt}`;
      const displayName = itemInfo.cart[itemName].displayName;
      const price = itemInfo.cart[itemName].price;
      const itemTotal = price * itemQty;

      return (
        <LineItem
          key={`${itemName}LineItem`}
          imgUrl={imgUrl}
          imgAlt={imgAlt}
          displayName={displayName}
          qty={itemQty}
          price={price}
          itemTotal={itemTotal}
        />
      );
    });
  };

  return (
    <Section style={summaryStyle}>
      <PurchaseSummaryTableHeading />
      <LineBreak />
      {createLineItems()}
    </Section>
  );
};

export default PurchaseSummary;
