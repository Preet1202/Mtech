import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./awardsrecognitions.module.scss";

function AwardsRecognitions({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);

  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_100",
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
        {sectionData?.title && <h2>{sectionData?.title}</h2>}
        {sectionData?.description && (
          <div
            className={style.description}
            dangerouslySetInnerHTML={{
              __html: sectionData?.description,
            }}
          ></div>
        )}
        {sectionData?.images?.data?.length > 0 && (
          <div
            className={addMultiClasses([
              "flex_row",
              "gap_70",
              style.images_container,
            ])}
          >
            {sectionData?.images?.data?.map((data) => {
              if (!data?.attributes?.url) return <></>;
              return (
                <div className={style.single_img} key={data?.id}>
                  <Image
                    priority={true}
                    src={data?.attributes?.url}
                    layout="intrinsic"
                    height={data?.attributes?.formats?.thumbnail?.height}
                    width={data?.attributes?.formats?.thumbnail?.width}
                    // height={data?.attributes?.formats?.thumbnail?.height}
                    // width={data?.attributes?.formats?.thumbnail?.width}
                    alt={data?.attributes?.alternativeText}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default AwardsRecognitions;
