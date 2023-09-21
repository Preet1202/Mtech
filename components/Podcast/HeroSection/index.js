import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { getVariantCommonClass } from "../../../common/Helper";
import { addMultiClasses } from "../../../common/common";
import Buttons from "../../Button";
import style from "./herosection.module.scss";

function HeroSection({ sectionData }) {
  const variantClass = getVariantCommonClass(sectionData?.variant);
  if (!sectionData) return <></>;

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
          "gap_80",
          style.inner_container,
        ])}
      >
        <div className={addMultiClasses(["flex_row", style.top_section])}>
          <div
            className={addMultiClasses(["flex_col", "gap_30", style.left_box])}
          >
            <div
              className={addMultiClasses([
                "flex_col",
                "gap_10",
                style.text_container,
              ])}
            >
              {sectionData?.top_label && (
                <div className={style.top_label}>{sectionData?.top_label}</div>
              )}
              {(sectionData?.banner_title || sectionData?.description) && (
                <div
                  className={addMultiClasses([
                    "flex_col",
                    "gap_10",
                    style.textbox,
                  ])}
                >
                  {sectionData?.banner_title && (
                    <h2>{sectionData?.banner_title}</h2>
                  )}
                  {sectionData?.description && (
                    <div
                      className={style.description}
                      dangerouslySetInnerHTML={{
                        __html: sectionData?.description,
                      }}
                    ></div>
                  )}
                </div>
              )}
            </div>
            <div className={style.button_container}>
              <Buttons
                name={sectionData?.button?.title}
                url={sectionData?.button?.url}
                id={sectionData?.button?.button_id}
                url_type={sectionData?.button?.url_type}
                variant="secondary"
              />
            </div>
          </div>
          {sectionData?.hero_image?.data?.attributes?.url && (
            <div className={style.right_box}>
              {sectionData?.top_corner_image?.data?.attributes?.url && (
                <div className={style.top_corner_img}>
                  <Image
                    priority={true}
                    src={sectionData?.top_corner_image?.data?.attributes?.url}
                    height={146}
                    width={146}
                    layout="intrinsic"
                    alt={
                      sectionData?.top_corner_image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </div>
              )}
              <Image
                priority={true}
                src={sectionData?.hero_image?.data?.attributes?.url}
                height={424}
                width={424}
                alt={sectionData?.hero_image?.data?.attributes?.alternativeText}
                className={style.main_img}
                objectFit="cover"
              />
              <div className={style.soundwave_img}>
                <Image
                  priority={true}
                  src="https://cdn-gcp.new.marutitech.com/Sound_Wave_357677d935.png"
                  height={53}
                  width={182}
                  layout="intrinsic"
                  alt="soundwave"
                  objectFit="cover"
                />
              </div>
            </div>
          )}
        </div>
        {sectionData?.listen_platforms?.length > 0 && (
          <div className={addMultiClasses(["flex_row", style.bottom_section])}>
            {sectionData?.listen_platforms?.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  {data?.image?.data?.attributes?.url && data?.link && (
                    <Link href={data?.link} target="_blank" passHref>
                      <a
                        href={data?.link}
                        target="_blank"
                        className={style.platform_link}
                        rel="noreferrer noopener"
                      >
                        <Image
                          priority={true}
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={data?.image?.data?.attributes?.height}
                          width={data?.image?.data?.attributes?.width}
                          alt={data?.image?.data?.attributes?.alternativeText}
                        />
                      </a>
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HeroSection;
