import React from "react";
import { Container } from "react-bootstrap";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import CustomCounter from "../../Common/CustomCounter";
import style from "./casestudystatistics.module.scss";

function CasestudyStatistics({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const textAlignClass =
    sectionData?.variant_textalign?.text_align === "right"
      ? style.align_right
      : sectionData?.variant_textalign?.text_align === "center"
      ? style.align_center
      : style.align_left;
  const itemsLength = sectionData?.statistics_items?.length;
  const itemCountClass =
    itemsLength <= 3
      ? style.single_row
      : itemsLength == 5
      ? style.two_row_with3
      : style.two_row_with2;

  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_row",
        "pad_tb_80",
        variantClass,
        style.main_container,
        textAlignClass,
        itemCountClass,
        style[variantClass],
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_row",
          "gap_60",
          style.inner_container,
        ])}
      >
        {sectionData?.statistics_items?.length > 0 &&
          sectionData?.statistics_items?.map((data) => {
            return (
              <div
                className={addMultiClasses([
                  "flex_col",
                  style.statistics_single_item,
                ])}
                key={data?.id}
              >
                <CustomCounter fullNumber={data?.Heading || ""} />
                {data?.Sub_heading && <h4>{data?.Sub_heading}</h4>}
              </div>
            );
          })}
      </Container>
    </Container>
  );
}

export default CasestudyStatistics;
