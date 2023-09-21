import React, { useEffect } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { Col, Container, Row } from "react-bootstrap"
import style from "./threeImage.module.scss"

const ThreeImage = ({
  images,
  imageData,
  background,
  testimonial,
  workplace,
  variant,
  type,
  color,
  mb
}) => {
  // env file

  useEffect(() => {
    // to render widget slider on service page load
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.CLUTCHCO) {
        window.CLUTCHCO.Init()
      }
    }
  }, [])

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "230px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // lazyLoad: "ondemand",
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "749px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 2300,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "429px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 2000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "429px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 1800,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "230px",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          lazyLoad: "ondemand",
          arrows: false
        }
      },

      {
        breakpoint: 1024,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: "180px",
          // slidesToShow: 1,
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          speed: 500,
          centerMode: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "130px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 340,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1
          // dots: false,
        }
      }
    ]
  }
  const textsettings = {
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,

    centerMode: true,

    autoplay: true,
    autoplaySpeed: 20000,
    // lazyLoad: "ondemand",
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 2300,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 2000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          cssEase: "linear",
          // autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 1800,
        settings: {
          dots: true,
          // cssEase: "linear",
          infinite: true,
          // speed: 500,
          slidesToShow: 1,
          centerMode: true,

          // autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          // speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },

      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: true,
          // speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 20000,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 767,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          // speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 20000,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 450,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          // speed: 500,
          autoplaySpeed: 20000,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 340,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          // speed: 500,
          autoplaySpeed: 20000,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px"
          // autoplay: true,
        }
      }
    ]
  }
  const clutchsettings = {
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,

    centerMode: true,

    // autoplay: true,
    autoplaySpeed: 2000,

    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 2000,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 2300,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 2000,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 2000,
        settings: {
          dots: true,

          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          cssEase: "linear",
          // autoplay: true,
          autoplaySpeed: 500,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 1800,
        settings: {
          dots: true,
          // cssEase: "linear",
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          // autoplay: true,
          autoplaySpeed: 2000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          // autoplay: true,
          autoplaySpeed: 2000,
          // lazyLoad: "ondemand",
          arrows: false
        }
      },

      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          // autoplay: true,
          autoplaySpeed: 2000,
          // lazyLoad: "ondemand",
          arrows: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 767,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          autoplay: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 340,
        settings: {
          fade: true,
          cssEase: "linear",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          centerPadding: "0px"
        }
      }
    ]
  }
  const clutchthreeimagesettings = {
    centerMode: true,
    centerPadding: "155px",
    slidesToShow: 2.1,
    dots: true,
    infinite: true,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "140px",
          slidesToShow: 2.1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20",
          slidesToShow: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30",
          slidesToShow: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "-30",
          slidesToShow: 1.8,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1500
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1500
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 1500,
          // slidesToShow: 0.1,
          dots: true
        }
      }
    ]
  }

  return (
    <>
      {variant === "text" ? (
        <Container
          fluid
          className={
            color === "red-violet"
              ? style.testimonial__redviolet
              : color === "white-violet"
              ? style.testimonial__whiteviolet
              : style.testimonial__text
          }
          style={{ marginBottom: mb }}
        >
          <h2
            className={style.testimonial__title}
            style={{ color: color === "violet" ? "#FFFFFF" : "#000000" }}
          >
            Employee Testimonials
          </h2>
          <Slider {...textsettings} className="testimonial__text__slider">
            {testimonial.map(data => {
              return (
                <React.Fragment key={data?.id}>
                  {type === "textnoimage" ? (
                    <div
                      style={{
                        maxWidth: "500px",
                        margin: "0 auto"
                      }}
                    >
                      <div
                        className={style.slider__text}
                        style={{ borderRadius: "10px" }}
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      ></div>
                    </div>
                  ) : (
                    <>
                      <div
                        className={[
                          style.testimonial__text__slider__div,
                          "d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
                        ].join(" ")}
                      >
                        <div className={style.text__slider__img}>
                          <Image
                            src={data?.image?.data?.attributes?.url}
                            priority
                            height={350}
                            width={250}
                            layout="fixed"
                          />
                        </div>

                        <div
                          className={style.slider__text}
                          dangerouslySetInnerHTML={{
                            __html: data?.description
                          }}
                        ></div>
                      </div>

                      {/* mobile version for text testimonial slider service page */}
                      <div
                        className={[
                          style.sm__text,
                          "d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
                        ].join(" ")}
                      >
                        <div className={style.text__slider__img__sm}>
                          <Image
                            src={data?.image?.data?.attributes?.url}
                            priority
                            // height={data.image.data.attributes.height}
                            // width={data.image.data.attributes.width}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>

                        <div
                          className={style.slider__text__sm}
                          dangerouslySetInnerHTML={{
                            __html: data?.description
                          }}
                        ></div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              )
            })}
          </Slider>
        </Container>
      ) : variant === "clutch-widget" ? (
        <Container
          fluid
          className={
            color === "violet" ? style.clutch__violet : style.clutch__white
          }
          style={{ background: color === "orange" ? "#F05443" : "" }}
        >
          <Container>
            <div
              className={style.clutch__title}
              style={{
                color:
                  color === "violet"
                    ? "#FFFFFF"
                    : color === "orange"
                    ? "#FFFFFF"
                    : "#262531"
              }}
            >
              {workplace?.title}
            </div>
            {workplace?.description && (
              <div
                className={style.clutch__desc}
                style={{ color: color === "violet" ? "#FFFFFF" : "#262531" }}
              ></div>
            )}

            {type !== "threeimage" ? (
              <Slider
                {...clutchsettings}
                className={
                  color === "violet"
                    ? "clutch__violet__slider"
                    : "clutch__white__slider"
                }
              >
                {workplace?.image?.map(data => {
                  return (
                    <React.Fragment key={data?.id}>
                      <div className={style.clutchimg__div} dir="rtl">
                        <Image
                          priority
                          src={data?.image_file?.data?.attributes?.url}
                          width="966px"
                          height="704px"
                          alt={
                            data?.image_file?.data?.attributes?.alternativeText
                          }
                          // layout="responsive"
                          // objectFit="cover"
                        />
                      </div>
                    </React.Fragment>
                  )
                })}
              </Slider>
            ) : (
              <Slider
                {...clutchthreeimagesettings}
                className={
                  color === "violet"
                    ? "clutch__violet__slider"
                    : "clutch__orange__slider"
                }
              >
                {workplace?.image?.map(data => {
                  return (
                    <React.Fragment key={data?.id}>
                      <div
                        className={style.clutchimg__div__threeimage}
                        dir="rtl"
                      >
                        <Image
                          priority
                          src={data?.image_file?.data?.attributes?.url}
                          width="405px"
                          height="505px"
                          alt={
                            data?.image_file?.data?.attributes?.alternativeText
                          }
                          layout="intrinsic"
                          // objectFit="contain"
                          // layout="responsive"
                          // objectFit="cover"
                        />
                      </div>
                    </React.Fragment>
                  )
                })}
              </Slider>
            )}
          </Container>
        </Container>
      ) : variant === "clutch_webwidget" ? (
        <Container
          fluid
          className={
            color === "violet" ? style.clutch__violet : style.clutch__white
          }
        >
          <Container>
            <div
              className={style.clutch__title}
              style={{
                color:
                  color === "violet"
                    ? "#FFFFFF"
                    : color === "orange"
                    ? "#FFFFFF"
                    : "#262531"
              }}
            >
              {workplace?.title}
            </div>
            <div className="clutchslider__widget">
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="4"
                data-height="auto"
                data-nofollow="true"
                data-expandifr="true"
                data-reviews="1981964,1972258,1971984,1955165,1837187"
                data-clutchcompany-id="214416"
              ></div>
            </div>
          </Container>
        </Container>
      ) : (
        <div
          className={
            background === "red" ? "red_threeimageslider" : "threeimageslider"
          }
        >
          <Container
            fluid
            className={background === "red" ? style.red_container : ""}
          >
            <Row className={"rowContainer " + style.threerow}>
              <Col md={12} style={{ padding: "0px" }}>
                <div
                  className={
                    background === "red"
                      ? style.red_threeimageslider__title
                      : style.threeimageslider__title
                  }
                >
                  {imageData?.subtitle}
                </div>
                <div
                  className={
                    background === "red"
                      ? style.red_threeimageslider__desc
                      : style.threeimageslider__desc
                  }
                >
                  {imageData?.subdescription}
                </div>

                <Slider {...settings}>
                  {imageData?.image?.length > 0 &&
                    imageData?.image?.map(image => {
                      return (
                        <div className={style.imageBox} key={image.id}>
                          <Image
                            priority={true}
                            // src={URL + image?.attributes?.url}
                            src={image?.image_file?.data?.attributes?.url}
                            width={1022}
                            height={600}
                            layout="responsive"
                            objectFit="cover"
                            position="relative"
                            alt={image?.image_alt_text}
                          />
                        </div>
                      )
                    })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}

export default ThreeImage
