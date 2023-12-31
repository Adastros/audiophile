import React from "react";
import { Column, Text } from "@react-email/components";

const PaymentMethod = ({ method }) => {
  // Inline Styles
  const columnStyle = {
    minWidth: "160px",
    verticalAlign: "top",
  };
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
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
    textTransform: method === "eMoney" ? "none" : "capitalize",
  };

  // Methods
  const paymentMethod = method === "eMoney" ? "e-Money" : method;

  return (
    <Column style={columnStyle}>
      <Text style={headingStyle}>Payment Method:</Text>
      <Text style={bodyStyle}>{paymentMethod}</Text>
    </Column>
  );
};

export default PaymentMethod;
