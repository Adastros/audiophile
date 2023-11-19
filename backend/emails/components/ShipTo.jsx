import React from "react";
import { Column, Text } from "@react-email/components";

const ShipTo = ({ name, address, city, country, zipCode, method }) => {
  const heading = method === "cash" ? "Deliver To:" : "Ship To:";

  // Inline Styles
  const headingStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
  };
  const bodyStyle = {
    margin: "0",
    fontSize: "12px",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
  };

  return (
    <Column>
      <Text style={headingStyle}>{heading}</Text>
      <Text style={bodyStyle}>{name}</Text>
      <Text style={bodyStyle}>{address}</Text>
      <Text style={bodyStyle}>{`${city} ${zipCode}`}</Text>
      <Text style={bodyStyle}>{country}</Text>
    </Column>
  );
};

export default ShipTo;
