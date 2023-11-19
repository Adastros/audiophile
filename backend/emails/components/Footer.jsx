import React from "react";
import { Section, Text } from "@react-email/components";

const Footer = () => {
  const footerText = `\u00A9 Copyright 2023 audiophile. All Rights Reserved.`;

  // Inline Styles
  const sectionStyle = {
    height: "100px",
    padding: "16px 32px",
    backgroundColor: "black",
  };
  const textStyle = {
    margin: 0,
    color: "white",
    fontSize: "11px",
    fontWeight: "normal",
    lineHeight: "normal",
  };

  return (
    <Section style={sectionStyle}>
      <Text style={textStyle}>{footerText}</Text>
    </Section>
  );
};

export default Footer;
