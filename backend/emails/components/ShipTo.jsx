import React from "react";
import { Column, Text } from "@react-email/components";

const ShipTo = ({
  name,
  address,
  city,
  stateProvince,
  country,
  zipCode,
  method,
}) => {
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
  const wordWrapStyle = {
    ...bodyStyle,
    wordBreak: "break-word",
  };

  return (
    <Column>
      <Text style={headingStyle}>{heading}</Text>
      <Text style={bodyStyle}>{name}</Text>
      <Text style={bodyStyle}>{address}</Text>
      <Text
        style={wordWrapStyle}
      >{`${city}, ${stateProvince} ${zipCode}`}</Text>
      <Text style={bodyStyle}>{country}</Text>
    </Column>
  );
};

export default ShipTo;
