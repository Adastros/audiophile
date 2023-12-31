import React from "react";
import { Section, Row } from "@react-email/components";
import ShipTo from "./ShipTo";
import PaymentMethod from "./PaymentMethod";

const InfoSummary = ({
  name,
  address,
  city,
  stateProvince,
  country,
  zipCode,
  method,
}) => {
  // Inline Styles
  const sectionStyle = {
    padding: "24px 0",
  };

  return (
    <Section style={sectionStyle}>
      <Row>
        <ShipTo
          name={name}
          address={address}
          city={city}
          stateProvince={stateProvince}
          country={country}
          zipCode={zipCode}
          method={method}
        />
        <PaymentMethod method={method} />
      </Row>
    </Section>
  );
};

export default InfoSummary;
