import React from "react";
import { Section, Row, Column } from "@react-email/components";
import CostType from "./CostType";

const CostSummary = ({ costs }) => {
  // Inline styles
  const summaryStyle = {
    padding: "24px 0",
    paddingLeft: "18px",
  };
  const columnStyleSpacing = {
    width: "24%",
  };
  const columnStyleCostList = {
    width: "75%",
  };

  // Component Generators
  const createCostList = () => {
    return Object.entries(costs).map((costType) => {
      if (costType[0] === "grandTotal") {
        return (
          <CostType
            key={`${costType[0]}CostList`}
            costText={"grand total"}
            costNum={costType[1]}
          />
        );
      }

      return (
        <CostType
          key={`${costType[0]}CostList`}
          costText={costType[0]}
          costNum={costType[1]}
        />
      );
    });
  };

  return (
    <Section style={summaryStyle}>
      <Row>
        <Column style={columnStyleSpacing} />
        <Column style={columnStyleCostList}>{createCostList()}</Column>
      </Row>
    </Section>
  );
};

export default CostSummary;
