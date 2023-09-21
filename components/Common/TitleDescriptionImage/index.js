import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./titledescimg.module.scss";

function TitleDescriptionImage({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const isImageLeft =
    sectionData?.variant_imgalign?.img_align === "left" ? true : false;
  const isImageCenter =
    sectionData?.variant_imgalign?.img_align === "center" ? true : false;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        variantClass,
        style.main_container,
        isImageCenter ? style.img_aligncenter : "",
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
        {sectionData?.title && (
          <h2 className={style.title}>{sectionData?.title}</h2>
        )}
        <div
          className={addMultiClasses([
            "flex_row",
            style.section_content,
            isImageLeft ? style.reverse_img : "",
          ])}
        >
          {sectionData?.description && (
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: sectionData?.description }}
            ></div>
          )}
          {sectionData?.image?.data?.attributes?.url && (
            <div className={style.imgbox}>
              <Image
                src={sectionData?.image?.data?.attributes?.url}
                width={sectionData?.image?.data?.attributes?.width}
                height={sectionData?.image?.data?.attributes?.height}
                alt={sectionData?.image?.data?.attributes?.alternativeText}
                layout="intrinsic"
              />
            </div>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default TitleDescriptionImage;
