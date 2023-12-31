import React from "react";
import {
  Html,
  Head,
  Font,
  Preview,
  Container,
  Section,
} from "@react-email/components";
import Header from "./components/Header";
import ProcessingMessage from "./components/ProcessingMessage";
import InfoSummary from "./components/InfoSummary";
import PurchaseSummary from "./components/PurchaseSummary";
import CostSummary from "./components/CostSummary";
import Footer from "./components/Footer";
import LineBreak from "./components/LineBreak";

const OrderConfirmation = ({ data }) => {
  const previewMessage = `audiophile order confirmation`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Manrope"
          fallbackFontFamily={`system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`}
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Manrope",
            format: "woff2",
          }}
        />
      </Head>
      <Preview>{previewMessage}</Preview>
      <div style={{ backgroundColor: "#FFF" }}>
        <Container style={{ backgroundColor: "#FAFAFA" }}>
          <Header />
          <Section style={{ padding: "0 2rem" }}>
            <ProcessingMessage method={data.radio} />
            <LineBreak />
            <InfoSummary
              name={data.name}
              address={data.address}
              city={data.city}
              stateProvince={data.stateProvince}
              country={data.country}
              zipCode={data.zipCode}
              method={data.radio}
            />
            <LineBreak />
            <PurchaseSummary items={data.items} />
            <LineBreak />
            <CostSummary costs={data.costs} />
          </Section>
          <Footer />
        </Container>
      </div>
    </Html>
  );
};

export default OrderConfirmation;
