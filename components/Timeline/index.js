import React from "react";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import { addMultiClasses } from "../../common/common";

import style from "./timeline.module.scss";
function Timeline(props) {
  const compare = (a, b) => {
    return b.id - a.id;
  };

  const variantClass =
    props?.timelinedata?.Timeline_box?.length <= 6 ? style.ForSixBox : "";
  const addSpacing_hire_mobile_box =
    props?.addExtraSpacing == true ? style.addSpacing_hire_mobile_box : "";
  const addSpacing_hire_mobile_box2 =
    props?.addExtraSpacing == true ? style.addSpacing_hire_mobile_box2 : "";
  const addExtraClass =
    props?.parentPage === "data_engineering"
      ? style.from_data_engineering
      : props?.parentPage === "ui-ux" ||
        props?.parentPage === "user-research" ||
        props?.parentPage === "product-strategy"
      ? style.from_ui_ux
      : props?.parentPage === "product-management"
      ? style.from_product_management
      : props?.parentPage === "hire-mobile-app"
      ? style.from_hire_mobile_app
      : props?.parentPage === "it-staff"
      ? style.from_it_staff
      : "";
  return (
    <>
      <Container
        className={addMultiClasses([style.timeline__container, addExtraClass])}
        fluid
        style={{ paddingBottom: `${props.paddingBottom}` }}
      >
        <h2 className={style.timeline__container__title}>
          {props?.timelinedata?.title}
        </h2>
        <Container className={style.box}>
          <div className={style.timeline_items__top}>
            {props?.timelinedata?.Timeline_box.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  <div className={style.timeline_item}>
                    <div className={style.timeline_item_content_box}>
                      <img
                        src={data?.image?.data?.attributes?.url}
                        height="50px"
                        width="50px"
                        alt={data?.image?.data?.attributes?.alternativeText}
                        style={{ objectFit: "contain" }}
                      />

                      <h2>
                        {} {data?.title}
                      </h2>
                      <div className={style.timeline_item_content}>
                        {data?.description}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }).slice(0, 2)}
          </div>
          <div
            className={addMultiClasses([
              style.timeline_items__bottom,
              addSpacing_hire_mobile_box,
            ])}
          >
            {props?.timelinedata?.Timeline_box.slice(2, 4)
              .sort(compare)
              .map((data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <div className={style.timeline__item__bottom}>
                      <div className={style.timeline_item_bottom_content_box}>
                        <img
                          src={data?.image?.data?.attributes?.url}
                          height="50px"
                          width="50px"
                          alt={data?.image?.data?.attributes?.alternativeText}
                          style={{ objectFit: "contain" }}
                        />

                        <h2>
                          {} {data?.title}
                        </h2>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </Container>
        <Container className={addMultiClasses([style.box2, variantClass])}>
          <div
            className={addMultiClasses([
              style.box2_timeline_items__bottom,
              addSpacing_hire_mobile_box2,
            ])}
          >
            {props?.timelinedata?.Timeline_box.slice(4, 6).map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  <div className={style.box2_timeline__item__bottom}>
                    <div
                      className={style.box2_timeline_item_bottom_content_box}
                    >
                      <img
                        src={data?.image?.data?.attributes?.url}
                        height="50px"
                        width="50px"
                        alt={data?.image?.data?.attributes?.alternativeText}
                        style={{ objectFit: "contain" }}
                      />
                      <h2>
                        {} {data?.title}
                      </h2>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </Container>
        {props?.timelinedata?.Timeline_box?.length > 6 && (
          <Container className={style.box3}>
            <div className={style.box3__timeline_items__bottom}>
              {props?.timelinedata?.Timeline_box.slice(6, 8)
                .sort(compare)
                .map((data) => {
                  return (
                    <React.Fragment key={data?.id}>
                      <div className={style.timeline__item__bottom}>
                        <div className={style.timeline_item_bottom_content_box}>
                          <img
                            src={data?.image?.data?.attributes?.url}
                            height="50px"
                            width="50px"
                            alt={data?.image?.data?.attributes?.alternativeText}
                            style={{ objectFit: "contain" }}
                          />
                          <h2>
                            {} {data?.title}
                          </h2>
                          <p>{data?.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </Container>
        )}
      </Container>

      <Container className={style.timeline__mobile__container} fluid>
        <Container>
          <h2>{props?.timelinedata?.title}</h2>
          <Row className={style.benefitbox__wrapper} style={{ margin: "0px" }}>
            {props?.timelinedata?.Timeline_box.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  <div className={style.benefitbox}>
                    <img
                      src={data?.image?.data?.attributes?.url}
                      height="50px"
                      width="50px"
                      alt={data?.image?.data?.attributes?.alternativeText}
                      style={{ objectFit: "contain" }}
                    />
                    <div className={style.bbtitle}>
                      {" "}
                      {} {data?.title}{" "}
                    </div>
                    <div className={style.bbdesc}>{data?.description}</div>
                  </div>
                </React.Fragment>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Timeline;
