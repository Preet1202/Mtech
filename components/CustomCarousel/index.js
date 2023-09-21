import React, { useEffect, useState } from "react";
import style from "./customcarousel.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../Button";

const CustomCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoPlay] = useState(true);

  let timeOut = null;

  const images = props?.sliderData;

  const slideRight = () => {
    setCurrent(current === images?.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? images?.length - 1 : current - 1);
  };

  useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        slideRight();
      }, 2500);

    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    <>
      {props.variant === "main" && (
        <Container
          className={style.maindiv}
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          {props?.sliderData?.map((data, index) => {
            return (
              <Row
                key={index}
                className={
                  index === current
                    ? [style.carousel, style.carousel_active].join(" ")
                    : style.carousel
                }
              >
                <Col className={style.leftdiv} md={6} sm={12}>
                  <div className={style.title}>{data?.title}</div>
                  {/* <div className={style.desc}>
                    {" "}
                    {data?.title !==
                      "Bring ideas to life. Get a FREE consultation." &&
                      data?.title !== "WotNot - Chatbot Platform" &&
                      data?.description}
                    {data?.title ==
                      "Bring ideas to life. Get a FREE consultation." && (
                      <>
                        {data?.description?.substr(0, 110)}
                        <br />
                        <br />
                        {data?.description?.substr(
                          110,
                          data?.description?.length
                        )}
                      </>
                    )}
                    {data?.title == "WotNot - Chatbot Platform" && (
                      <>
                        {data?.description?.substr(0, 116)}
                        <br />
                        <br />
                        {data?.description?.substr(
                          116,
                          data?.description?.length
                        )}
                      </>
                    )}
                  </div> */}
                  <div
                    className={style.desc}
                    dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}
                  ></div>

                  <div className={style.herosection_button}>
                    {data?.button && (
                      <Buttons
                        variant={
                          props.page === "product_page"
                            ? "secondary_animated"
                            : "secondary"
                        }
                        name={data?.button?.title}
                        url={data?.button?.url}
                        id={data?.button?.button_id}
                        url_type={data?.button?.url_type}
                        page={props?.page}
                        reference={props?.reference}
                        mobileref={props?.mobileref}
                      />
                    )}
                  </div>
                </Col>
                <Col className={style.imgdiv} md={6} sm={12}>
                  <Image
                    priority={true}
                    placeholder="blur"
                    blurDataURL={data?.image?.data?.attributes?.url}
                    src={data?.image?.data?.attributes?.url}
                    layout="responsive"
                    width="630px"
                    height="410px"
                    objectFit="contain"
                    alt={data?.image_alt_text}
                  />
                </Col>
              </Row>
            );
          })}
          <div className={style.carousel_arrow_left} onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className={style.carousel_arrow_right} onClick={slideRight}>
            &rsaquo;
          </div>
          <div className={style.carousel_pagination}>
            {props?.sliderData?.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={
                    index === current
                      ? [
                          style.pagination_dot,
                          style.pagination_dot_active,
                        ].join(" ")
                      : style.pagination_dot
                  }
                ></div>
              );
            })}
          </div>
        </Container>
      )}
      {props.variant === "singlepage" && (
        <Container fluid className="mt-4 mb-5 oneImageText">
          {props?.sliderData?.map((data, index) => {
            return (
              <Container style={{ color: "black" }} key={data?.id}>
                <Row className={style.row_contain}>
                  <Col lg={6} md={6} className={style.textdiv}>
                    <h1
                      className={
                        props.textAlign === "center"
                          ? style.title__center
                          : props.textPosition === "textPosition"
                          ? style.textPosition
                          : props.page === "product_page"
                          ? style.productPage_heading
                          : style.title
                      }
                    >
                      {data?.title}
                    </h1>
                    <div className={style.desccontainer}>
                      {props?.richtext ? (
                        <div
                          className={
                            props.textAlign === "center"
                              ? `${style.careerPage_desc} ${style.desc}`
                              : style.desc
                          }
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        ></div>
                      ) : (
                        <div
                          className={
                            props.textAlign === "center"
                              ? `${style.careerPage_desc} ${style.desc}`
                              : style.desc
                          }
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        >
                          {/* {data?.description} */}
                        </div>
                      )}

                      <div className={style.herosection_button}>
                        {data?.button && (
                          <Buttons
                            variant={
                              props.page === "product_page"
                                ? "secondary_animated"
                                : "secondary"
                            }
                            name={data?.button?.title}
                            url={data?.button?.url}
                            id={data?.button?.button_id}
                            url_type={data?.button?.url_type}
                            page={props?.page}
                            reference={props?.reference}
                            mobileref={props?.mobileref}
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div
                      className={
                        props.productName !== "alertly"
                          ? style.productPage_image
                          : props.productName === "alertly"
                          ? style.productPage_image_alertly
                          : style.imgdiv
                      }
                    >
                      <Image
                        priority={true}
                        placeholder="blur"
                        blurDataURL={data?.image?.data?.attributes?.url}
                        src={data?.image?.data?.attributes?.url}
                        layout="responsive"
                        width="630px"
                        height="410px"
                        objectFit="contain"
                        alt={data?.image_alt_text}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Container>
      )}
      {props.variant === "careerpage" && (
        <Container fluid>
          {props?.sliderData?.map((data, index) => {
            return (
              <Container key={data?.id}>
                <Row className={style.career__row} style={{ margin: "0px" }}>
                  <Col
                    md={{ span: 6, order: 1 }}
                    sm={{ span: 12, order: 2 }}
                    xs={{ span: 12, order: 2 }}
                    className={style.career__title}
                    style={{ paddingLeft: "16px", paddingRight: "16px" }}
                  >
                    <h2>{data?.title}</h2>
                    <div
                      className={style.desc}
                      dangerouslySetInnerHTML={{
                        __html: data?.description,
                      }}
                      style={{ color: props?.descColor }}
                    ></div>
                    <div className={style.herosection_button}>
                      {data?.button && (
                        <Buttons
                          variant={
                            props.page === "product_page"
                              ? "secondary_animated"
                              : "secondary"
                          }
                          name={data?.button?.title}
                          url={data?.button?.url}
                          id={data?.button?.button_id}
                          url_type={data?.button?.url_type}
                          page={props?.page}
                          reference={props?.reference}
                          mobileref={props?.mobileref}
                        />
                      )}
                    </div>
                  </Col>
                  <Col
                    md={{ span: 6, order: 2 }}
                    sm={{ span: 12, order: 1 }}
                    xs={{ span: 12, order: 1 }}
                    className={style.career__img}
                  >
                    <div>
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        height={354}
                        width={208}
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Container>
      )}
      {props.variant === "homepage_single" && (
        <Container fluid>
          <Container>
            <div className={style.homepage__row}>
              <div className={style.homepage__bannertext}>
                <h2>{props?.sliderData?.title}</h2>
                <div
                  className={style.homepage__desc}
                  dangerouslySetInnerHTML={{
                    __html: props?.sliderData?.description,
                  }}
                ></div>
                <div className={style.herosection_button}>
                  <Buttons
                    variant={"secondary_animated"}
                    name={props?.sliderData?.button.title}
                    url={props?.sliderData?.button.url}
                    id={props?.sliderData?.button.button_id}
                    url_type={props?.sliderData?.button.url_type}
                    page={props?.page}
                    reference={props?.reference}
                    mobileref={props?.mobileref}
                  />
                </div>
              </div>
              {props?.sliderData?.image?.data && (
                <div className={style.homeimg__div}>
                  <Image
                    priority
                    src={props?.sliderData?.image?.data?.attributes?.url}
                    height={354}
                    width={600}
                    alt={
                      props?.sliderData?.image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </div>
              )}
            </div>
          </Container>
        </Container>
      )}
    </>
  );
};

export default CustomCarousel;
