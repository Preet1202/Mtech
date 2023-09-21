import React from "react";
import TabComponent from "../../TabComponent";

function DescVerticalTabs({ sectionData }) {
  if (!sectionData) return <></>;
  const displayData = sectionData?.title_description;

  return (
    <TabComponent
      variant="primary"
      tabVerticalData={sectionData?.tabs}
      displayData={displayData}
      buttonData={sectionData?.button}
      fromCaseStudy={true}
    />
  );
}

export default DescVerticalTabs;
