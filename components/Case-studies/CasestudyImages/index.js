import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import style from "./casestudyimages.module.scss";

function CasestudyImages({ sectionData }) {
  if (sectionData?.length <= 0) return <></>;
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
          "gap_50",
          style.inner_container,
        ])}
      >
        {sectionData.map((data) => {
          return (
            <>
              <h2>{data?.title}</h2>
              {data?.image?.data?.attributes?.url && (
                <Image
                  src={data?.image?.data?.attributes?.url}
                  width={data?.image?.data?.attributes?.width}
                  height={data?.image?.data?.attributes?.height}
                  alt={data?.image?.data?.attributes?.alternativeText}
                  layout="intrinsic"
                />
              )}
            </>
          );
        })}
      </Container>
    </Container>
  );
}

export default CasestudyImages;
