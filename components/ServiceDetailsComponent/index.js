import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from "./ServiceDetailsComponent.module.scss";
import Buttons from "../Button";

function ServiceDetailsComponent({ variant, serviceDetailsData }) {
  return (
    <Container
      fluid
      style={{
        backgroundColor: variant === "primary" ? "#ffffff" : "#262531",
        // marginTop: `${props.mt}`,
      }}
      className={style.service_details_wrapper}
    >
      {variant === "primary" && (
        <Container
          style={{
            backgroundColor: variant === "primary" ? "#ffffff" : "#262531",
          }}
        >
          <Row xs={1} md={2} className={style.row_container}>
            <Col className="d-md-none d-xl-none">
              {/* title  */}
              <div className={style.desc_driven_title}>
                {/* {serviceDetailsData.title} */}
                {serviceDetailsData?.title}
              </div>
              {/* description  */}
              <div className={style.desc_driven_desc}>
                {/* {serviceDetailsData.description} */}
                {serviceDetailsData?.description}
              </div>
            </Col>
            <Col className="d-none d-sm-none d-md-block d-xl-block">
              {/* title  */}
              <div className={style.desc_driven_title}>
                {serviceDetailsData?.title}
              </div>
              {/* description  */}
              <div className={style.desc_driven_desc}>
                {serviceDetailsData?.description}
              </div>
              <div className={style.desc_advantages}>
                {serviceDetailsData?.advantages.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Image
                        priority
                        layout="intrinsic"
                        height={48.0791}
                        width={48.0791}
                        className={style.adv_img}
                        src={item?.image?.data?.attributes?.url}
                        alt={item?.title}
                      />
                      <div className={style.adv_desc}>{item.title}</div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={`${style.desc_learn_more_btn}`}>
                <Buttons
                  variant="secondary"
                  name={serviceDetailsData?.button?.title}
                  url={serviceDetailsData?.button?.url}
                />
              </div>
            </Col>
            <Col className={style.desc_driven_img}>
              <div data-aos="fade-up">
                <Image
                  // priority
                  // placeholder="blur"
                  // blurDataURL={serviceDetailsData?.image?.data?.attributes?.url}
                  layout="responsive"
                  height={330}
                  width={500}
                  src={serviceDetailsData?.image?.data?.attributes?.url}
                  alt={
                    serviceDetailsData?.image?.data?.attributes?.alternativeText
                  }
                />
              </div>
            </Col>
            <Col className="d-md-none d-xl-none">
              <div className={style.desc_advantages}>
                {serviceDetailsData?.advantages.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Image
                        priority
                        layout="intrinsic"
                        height={48.0791}
                        width={48.0791}
                        className={style.adv_img}
                        src={item?.image?.data?.attributes?.url}
                        alt={item?.title}
                      />
                      <div className={style.adv_desc}>{item?.title}</div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={`${style.desc_learn_more_btn}`}>
                <Buttons
                  variant="secondary"
                  name={serviceDetailsData?.button?.title}
                  url={serviceDetailsData?.button?.url}
                />
              </div>
              {/* <div
              className={`${style.desc_learn_more_btn} ${style.btn_content}`}
            >
              {serviceDetailsData?.button?.title}
            </div> */}
            </Col>
          </Row>
        </Container>
      )}
      {variant === "secondary" && (
        <Container
          style={{
            backgroundColor: variant === "primary" ? "#ffffff" : "#262531",
          }}
        >
          <Row xs={1} md={2} className={style.row_container}>
            <Col
              md={5}
              sm={12}
              className={
                "d-none d-sm-none d-md-block d-xl-block " +
                style.desc_driven_img
              }
            >
              <div data-aos="fade-up">
                <Image
                  // priority
                  // placeholder="blur"
                  // blurDataURL={serviceDetailsData?.image?.data?.attributes?.url}
                  layout="responsive"
                  height={377}
                  width={617}
                  src={serviceDetailsData?.image?.data?.attributes?.url}
                  alt={
                    serviceDetailsData?.image?.data?.attributes?.alternativeText
                  }
                />
              </div>
            </Col>
            <Col className="d-md-none d-xl-none">
              {/* title  */}
              <div className={style.img_driven_title}>
                {serviceDetailsData?.title}
              </div>
              {/* description  */}
              <div className={style.img_driven_desc}>
                {serviceDetailsData?.description}
              </div>
            </Col>
            <Col
              className={
                "d-none d-sm-none d-md-block d-xl-block " + style.col_margin
              }
            >
              {/* title  */}
              <div className={style.img_driven_title}>
                {serviceDetailsData?.title}
              </div>
              {/* description  */}
              <div className={style.img_driven_desc}>
                {serviceDetailsData?.description}
              </div>
              <div className={style.img_advantages}>
                {serviceDetailsData?.advantages.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Image
                        priority
                        layout="intrinsic"
                        height={48.0791}
                        width={48.0791}
                        className={style.adv_img}
                        src={item?.image?.data?.attributes?.url}
                        alt={item?.title}
                      />
                      <div className={style.adv_desc}>{item?.title}</div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={`${style.desc_learn_more_btn}`}>
                <Buttons
                  variant="secondary"
                  name={serviceDetailsData?.button?.title}
                  url={serviceDetailsData?.button?.url}
                />
              </div>
            </Col>
            <Col
              md={5}
              sm={12}
              className={
                "d-block d-sm-block d-md-none d-xl-none " +
                style.desc_driven_img
              }
            >
              <div data-aos="fade-up">
                <Image
                  // priority
                  // placeholder="blur"
                  // blurDataURL={serviceDetailsData?.image?.data?.attributes?.url}
                  layout="responsive"
                  height={377}
                  width={617}
                  src={serviceDetailsData?.image?.data?.attributes?.url}
                  alt={
                    serviceDetailsData?.image?.data?.attributes?.alternativeText
                  }
                />
              </div>
            </Col>
            <Col className="d-md-none d-xl-none">
              <div className={style.img_advantages}>
                {serviceDetailsData?.advantages.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Image
                        priority
                        layout="intrinsic"
                        height={48.0791}
                        width={48.0791}
                        className={style.adv_img}
                        src={item?.image?.data?.attributes?.url}
                        alt={item?.title}
                      />
                      <div className={style.adv_desc}>{item?.title}</div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={`${style.desc_learn_more_btn}`}>
                <Buttons
                  variant="secondary"
                  name={serviceDetailsData?.button?.title}
                  url={serviceDetailsData?.button?.url}
                />
              </div>
              {/* <div
              className={`${style.desc_learn_more_btn} ${style.btn_content}`}
            >
              {serviceDetailsData?.button?.title}
            </div> */}
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default ServiceDetailsComponent;
