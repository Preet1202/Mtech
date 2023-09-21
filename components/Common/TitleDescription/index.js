import React from "react";
import { Container } from "react-bootstrap";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./titledescription.module.scss";

function TitleDescription({ sectionData, withBGImage = false }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        withBGImage ? "with_plant_bg" : "",
        variantClass,
        style.main_container,
        style[variantClass],
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_30",
          style.inner_container,
        ])}
      >
        {sectionData?.title && (
          <h2 className={style.title}>{sectionData?.title}</h2>
        )}
        {sectionData?.description && (
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: sectionData?.description }}
          ></div>
        )}
      </Container>
    </Container>
  );
}

export default TitleDescription;
