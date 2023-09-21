import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./clienttestimonial.module.scss";

function ClientTestimonial({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const hasClientImage = sectionData?.client_img?.data?.attributes?.url
    ? true
    : false;
  const fullName = [sectionData?.name, sectionData?.position_company]
    .filter(function (e) {
      return e;
    })
    .join(", ");

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
      {hasClientImage ? (
        <Container
          className={addMultiClasses([
            "flex_row",
            "gap_40",
            style.inner_container,
            style.with_clientimg,
          ])}
        >
          <div
            className={addMultiClasses(["flex_col", "gap_10", style.imgbox])}
          >
            <Image
              src={sectionData?.client_img?.data?.attributes?.url}
              width={130}
              height={130}
              //   layout="responsive"
              alt={sectionData?.client_img?.data?.attributes?.alternativeText}
            />
            <div
              className={addMultiClasses(["flex_col", style.client_details])}
            >
              {sectionData?.name && (
                <h4 className={style.clientname}>{sectionData?.name}</h4>
              )}
              {sectionData?.position_company && (
                <p className={style.clientcompany}>
                  {sectionData?.position_company}
                </p>
              )}
            </div>
          </div>
          {sectionData?.description && (
            <div
              className={style.testimonial}
              dangerouslySetInnerHTML={{ __html: sectionData?.description }}
            ></div>
          )}
        </Container>
      ) : (
        <Container
          className={addMultiClasses([
            "flex_col",
            "gap_30",
            style.inner_container,
            style.without_clientimg,
          ])}
        >
          {sectionData?.description && (
            <div
              className={style.testimonial}
              dangerouslySetInnerHTML={{ __html: sectionData?.description }}
            ></div>
          )}
          {(sectionData?.name || sectionData?.position_company) && (
            <h2 className={style.clientname}>{`- ${fullName}`}</h2>
          )}
        </Container>
      )}
    </Container>
  );
}

export default ClientTestimonial;
