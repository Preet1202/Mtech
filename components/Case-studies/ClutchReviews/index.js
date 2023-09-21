import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Buttons from "../../Button";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./clutchreviews.module.scss";

function ClutchReviews({ sectionData, scrollToForm }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        variantClass,
        style.main_container,
        style[variantClass],
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_50",
          style.inner_container,
        ])}
      >
        <div
          className={addMultiClasses(["flex_col", "gap_30", style.content_box])}
        >
          {sectionData?.title && <h2>{sectionData?.title}</h2>}
          {sectionData?.image?.data?.length > 0 && (
            <div
              className={addMultiClasses([
                "flex_row",
                "gap_30",
                style.images_box,
              ])}
            >
              {sectionData?.image?.data?.map((data, index) => {
                return (
                  <div className={style.single_image} key={data?.id}>
                    <Image
                      src={data?.attributes?.url}
                      width={data?.attributes?.width}
                      height={data?.attributes?.height}
                      alt={data?.attributes?.alternativeText}
                      layout="intrinsic"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {sectionData?.button && (
          <Buttons
            variant={"secondary_animated"}
            name={sectionData?.button?.title}
            scrollToForm={scrollToForm}
            id={sectionData?.button?.button_id}
            url_type={sectionData?.button?.url_type}
          />
        )}
      </Container>
    </Container>
  );
}

export default ClutchReviews;
