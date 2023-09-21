import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { addMultiClasses } from "../../common/common";
import Buttons from "../Button";
import Image from "next/image";
import style from "./banner.module.scss";

function Banner(props) {
  // getting speaker name for testimonial slider variant yellow
  const variantClass =
    props.color == "white"
      ? style.section_white
      : props.color == "orange"
      ? style.section_orange
      : style.section_Violet;

  const words = props?.ctabutton?.description.split("-");
  const ai_class = props?.del == "AI" ? style.description__ai : "";
  const mainContainer =
    props?.del == "AI" ? style.deliverables__maincontainer : "";

  const ForVioletBanner =
    props?.ForVioletBanner == true ? style.ForVioletBanner : "";
  const ForBottomBannerButon =
    props?.ForBottomBannerButon == true ? style.ForBottomBannerButon : "";

  const ForpythonCTA = props?.ForpythonCTA == true ? style.ForpythonCTA : "";

  const RemovePaddingTop =
    props?.RemovePaddingTop == true ? style.RemovePaddingTop : "";
  return (
    <>
      {props.variant === "primary" && (
        <Container
          fluid
          className={style.banner__primary}
          style={{
            marginBottom: `${props.mb}`,
            marginTop: `${props.mt}`,
          }}
        >
          <Container>
            <Col className={style.banner__div}>
              <div className={style.banner__title}>
                {props?.bannerData?.title}
              </div>
              <div className={style.banner__desc}>
                <p>{props?.bannerData?.description}</p>
              </div>
              {props?.bannerData?.description_secondary ? (
                <div className={style.banner__desc__secondary}>
                  <p>{props?.bannerData?.description_secondary}</p>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Container>
          {/* <div className={style.banner_image_div}>
            <Image
              priority={true}
              src="https://cdn-gcp.new.marutitech.com/background/bannerbackground1.png"
              alt="Background image"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </Container>
      )}
      {props.variant === "secondary" && (
        <Container fluid className={style.banner__secondary}>
          <Container>
            {/* <Col className={style.banner__secondary__title}> */}
            <h1 className={style.banner__secondary__title}>
              {props?.bannerData?.title}
            </h1>
            {/* </Col> */}
          </Container>
        </Container>
      )}
      {props.variant === "blog_primary" && (
        <Container fluid className={style.banner__blog}>
          <div className={style.resources_back_link} style={{ zIndex: "10" }}>
            <a href={props.linkBackTo} className={style.back_link}>
              <img
                className={style.arrow}
                src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                alt="red-arrow"
              />{" "}
              &nbsp; &nbsp;{" "}
              <span className={style.back_to_resources_text}>
                Back to Resources
              </span>
            </a>
          </div>
          <Container>
            <Col className={style.banner__blog__title}>
              <h1 className={style.banner_title}>{props?.bannerData?.title}</h1>
            </Col>
          </Container>
        </Container>
      )}
      {props.variant === "secondary_with_button" && (
        <Container fluid className={style.banner__secondary_with_button}>
          <Container>
            <div className={style.banner__secondary_with_button_div}>
              <p
                style={{
                  fontWeight: props.fontWeight && `${props.fontWeight}`,
                }}
              >
                {props?.bannerData?.title}
              </p>

              <div className={style.button}>
                <Buttons
                  variant="secondary_animated"
                  name={props?.bannerData?.button?.title}
                  url={props?.bannerData?.button?.url}
                  scrollToForm={props?.scrollToForm}
                />
              </div>
            </div>
          </Container>
        </Container>
      )}
      {props.variant === "primary_with_button" && (
        <Container
          fluid
          className={style.banner__primary__with_button}
          style={{
            marginTop: `${props.mt}`,
          }}
        >
          <Container>
            <Row style={{ margin: 0 }}>
              <div className={style.banner__div}>
                <div>
                  <div className={style.primary_with_button_title}>
                    {props?.bannerData?.title}
                  </div>
                  <Buttons
                    variant="secondary_animated"
                    name={props?.bannerData?.button?.title}
                    // name={props.bannerButtonData?.button?.title}
                    url={props?.bannerData?.button?.url}
                    tabname={props?.tabname}
                  />
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "blog_primary_with_button" && (
        <Container
          fluid
          className={style.blog__banner__primary__with_button}
          style={{
            marginTop: `${props.mt}`,
          }}
        >
          <Container>
            <Row style={{ margin: 0 }}>
              <div className={style.banner__div}>
                <div>
                  <div className={style.blog_primary_with_button_title}>
                    {props.bannerData?.title}
                  </div>
                  <Buttons
                    variant="secondary_animated"
                    name={props.bannerData?.button?.title}
                    url={props.bannerData?.button?.url}
                  />
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "banner__red" && (
        <Container
          fluid
          className={
            props.backgroundColor === "darkblue"
              ? style.banner__darkblue
              : style.banner__red
          }
          style={{
            marginTop: `${props.mt}`,
          }}
        >
          {/* <Container
fluid
className={
  backgroundColor === "darkblue"
    ? `${style.darkblue__section} ${addMultiClasses([
        "pb-5",
        style.counter,
      ])}`
    : `${addMultiClasses(["pb-5", style.counter])}`
}
> */}
          <Container>
            <Row style={{ margin: 0 }}>
              <div className={style.banner__div}>
                <div
                  className={
                    props.backgroundColor === "darkblue"
                      ? style.banner__darkblue__title
                      : style.banner__red__title
                  }
                >
                  {props.bannerData?.title}
                </div>
                <div
                  className={
                    props.backgroundColor === "darkblue"
                      ? style.banner__darkblue__desc
                      : style.banner__red__desc
                  }
                >
                  {props.bannerData?.description}
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "banner__white" && (
        <Container
          fluid
          className={
            props.position === "center"
              ? style.banner__center
              : style.banner__white
          }
          style={{
            marginTop: `${props.mt}`,
            marginBottom: `${props.mb}`,
          }}
        >
          <Container>
            <Row style={{ margin: 0 }}>
              <div
                className={
                  props.position === "center"
                    ? style.center__banner__div
                    : style.banner__div
                }
              >
                <div
                  className={
                    props.position === "center"
                      ? style.banner__center__title
                      : style.banner__white__title
                  }
                >
                  {props?.bannerData?.title}
                </div>
                <div
                  className={
                    props.position === "center"
                      ? style.banner__center__desc
                      : style.banner__white__desc
                  }
                >
                  {props?.bannerData?.description}
                </div>
                <div>
                  {props?.bannerData?.button ? (
                    <Buttons
                      variant="secondary_animated"
                      name={props.bannerData?.button?.title}
                      url={props.bannerData?.button?.url}
                      url_type={props.bannerData?.button?.url_type}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "banner__yellow" && (
        <Container fluid className={style.banner__yellow}>
          <Container>
            <Row style={{ margin: 0 }}>
              <h3 style={{ color: "#383838" }}>
                {words[0]}

                <br />

                <span
                  style={{
                    display: "block",
                    marginTop: "1.5rem",
                    color: "#262531",
                  }}
                >
                  {"-" + words[1]}
                </span>
              </h3>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "contactUs_page" && (
        <Container
          fluid
          className={addMultiClasses([
            style.banner__primary,
            style.banner__contactUs,
          ])}
          style={
            {
              // marginBottom: `${props.mb}`,
              // marginTop: `${props.mt}`,
            }
          }
        >
          <Container>
            <Col
              className={addMultiClasses([
                style.banner__div,
                style.banner__div__contactUs,
              ])}
            >
              <div
                className={addMultiClasses([
                  style.banner__title,
                  style.banner__title__contactUs,
                ])}
              >
                {props?.bannerData?.title}
              </div>
              <div className={style.banner__desc__contactUs}>
                <p>{props?.bannerData?.description}</p>
              </div>
              {props?.bannerData?.description_secondary ? (
                <div className={style.banner__desc__secondary}>
                  <p>{props?.bannerData?.description_secondary}</p>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Container>
        </Container>
      )}
      {props.variant === "blog_detail_page" && (
        <Container
          fluid
          className={addMultiClasses([
            style.banner__primary__with_button,
            style.banner_blogDetails_container,
          ])}
          style={{
            marginTop: `${props.mt}`,
            backgroundImage: `url(${props?.blogData?.caseStudy_suggestions?.cover_image?.data?.attributes?.url})`,
          }}
        >
          <Container>
            <Row style={{ margin: 0 }}>
              <div
                className={addMultiClasses([
                  style.banner__div,
                  style.blogDetails_bannerDiv,
                ])}
              >
                <div>
                  <div className={style.banner_blogDetails_type}>
                    Case Study
                  </div>
                  <div className={style.banner_blogDetails_title}>
                    {props?.blogData?.caseStudy_suggestions?.title}
                  </div>
                  <a
                    target="_blank"
                    href={props?.blogData?.caseStudy_suggestions?.link}
                  >
                    <div className={style.banner_blogDetails_button}>
                      <Buttons
                        variant="secondary_animated"
                        name="Read More"
                        tabname={props?.tabname}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "gptw" && (
        <Container
          fluid
          className={style.gptw__container}
          style={{
            backgroundColor: props.color === "White" ? "#FFFFFF" : "#262531",
          }}
        >
          <div className={style.gptw__div}>
            <div className={style.gptw__img}>
              <Image
                src={props.gptw.image.data?.attributes?.url}
                height={341}
                width={200}
                layout="fixed"
                priority
              />
            </div>
            <div>
              {" "}
              <h2
                className={style.gptw__title}
                style={{
                  color: props.color === "White" ? "#262531" : "#ffffff",
                }}
              >
                {props.gptw.title}
              </h2>
            </div>
          </div>
        </Container>
      )}
      {props.variant === "banner__bottom" && (
        <Container
          fluid
          className={addMultiClasses([
            mainContainer,
            variantClass,
            RemovePaddingTop,
          ])}
        >
          <Container>
            <Row style={{ margin: 0 }}>
              {props?.bannerData?.title && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props?.bannerData?.title,
                  }}
                  className={addMultiClasses([
                    style.banner__bottom__title__onlytext,
                    ForVioletBanner,
                  ])}
                ></div>
              )}
              {props?.bannerData?.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props?.bannerData?.description,
                  }}
                  className={addMultiClasses([
                    style.banner__bottom__desc,
                    ai_class,
                    ForpythonCTA,
                  ])}
                ></div>
              )}
              {props?.bannerData?.button && (
                <>
                  {props?.buttonType === "nonanimated" ? (
                    <div
                      className={addMultiClasses([
                        style.banner__bottom__btn,
                        ForBottomBannerButon,
                      ])}
                    >
                      <Button
                        onClick={props.scrollToForm}
                        className={style.btn__nonanimated}
                      >
                        {props.bannerData?.button?.title}
                      </Button>
                    </div>
                  ) : (
                    <div className={style.banner__bottom__btn}>
                      <Button
                        onClick={props.scrollToForm}
                        className={style.btm__btn}
                      >
                        {props.bannerData?.button?.title}
                      </Button>
                    </div>
                  )}
                </>
              )}
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "homepage__banner" && (
        <Container fluid className={style.homebanner_fluid}>
          <Container className={style.homebanner__container}>
            <Row className={style.homebanner__row}>
              <Col
                lg={5}
                // md={12}
                // sm={12}
                // xs={12}
                className={style.homebanner__left}
              >
                <div className={style.homebanner__title}>
                  {props?.bannerData?.title}
                </div>
                <div className={style.homebanner__desc}>
                  {props?.bannerData?.description}
                </div>
                <Buttons
                  variant={"secondary_animated"}
                  name={props?.bannerData?.button.title}
                  url={props?.bannerData?.button.url}
                  id={props?.bannerData?.button.button_id}
                  url_type={props?.bannerData?.button.url_type}
                />
              </Col>
              <Col
                lg={7}
                // md={12}
                // sm={12}
                // xs={12}
                className={style.homebanner__right}
              >
                <div className={style.homebanner__img}>
                  <Image
                    priority={true}
                    src={props?.bannerData?.image?.data?.attributes?.url}
                    height="484px"
                    width="730px"
                    layout="intrinsic"
                    alt={
                      props?.bannerData?.image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </div>
              </Col>
            </Row>

            {/* Mobile scree 992px */}

            <Row className={style.homebanner__mobile}>
              <div className={style.homebanner__mobileimg}>
                <Image
                  priority={true}
                  src="https://cdn-gcp.new.marutitech.com/homebanner_37d59e0f13.png"
                  height="484px"
                  width="730px"
                  layout="intrinsic"
                />
              </div>
              <div className={style.homebanner__mobiletitle}>Get in touch.</div>
              <div className={style.homebanner__mobiledesc}>
                Ready to build something great? Our 15 years of experience mean
                we can handle any idea, big or small.
              </div>
              <div className={style.homebanner__mobilebtn}>
                <Buttons
                  variant={"secondary_animated"}
                  name={props?.bannerData?.button.title}
                  url={props?.bannerData?.button.url}
                  id={props?.bannerData?.button.button_id}
                  url_type={props?.bannerData?.button.url_type}
                />
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {props.variant === "homepage__cta" && (
        <Container fluid style={{ background: "#262531" }}>
          <Container className={style.homepagecta__container}>
            <Row className={style.homepagecta__row}>
              <Col
                lg={{ span: 6, order: 1 }}
                xl={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 2 }}
                xs={{ span: 12, order: 2 }}
                className={style.homepagecta__text}
              >
                <h2 className={style.homepagecta__title}>
                  {props?.bannerData?.title}
                </h2>
                {props?.bannerData?.button?.url && (
                  <div className={style.homepagecta__button}>
                    <Buttons
                      variant={"secondary_animated"}
                      name={props?.bannerData?.button?.title}
                      url={props?.bannerData?.button?.url}
                      id={props?.bannerData?.button.button_id}
                      url_type={props?.bannerData?.button.url_type}
                    />
                  </div>
                )}
              </Col>
              <Col
                lg={{ span: 6, order: 2 }}
                xl={{ span: 6, order: 2 }}
                md={{ span: 6, order: 2 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
                className={style.homepagecta__image}
              >
                <div>
                  <Image
                    src={props?.bannerData?.image?.data?.attributes?.url}
                    alt={
                      props?.bannerData?.image?.data?.attributes
                        ?.alternativeText
                    }
                    height={403}
                    width={419}
                    layout="intrinsic"
                    priority
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Banner;
