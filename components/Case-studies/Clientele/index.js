import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import Buttons from "../../Button";
import style from "./clientele.module.scss";

function Clientele({ sectionData, scrollToForm }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const total_items = sectionData?.images?.data?.length;
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
          "gap_60",
          style.inner_container,
        ])}
      >
        {sectionData?.title && (
          <h2 className={style.title}>{sectionData?.title}</h2>
        )}
        {total_items > 0 && (
          <Container>
            <Row
              className={addMultiClasses(["flex_row", style.images_container])}
            >
              {sectionData?.images?.data?.map((data, index) => {
                return (
                  <Col
                    className={style.imgbox}
                    md={3}
                    sm={6}
                    xs={6}
                    key={data?.id}
                  >
                    <Image
                      src={data?.attributes?.url}
                      width={150}
                      height={150}
                      alt={data?.attributes?.alternativeText}
                      layout="intrinsic"
                    />
                  </Col>
                );
              })}
              {sectionData?.button && (
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
            </Row>
          </Container>
        )}

        {/* <div
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
              {sectionData?.button?.url && (
                <div className={style.section_button}>
                  <Buttons
                    variant={"secondary_animated"}
                    name={sectionData?.button?.title}
                    url={sectionData?.button.url}
                    id={sectionData?.button.button_id}
                    url_type={sectionData?.button.url_type}
                  />
                </div>
              )}
            </div>
          )}
          {data?.attributes?.url && (
            <div className={style.imgbox}>
              <Image
                src={data?.attributes?.url}
                width={data?.attributes?.width}
                height={data?.attributes?.height}
                alt={data?.attributes?.alternativeText}
                layout="intrinsic"
              />
            </div>
          )}
        </div> */}
      </Container>
    </Container>
  );
}

export default Clientele;
