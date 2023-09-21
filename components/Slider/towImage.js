import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import style from "./twoImage.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const TwoImage = ({ images, variant, background, slugLink, mb }) => {
  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        setSettings({
          ...settings,
          slidesToShow: window.innerWidth > 767 ? 2 : 1,
          slidesToScroll: window.innerWidth > 767 ? 2 : 1,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });

  return (
    <>
      {(variant === "primary" || variant === "services__imageslider") && (
        <div
          className={
            variant && variant === "services__imageslider"
              ? style.twoImageContent +
                " " +
                "twoImageContent" +
                " " +
                style.service_image_container
              : style.twoImageContent + " " + "twoImageContent"
          }
        >
          {/* <div className={style.twoImageContent + " " + "twoImageContent"}> */}

          <Container className={style.title_container}>
            <div className={style.case_study_title}>{images?.title}</div>
          </Container>

          <Container className={style.TwoImageContainer}>
            <Row className={"rowContainer"} style={{ margin: "0" }}>
              <Slider {...settings}>
                {images?.case_study_image?.map((image, index) => {
                  return (
                    <Col
                      lg={6}
                      md={4}
                      sm={6}
                      className={style.imageBox}
                      key={index}
                    >
                      <a
                        href={image?.link_url}
                        data-toggle="tooltip"
                        title={image?.tooltip}
                        id={image?.link_id}
                        tabIndex="-1"
                      >
                        <Image
                          // priority
                          // placeholder="blur"
                          // blurDataURL={image?.image?.data?.attributes?.url}
                          src={image?.image?.data?.attributes?.url}
                          width="38.904694167852064VW"
                          height="21.906116642958747VW"
                          layout="responsive"
                          objectFit="cover"
                          position="relative"
                          alt={image?.tooltip}
                          className={style.twoSliderImage}
                        />
                        {/* responsiveness of the text wrapper over the image have to be done */}
                        <div className={style.img_desktop_title_wrapper}>
                          <div className={style.img_desktop_title}>
                            {image?.title}
                          </div>
                        </div>
                      </a>
                    </Col>
                  );
                })}
              </Slider>
            </Row>
          </Container>
        </div>
      )}
      {variant === "resources_slider_primary" && (
        <div
          className={style.resources__twoImageContent + " " + "twoImageContent"}
        >
          <Container className={style.title_container}>
            <div className={style.resources__case_study_title}>
              {images?.title}
            </div>
          </Container>

          <Container className={style.TwoImageContainer}>
            <Row className={"rowContainer"} style={{ margin: "0" }}>
              <Slider {...settings}>
                {images?.case_study_image?.map((image, index) => {
                  return (
                    <Col
                      lg={6}
                      md={4}
                      sm={6}
                      className={style.imageBox}
                      key={index}
                    >
                      <a
                        href={`/${image?.attributes?.type}/${image?.attributes?.slug}/`}
                        data-toggle="tooltip"
                        title={image?.attributes?.title}
                        tabIndex="-1"
                      >
                        <Image
                          priority
                          src={image?.attributes?.image?.data?.attributes?.url}
                          width="38.904694167852064VW"
                          height="21.906116642958747VW"
                          layout="responsive"
                          objectFit="cover"
                          position="relative"
                          alt={image?.image?.data?.attributes?.name}
                          className={style.twoSliderImage}
                        />
                        {/* responsiveness of the text wrapper over the image have to be done */}
                        <div className={style.img_desktop_title_wrapper}>
                          <div className={style.img_desktop_title}>
                            {image?.attributes?.title}
                          </div>
                        </div>
                      </a>
                    </Col>
                  );
                })}
              </Slider>
            </Row>
          </Container>
        </div>
      )}
      {variant === "secondary" && (
        <div
          className={
            background === "none"
              ? style.secondary__other__twoImageContent +
                " " +
                "secondary__twoImageContent"
              : style.secondary__twoImageContent +
                " " +
                "secondary__twoImageContent"
          }
        >
          {/* <div className={style.twoImageContent + " " + "twoImageContent"}> */}
          {background === "none" ? (
            " "
          ) : (
            <Container className={style.title_container}>
              <div className={style.case_study_title_secondary}>
                {images?.title}
              </div>
            </Container>
          )}

          <Container className={style.TwoImageContainer}>
            <Row className={"rowContainer"} style={{ margin: "0" }}>
              <Slider {...settings}>
                {images?.case_study_image?.map((image, index) => {
                  return (
                    <Col
                      lg={6}
                      md={4}
                      sm={6}
                      className={style.imageBox}
                      key={index}
                    >
                      <a
                        href={image?.link_url}
                        data-toggle="tooltip"
                        title={image?.tooltip}
                        id={image?.link_id}
                        tabIndex="-1"
                      >
                        <Image
                          priority
                          src={image?.image?.data?.attributes?.url}
                          width="38.904694167852064VW"
                          height="21.906116642958747VW"
                          layout="responsive"
                          objectFit="cover"
                          position="relative"
                          alt={image?.tooltip}
                          className={style.twoSliderImage}
                        />
                        {/* responsiveness of the text wrapper over the image have to be done */}
                        <div className={style.img_desktop_title_wrapper}>
                          <div className={style.img_desktop_title}>
                            {image?.title}
                          </div>
                        </div>
                      </a>
                    </Col>
                  );
                })}
              </Slider>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
export default TwoImage;
