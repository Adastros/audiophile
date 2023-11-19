import React from "react";
import { Row, Column, Text } from "@react-email/components";

const PurchaseSummaryTableHeading = () => {
  //Inline Styles
  const columnStyleQty = {
    width: "75px",
  };
  const columnStylePriceAndItemTotal = {
    width: "27.5%",
  };
  const tableHeadingStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
    textAlign: "right",
  };

  return (
    <Row>
      <Column>
        <Text style={{ ...tableHeadingStyle, textAlign: "left" }}>
          Item Description
        </Text>
      </Column>
      <Column style={columnStyleQty}>
        <Text style={tableHeadingStyle}>Qty</Text>
      </Column>
      <Column style={columnStylePriceAndItemTotal}>
        <Text style={tableHeadingStyle}>Price</Text>
      </Column>
      <Column style={columnStylePriceAndItemTotal}>
        <Text style={tableHeadingStyle}>Item Total</Text>
      </Column>
    </Row>
  );
};

export default PurchaseSummaryTableHeading;
