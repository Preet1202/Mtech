import React from "react";
import Image from "next/image";
import style from "./RectangleCards.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const RectangleCards = (props) => {
  return (
    <>
      {props.variant === "workbenefit" ? (
        <Container style={{ marginTop: "100px" }}>
          <h1 className={style.workbenefit__title}>
            {props?.workbenefitdata?.title}
          </h1>
          <div className={style.workebenefit__desc}>
            {props?.workbenefitdata?.description}
          </div>

          <Row className={style.benefitbox__wrapper}>
            {props?.workbenefitdata?.BenefitBox?.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  {props.type === "imgonly" ? (
                    <div className={style.benefitbox__imgonly}>
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        height={30}
                        width={30}
                        layout="fixed"
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                      <div className={style.benefitbox__imgonly__title}>
                        {data?.title}
                      </div>
                    </div>
                  ) : (
                    <div className={style.benefitbox}>
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        height={30}
                        width={30}
                        layout="fixed"
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                      <div className={style.bbtitle}>{data?.title}</div>
                      <div className={style.bbdesc}>{data?.description}</div>
                    </div>
                  )}
                  {/* <div className={style.benefitbox}>
                    <Image
                      priority
                      src={data?.image?.data?.attributes?.url}
                      height={30}
                      width={30}
                      layout="fixed"
                      alt={data?.image?.data?.attributes?.alternativeText}
                    />
                    <div className={style.bbtitle}>{data?.title}</div>
                    <div className={style.bbdesc}>{data?.description}</div>
                  </div> */}
                </React.Fragment>
              );
            })}
          </Row>
        </Container>
      ) : (
        <Container fluid className={style.rectanglecard__section}>
          <div className={style.rectanglecard__div}>
            <div className={style.rectanglecard__title}>
              {props?.RectanglecardData?.title}
            </div>
            <div className={style.rectanglecard__desc}>
              {props?.RectanglecardData?.description}
            </div>
          </div>
          <Row className={style.card_row}>
            {props?.RectanglecardData?.rc_card?.map((data, index) => {
              return (
                <Col
                  xl={3}
                  lg={3}
                  md={12}
                  sm={12}
                  className={style.card_col}
                  key={data?.id}
                  // data-aos="fade-up"
                >
                  <Image
                    priority
                    // src={URL + data.image.data.attributes.url}
                    src={data?.image?.data?.attributes?.url}
                    height={204}
                    width={234}
                    layout="responsive"
                    alt={data?.image_alt_text}
                  />
                  <div className={style.cards_div}>
                    <div className={style.card_title}>
                      <b>{data?.title}</b>
                    </div>
                    <div className={style.card_div}>{data?.description}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default RectangleCards;
