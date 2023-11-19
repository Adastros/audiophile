import React from "react";
import { Row, Column, Img, Text } from "@react-email/components";

const LineItem = ({ imgUrl, imgAlt, displayName, qty, price, itemTotal }) => {
  //Inline Styles
  const rowStyle = { marginTop: "16px" };
  const columnStyle = {
    width: "27.5%",
  };
  const columnStyleImg = {
    width: "64px",
  };
  const columnStyleQty = { width: "75px" };
  const lineItemTextStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "right",
  };
  const lineItemTextStyleDisplayName = {
    margin: "0 0 0 16px",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "left",
  };
  const imgStyle = {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
  };

  return (
    <Row style={rowStyle}>
      <Column>
        <Row>
          <Column style={columnStyleImg}>
            <Img
              src={imgUrl}
              alt={imgAlt}
              height="64"
              width="64"
              style={imgStyle}
            />
          </Column>
          <Column>
            <Text style={lineItemTextStyleDisplayName}>{displayName}</Text>
          </Column>
        </Row>
      </Column>
      <Column style={columnStyleQty}>
        <Text style={lineItemTextStyle}>{qty}</Text>
      </Column>
      <Column style={columnStyle}>
        <Text style={lineItemTextStyle}>{`$ ${price}`}</Text>
      </Column>
      <Column style={columnStyle}>
        <Text style={lineItemTextStyle}>{`$ ${itemTotal}`}</Text>
      </Column>
    </Row>
  );
};

export default LineItem;
