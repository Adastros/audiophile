import React from "react";
import { Section, Img, Link } from "@react-email/components";

const Header = () => {
  const logoBaseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL;
  const audiophileUrl = "https://audiophile.fan";

  // Inline Style
  const sectionStyle = {
    height: "100px",
    backgroundColor: "black",
  };
  const imgStyle = { paddingLeft: "2rem", verticalAlign: "middle" };

  return (
    <Section style={sectionStyle}>
      <Link href={audiophileUrl} target="_blank">
        <Img
          src={`${logoBaseUrl}assets/email/logo`}
          alt="audiophile logo"
          style={imgStyle}
          height="25"
          width="143"
        />
      </Link>
    </Section>
  );
};

export default Header;
