import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import style from "./titleimage.module.scss";

function TitleImage({ sectionData }) {
  if (!sectionData) return <></>;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        style.main_container,
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
        {sectionData?.image?.data?.attributes?.url && (
          <Image
            src={sectionData?.image?.data?.attributes?.url}
            width={sectionData?.image?.data?.attributes?.width}
            height={sectionData?.image?.data?.attributes?.height}
            alt={sectionData?.image?.data?.attributes?.alternativeText}
            layout="intrinsic"
          />
        )}
      </Container>
    </Container>
  );
}

export default TitleImage;
