import React from "react";
import { Row, Column, Text } from "@react-email/components";

const CostType = ({ costText, costNum }) => {
  const costNumStr = costNum.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  // Inline Style
  const rowStyle = {
    width: "100%",
    maxWidth: "250px",
    margin: costText === "grand total" ? "12px 0 0 auto" : "0 0 0 auto",
  };
  const costStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textTransform: "uppercase",
  };
  const numberStyle = {
    margin: 0,
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "right",
  };

  return (
    <Row style={rowStyle}>
      <Column>
        <Text style={costStyle}>{costText}</Text>
      </Column>
      <Column>
        <Text style={numberStyle}>{`$ ${costNumStr}`}</Text>
      </Column>
    </Row>
  );
};

export default CostType;
