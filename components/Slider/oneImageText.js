import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./oneImageText.module.scss";
import Buttons from "../Button";
import readingTime from "reading-time";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FormatDate } from "../../common/Helper";

const OneImageText = (props) => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const estimateTime = (blogcontent) => {
    const WPM = 240;

    const entiredata = blogcontent?.map((d) => {
      return readingTime(d.description);
    });

    let totalwords = 0;
    for (let i of entiredata) {
      totalwords = totalwords + Number(i.words);
    }
    const time = Math.ceil(totalwords / WPM);

    return time;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };
  const [clutchsettings, setclutchsettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const [settingsUseCases, setSettingsUseCases] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    lazyLoad: "ondemand",
    arrows: false,
    // centerMode: false,
    // centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "180px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  });
  const [blogDetailsSettings, setBlogDetailsSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    lazyLoad: "ondemand",
    arrows: false,
    centerMode: true,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "10px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
        // settings: {
        //   dots: false,
        //   slidesToShow: 2,
        //   slidesToScroll: 2,
        //   centerMode: true,
        //   centerPadding: "10px",
        //   adaptiveHeight: true,
        // },
      },
      {
        breakpoint: 768,
        settings: "unslick",
        // settings: {
        //   dots: false,
        //   slidesToShow: 2,
        //   slidesToScroll: 2,
        //   centerMode: true,
        //   centerPadding: "60px",
        //   adaptiveHeight: true,
        // },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "100px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          adaptiveHeight: true,
        },
      },
    ],
  });

  const [homePublicationSettings, setHomePublicationSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "ondemand",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          adaptiveHeight: true,
        },
      },
    ],
  });

  const clutch = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      {props.variant === "aboutus" && (
        <Container fluid className="mt-4  oneImageText">
          <OwlCarousel
            className="owl-theme"
            loop={props?.loop === "loop" ? true : false}
            items={1}
            mouseDrag={props?.mouseDrag === "true" ? true : false}
            margin={10}
            nav={false}
            autoPlay={true}
            autoplayTimeout={2000}
            autoplaySpeed={2000}
            autoplayHoverPause={false}
          >
            {props?.sliderData?.map((data) => {
              return (
                <div key={data?.id}>
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
                          <div
                            className={
                              props.textAlign === "center"
                                ? `${style.careerPage_desc} ${style.desc}`
                                : style.desc
                            }
                          >
                            {data?.title !== "" && data?.description}
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} className={style.imgdiv}>
                        <Image
                          priority
                          src={data?.image?.data?.attributes?.url}
                          layout="responsive"
                          width="630px"
                          height="410px"
                          objectFit="contain"
                          alt={data?.image_alt_text}
                        ></Image>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
      )}
      {props.variant === "primary" && (
        <Container fluid className="mt-4 mb-5 oneImageText">
          <OwlCarousel
            className="owl-theme"
            loop={props?.loop === "loop" ? true : false}
            items={1}
            mouseDrag={props?.mouseDrag === "true" ? true : false}
            margin={10}
            nav={false}
            autoPlay={true}
            autoplayTimeout={2000}
            autoplaySpeed={2000}
            autoplayHoverPause={false}
          >
            {props?.sliderData?.map((data) => {
              return (
                <div key={data?.id}>
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
                          <div
                            className={
                              props.textAlign === "center"
                                ? `${style.careerPage_desc} ${style.desc}`
                                : style.desc
                            }
                          >
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
                          </div>
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
                            src={data?.image?.data?.attributes?.url}
                            layout="responsive"
                            width="630px"
                            height="410px"
                            objectFit="contain"
                            alt={data?.image_alt_text}
                          ></Image>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </OwlCarousel>
          {/* <Slider {...settings}>
            {props?.sliderData?.map((data) => {
              return (
                <div key={data?.id}>
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
                          <div
                            className={
                              props.textAlign === "center"
                                ? `${style.careerPage_desc} ${style.desc}`
                                : style.desc
                            }
                          >
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
                          </div>
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
                      <Col lg={6} md={6} className={style.imgdiv}>
                        <Image
                          priority
                          // src={URL + data?.image?.data?.attributes?.url}
                          src={data?.image?.data?.attributes?.url}
                          // placeholder="blur"
                          // blurDataURL={data?.image?.data?.attributes?.url}
                          layout="responsive"
                          width="630px"
                          height="410px"
                          objectFit="contain"
                          alt={data?.image_alt_text}
                        ></Image>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </Slider> */}
        </Container>
      )}
      {props.variant === "secondary" && (
        <Container className="mt-5 mb-5 use-cases-slider">
          <div className={style.usecase_header}>
            <div className={style.use_case_title}>
              {props?.sliderData?.title}
            </div>
            <div className={style.use_case_description}>
              {props?.sliderData?.description}
            </div>
          </div>
          <Slider {...settingsUseCases}>
            {props?.sliderData?.use_cases_image?.map((data, index) => {
              return (
                <div key={data?.id}>
                  <>
                    <Row className={style.row_contain}>
                      <Row className={style.text_image_container}>
                        <Col lg={6} md={6} sm={12} className={style.textdiv}>
                          <div
                            className={
                              style.textdiv_part1 +
                              " " +
                              style.description_title
                            }
                          >
                            {data?.title}
                          </div>
                          <div className={style.hr_line}></div>
                          <div
                            className={
                              style.textdiv_part1 +
                              " " +
                              style.description_wrapper
                            }
                          >
                            {data?.description
                              ?.split(".")
                              ?.map((desc, index) => {
                                if (desc === "") return;
                                return (
                                  <React.Fragment key={index}>
                                    <>
                                      <div>{`${desc}.`}</div>
                                      <br />
                                    </>
                                  </React.Fragment>
                                );
                              })}
                            <Link href={data?.link_url} passHref>
                              <a
                                href="data?.link_url"
                                style={{ width: "120px", display: "block" }}
                              >
                                <div className={style.secondary__icon}>
                                  <span>
                                    Know more{" "}
                                    <img
                                      className={style.arrow_right}
                                      src="https://cdn-gcp.new.marutitech.com/know_more_red_arrow_2022_3b9886c436.svg"
                                      alt="red-arrow"
                                    />
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </Col>
                        <Col
                          lg={6}
                          md={6}
                          sm={12}
                          className={style.usecase_imgdiv}
                        >
                          <Image
                            priority={true}
                            src={data?.image?.data?.attributes?.url}
                            layout="responsive"
                            width="508"
                            height="397"
                            objectFit="contain"
                            alt={data?.title}
                          ></Image>
                        </Col>
                      </Row>
                    </Row>
                  </>
                </div>
              );
            })}
          </Slider>
        </Container>
      )}
      {props.variant === "blog-detail-slider" && (
        <>
          <Container
            className={
              "d-none d-sm-none d-md-flex d-lg-flex d-xl-flex " +
              style.desktop_blog_detail_testimonial
            }
          >
            {props?.suggestions.map((suggestionData, index) => {
              return (
                <div className="mt-1 mb-2" key={index}>
                  <a
                    href={`/${suggestionData?.attributes?.slug}/`}
                    target="_blank"
                    key={index}
                  >
                    <div title={suggestionData?.attributes?.title}>
                      <Row className={style.desktop_blog_detail_row_contain}>
                        <Col className={style.blog_detail_wrapper}>
                          <Col className={style.blog_detail__box}>
                            <Image
                              priority={true}
                              height={150}
                              width={275}
                              className={style.blog_detail__image}
                              layout="responsive"
                              objectFit="fill"
                              alt="card1"
                              src={
                                suggestionData?.attributes?.image?.data
                                  ?.attributes?.url
                              }
                            />
                            <p className={style.blog_sub_heading}>
                              {suggestionData?.attributes?.type} -{" "}
                              {estimateTime(
                                suggestionData?.attributes?.content
                              )}{" "}
                              MIN READ
                            </p>
                            <p className={style.blog_header}>
                              {suggestionData?.attributes?.title}
                            </p>
                            <div
                              className={style.blog_desc}
                              dangerouslySetInnerHTML={{
                                __html:
                                  // [
                                  //   "ebook",
                                  //   "case study",
                                  //   "white paper",
                                  //   "",
                                  // ].indexOf(
                                  //   suggestionData?.attributes?.type?.toLowerCase()
                                  // ) < 0 &&
                                  suggestionData?.attributes?.description,
                              }}
                            />
                            {suggestionData?.attributes?.authors?.data.map(
                              (author) => {
                                return (
                                  <div className={style.bolg_writer}>
                                    <Image
                                      priority={true}
                                      src={
                                        author?.attributes?.image?.data[0]
                                          ?.attributes?.url
                                      }
                                      alt="blog-writer"
                                      height={25}
                                      width={25}
                                      layout="fixed"
                                      className={style.blog_writer_image}
                                    />
                                    <div className={style.blogger_contents}>
                                      <div className={style.blog_writer_name}>
                                        {author?.attributes?.name}
                                      </div>
                                      <div
                                        className={
                                          style.blog_writer_designation
                                        }
                                      >
                                        {author?.attributes?.designation}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </a>
                </div>
              );
            })}
          </Container>
          <div
            className={
              style.mobile_blog_detail_testimonial +
              " d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
            }
          >
            {props?.suggestions.map((data, index) => {
              return (
                <a
                  href={`/${data?.attributes?.slug}/`}
                  target="_blank"
                  key={index}
                >
                  <div title={data?.attributes?.title}>
                    <Row className={style.row_contain}>
                      <Col className={style.blog_detail_wrapper}>
                        <Col className={style.blog_detail__box}>
                          <Image
                            priority={true}
                            height="157.78px"
                            width="292.02px"
                            className={style.blog_detail__image}
                            layout="responsive"
                            alt="card1"
                            src={data?.attributes?.image?.data?.attributes?.url}
                          />
                          <div className={style.blog_sub_heading}>
                            {data?.attributes?.type} -{" "}
                            {estimateTime(data?.attributes?.content)} MIN READ
                          </div>
                          <div className={style.blog_header}>
                            {data?.attributes?.title}
                          </div>
                          <div
                            className={style.blog_desc}
                            dangerouslySetInnerHTML={{
                              __html:
                                // [
                                //   "ebook",
                                //   "case study",
                                //   "white paper",
                                //   "",
                                // ].indexOf(
                                //   data?.attributes?.type?.toLowerCase()
                                // ) < 0 &&
                                data?.attributes?.description,
                            }}
                          />

                          {data?.attributes?.authors?.data.map((author) => {
                            return (
                              <div className={style.bolg_writer}>
                                <Image
                                  priority={true}
                                  src={
                                    author?.attributes?.image?.data[0]
                                      ?.attributes?.url
                                  }
                                  alt="blog-writer"
                                  height={25}
                                  width={25}
                                  layout="fixed"
                                  className={style.blog_writer_image}
                                />
                                <div className={style.blogger_contents}>
                                  <div className={style.blog_writer_name}>
                                    {author?.attributes?.name}
                                  </div>
                                  <div
                                    className={style.blog_writer_designation}
                                  >
                                    {author?.attributes?.designation}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Col>
                      </Col>
                    </Row>
                  </div>
                </a>
              );
            })}
          </div>
        </>
      )}
      {props.variant === "clutch-widget" && (
        <Container>
          <h2>{props.clutchwidget.title}</h2>
          <OwlCarousel
            className="owl-theme"
            items={1}
            mouseDrag={props?.mouseDrag === "true" ? true : false}
            margin={10}
            nav={false}
            autoPlay={true}
            autoplayTimeout={2000}
            autoplaySpeed={2000}
            autoplayHoverPause={true}
          >
            {props.clutchwidget.image.map((image, index) => {
              return (
                <Row className={style.row_contain} key={index}>
                  <Col>
                    <Image
                      priority
                      src={image?.image_file?.data?.attributes?.url}
                      layout="responsive"
                      width="630px"
                      height="410px"
                      objectFit="contain"
                    />
                  </Col>
                </Row>
              );
            })}
          </OwlCarousel>
        </Container>
      )}
      {props.variant === "homepage-publications" && (
        <>
          <div
            style={{ width: props?.sliderWidth ? props?.sliderWidth : "300px" }}
          >
            <Container className={style.homepage_publications_slider}>
              <Slider {...homePublicationSettings}>
                {props?.mobileBlogData?.map((data) => {
                  return (
                    <div key={data?.id}>
                      <div className={style.slider_item_box}>
                        {data?.attributes?.heroSection_image?.data
                          ?.attributes && (
                          <Image
                            priority={true}
                            src={
                              data?.attributes?.heroSection_image?.data
                                ?.attributes?.url
                            }
                            layout="responsive"
                            width="350"
                            height="200"
                            objectFit="cover"
                            alt={
                              data?.attributes?.heroSection_image?.data
                                ?.attributes?.alternativeText
                            }
                          ></Image>
                        )}
                        <div className={style.item_text_box}>
                          <h6>
                            {
                              data?.attributes?.authors?.data[0]?.attributes
                                ?.name
                            }{" "}
                            • {FormatDate(data?.attributes?.createdAt)}
                          </h6>
                          <h3 className={style.item_details_title}>
                            {data?.attributes?.title}
                          </h3>
                          <Link
                            href={`/blog/${data?.attributes?.slug}/`}
                            passHref
                          >
                            <div className={style.read_more_box}>
                              <div className={style.read_more_text}>
                                Read More
                              </div>{" "}
                              <div className={style.arrow_right}>
                                <Image
                                  src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                                  height="12px"
                                  width="17px"
                                  alt="Read More"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Container>
          </div>
          {props?.publication?.button?.url && (
            <div className={style.homepub__mobslider__btn}>
              <Buttons
                variant={"secondary_animated"}
                name={props?.publication?.button?.title}
                url={props?.publication?.button.url}
                id={props?.publication?.button.button_id}
                url_type={props?.publication?.button.url_type}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default OneImageText;
