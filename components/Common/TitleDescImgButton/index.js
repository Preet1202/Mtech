import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import Buttons from "../../Button";
import style from "./titledescimgbutton.module.scss";

function TitleDescImgButton({
  sectionData,
  withBGImage = false,
  scrollToForm,
}) {
  if (!sectionData) return <></>;

  const variantClass = getVariantCommonClass(sectionData?.variant);
  const isImageLeft =
    sectionData?.variant_imgalign?.img_align === "left" ? true : false;
  const showBGImage =
    withBGImage && !sectionData?.image?.data?.attributes?.url ? true : false;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        showBGImage ? "with_plant_bg" : "",
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
        <div
          className={addMultiClasses([
            "flex_row",
            style.section_content,
            isImageLeft ? style.reverse_img : "",
          ])}
        >
          {sectionData?.description && (
            <div
              className={addMultiClasses([
                "flex_col",
                "gap_30",
                style.description_box,
              ])}
            >
              <div
                className={style.description}
                dangerouslySetInnerHTML={{ __html: sectionData?.description }}
              ></div>
              {sectionData?.button?.title && (
                <div className={style.section_button}>
                  <Buttons
                    variant={"secondary_animated"}
                    name={sectionData?.button?.title}
                    scrollToForm={scrollToForm}
                    id={sectionData?.button.button_id}
                    url_type={sectionData?.button.url_type}
                  />
                </div>
              )}
            </div>
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

export default TitleDescImgButton;
