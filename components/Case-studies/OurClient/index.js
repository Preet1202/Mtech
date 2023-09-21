import React from "react";
import { Container } from "react-bootstrap";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./ourclient.module.scss";

function OurClient({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const isTwoBox =
    sectionData?.expertise_delivered_items?.length > 0 ||
    sectionData?.industry_items?.length > 0
      ? true
      : false;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_row",
        "pad_tb_80",
        variantClass,
        style.main_container,
        style[variantClass],
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_row",
          "gap_10",
          style.inner_container,
        ])}
      >
        <div
          className={addMultiClasses([
            "flex_col",
            "gap_20",
            style.left_box,
            !isTwoBox ? style.remove_pad : "",
          ])}
        >
          {sectionData?.title && <h2>{sectionData?.title}</h2>}
          {sectionData?.description && (
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: sectionData?.description }}
            ></div>
          )}
        </div>
        {isTwoBox && (
          <div
            className={addMultiClasses(["flex_col", "gap_20", style.right_box])}
          >
            {sectionData?.expertise_delivered_items && (
              <>
                <h2>{sectionData?.expertise_delivered_title}</h2>

                <div className={addMultiClasses(["flex_row", "gap_10"])}>
                  {sectionData?.expertise_delivered_items.map((data) => {
                    return (
                      <div className={style.single_box} key={data?.id}>
                        {data?.Textbox}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {sectionData?.industry_items && (
              <>
                <h2>{sectionData?.industry_title}</h2>

                <div className={addMultiClasses(["flex_row", "gap_10"])}>
                  {sectionData?.industry_items.map((data) => {
                    return (
                      <div className={style.single_box} key={data?.id}>
                        {data?.Textbox}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default OurClient;
