import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { addMultiClasses } from "../../../common/common";
import { getVariantCommonClass } from "../../../common/Helper";
import style from "./companystatistics.module.scss";

function CompanyStatistics({ sectionData }) {
  if (!sectionData) return <></>;
  const variantClass = getVariantCommonClass(sectionData?.variant);

  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_80",
        variantClass,
        "with_plant_bg",
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
        {(sectionData?.title || sectionData?.description) && (
          <div
            className={addMultiClasses([
              "flex_col",
              "gap_30",
              style.title_desc,
            ])}
          >
            {sectionData?.title && <h2>{sectionData?.title}</h2>}
            {sectionData?.description && (
              <div
                className={style.description}
                dangerouslySetInnerHTML={{ __html: sectionData?.description }}
              ></div>
            )}
          </div>
        )}

        {sectionData?.statistics.length > 0 && (
          <div
            className={addMultiClasses([
              "flex_row",
              "gap_60",
              style.statistics_container,
            ])}
          >
            {sectionData?.statistics?.map((data) => {
              const fullNumber = data?.Heading || "";
              let stripedNumber = "";
              let stripedPrefix = "";
              let stripedSuffix = "";
              const showDecimal = fullNumber.includes(".") ? true : false;
              if (fullNumber.includes("/")) {
                stripedNumber = fullNumber.substring(
                  0,
                  fullNumber.indexOf("/")
                );
                stripedSuffix = "/" + fullNumber.split("/").pop();
              } else {
                stripedNumber = fullNumber.replace(/\D/g, "");
                stripedPrefix = fullNumber.substring(
                  0,
                  fullNumber.indexOf(stripedNumber)
                );
                stripedSuffix = fullNumber.split(stripedNumber).pop();
              }

              return (
                <div
                  className={addMultiClasses([
                    "flex_col",
                    style.statistics_single_item,
                  ])}
                  key={data?.id}
                >
                  <CountUp
                    start={0}
                    end={stripedNumber}
                    duration={2.75}
                    separator=" "
                    redraw={false}
                    suffix={stripedSuffix}
                    prefix={stripedPrefix}
                    decimals={showDecimal}
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  {data?.Sub_heading && <h4>{data?.Sub_heading}</h4>}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default CompanyStatistics;
