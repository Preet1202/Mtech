import React from "react";
import { Container } from "react-bootstrap";
import { addMultiClasses } from "../../../common/common";
import Buttons from "../../Button";
import CustomCounter from "../../Common/CustomCounter";
import style from "./herosection.module.scss";

function HeroSection({ sectionData, scrollToForm }) {
  if (!sectionData) return <></>;

  return (
    <Container
      fluid
      className={addMultiClasses([style.main_container])}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                url("${sectionData?.background_img?.data?.attributes?.url}")`,
      }}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_10",
          "pad_tb_80",
          style.inner_container,
        ])}
      >
        {sectionData?.top_label && (
          <div className={style.top_label}>{sectionData?.top_label}</div>
        )}
        <div
          className={addMultiClasses([
            "flex_col",
            "gap_100",
            style.section_items,
          ])}
        >
          {sectionData?.banner_title && (
            <div
              className={addMultiClasses([
                "flex_col",
                "gap_30",
                style.section_top,
              ])}
            >
              <h1>{sectionData?.banner_title}</h1>
              {sectionData?.cta_button?.title && (
                <div className={style.banner_button}>
                  {sectionData?.cta_button?.url ? (
                    <Buttons
                      variant={"secondary_animated"}
                      name={sectionData?.cta_button?.title}
                      url={sectionData?.cta_button?.url}
                      id={sectionData?.cta_button?.button_id}
                      url_type={sectionData?.cta_button?.url_type}
                    />
                  ) : (
                    <Buttons
                      variant={"secondary_animated"}
                      name={sectionData?.cta_button?.title}
                      scrollToForm={scrollToForm}
                      id={sectionData?.cta_button?.button_id}
                      url_type={sectionData?.cta_button?.url_type}
                    />
                  )}
                </div>
              )}
            </div>
          )}

          {/* variant-1 - with expertise and industry tags */}
          {(sectionData?.expertise_delivered_items?.length > 0 ||
            sectionData?.industry_items?.length > 0) && (
            <div
              className={addMultiClasses([
                "flex_row",
                "d-none d-md-block",
                "gap_100",
                style.section_bottom,
              ])}
            >
              <div
                className={addMultiClasses([
                  "flex_row",
                  "gap_100",
                  style.expertise_items,
                ])}
              >
                {sectionData?.expertise_delivered_items && (
                  <div
                    className={addMultiClasses([
                      "flex_col",
                      "gap_20",
                      style.single_item,
                    ])}
                  >
                    <h2>{sectionData?.expertise_delivered_title}</h2>
                    <div
                      className={addMultiClasses([
                        "flex_row",
                        "gap_10",
                        style.multi_box,
                      ])}
                    >
                      {sectionData?.expertise_delivered_items.map((data) => {
                        return (
                          <div className={style.single_box} key={data?.id}>
                            {data?.Textbox}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {sectionData?.industry_items && (
                  <div
                    className={addMultiClasses([
                      "flex_col",
                      "gap_20",
                      style.single_item,
                    ])}
                  >
                    <h2>{sectionData?.industry_title}</h2>
                    <div
                      className={addMultiClasses([
                        "flex_row",
                        "gap_10",
                        style.multi_box,
                      ])}
                    >
                      {sectionData?.industry_items.map((data) => {
                        return (
                          <div className={style.single_box} key={data?.id}>
                            {data?.Textbox}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* variant-2 - statistics */}
          {sectionData?.hero_statistics?.length > 0 && (
            <div
              className={addMultiClasses([
                "flex_col",
                "gap_100",
                "d-none d-md-block",
                style.section_bottom,
              ])}
            >
              <div
                className={addMultiClasses([
                  "flex_row",
                  "gap_60",
                  style.statistics_items,
                ])}
              >
                {sectionData?.hero_statistics?.map((data) => {
                  return (
                    <div
                      className={style.statistics_single_item}
                      key={data?.id}
                    >
                      <CustomCounter
                        fullNumber={data?.Heading || ""}
                        reloadOnScroll={false}
                      />
                      {data?.Sub_heading && <h4>{data?.Sub_heading}</h4>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default HeroSection;
