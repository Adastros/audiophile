import React from "react";
import { Section, Text, Link } from "@react-email/components";

const ProcessingMessage = ({ method }) => {
  const processingMsgShipping = `We are currently processing your order. You will receive a shipping confirmation with your tracking number once your order ships.`;
  const processingMsgDelivery = `We are currently processing your order. You will receive a delivery confirmation once your order is ready to be delivered.`;
  const processingMsg =
    method === "cash" ? processingMsgDelivery : processingMsgShipping;
  const audiophileUrl = "https://audiophile.fan";

  //Inline Styles
  const sectionStyle = {
    padding: "24px 0",
  };
  const thankMessageStyle = {
    margin: "0 0 16px 0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
  };
  const processingMessageStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
  };

  return (
    <Section style={sectionStyle}>
      <Text style={thankMessageStyle}>
        Thank you for shopping at{" "}
        <Link href={audiophileUrl} target="_blank">
          audiophile.
        </Link>
      </Text>
      <Text style={processingMessageStyle}>{processingMsg}</Text>
    </Section>
  );
};

export default ProcessingMessage;
