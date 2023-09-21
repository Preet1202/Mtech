import React, { useEffect, useRef, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useInViewport } from "react-in-viewport";
import style from "./serviceHeroSection.module.scss";
import Buttons from "../Button";
import { addMultiClasses } from "../../common/common";
import ExpertiseCard from "../ExpertiseCard";

function ServiceHeroSection({
  variant,
  serviceData,
  longcta,
  casestudy,
  ourpeople,
  dataprotection,
  otherservices,
  otherservicesData,
  align,
  color,
  scrollToForm,
  type,
  addExtraPadding = false,
}) {
  let caseStudies = [];
  const [scrolledItem, setScrolledItem] = useState("firstItem");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [y, setY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const buttonref1 = useRef(null);
  const buttonref2 = useRef(null);
  const titleref1 = useRef(null);
  const titleref2 = useRef(null);
  const { inViewport: inViewportButton1 } = useInViewport(buttonref1);
  const { inViewport: inViewportButton2 } = useInViewport(buttonref2);
  const { inViewport: inViewportTitle1 } = useInViewport(titleref1);
  const { inViewport: inViewportTitle2 } = useInViewport(titleref2);
  useEffect(() => {
    if (scrollDirection === "down") {
      inViewportTitle2
        ? setScrolledItem("secondItem")
        : setScrolledItem("firstItem");
    } else {
      inViewportTitle1
        ? setScrolledItem("firstItem")
        : buttonref2
        ? setScrolledItem("secondItem")
        : setScrolledItem("secondItem");
    }
  }, [
    inViewportButton1,
    inViewportButton2,
    inViewportTitle1,
    inViewportTitle2,
    scrollDirection,
  ]);

  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDirection("up");
      } else if (y < window.scrollY) {
        setScrollDirection("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const addExtraPaddingClass = addExtraPadding ? style.extraPaddingAddded : "";

  if (variant === "case-study") {
    casestudy?.[0] === undefined
      ? caseStudies.push(casestudy)
      : (caseStudies = casestudy);
    if (!caseStudies.length) return <></>;
  }
  const ForLongButton =
    serviceData?.button?.title?.length < 20
      ? "secondary_animated"
      : "secondary";
  return (
    <>
      {variant === "primary" && (
        <Container
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <Row xs={1} md={2} className={style.row_container}>
            <Col className="d-md-none d-xl-none">
              {/* title  */}
              <h1 className={style.desc_driven_title}>{serviceData?.title}</h1>
              {/* description  */}
              <div
                className={style.desc_driven_desc}
                dangerouslySetInnerHTML={{ __html: serviceData?.description }}
              ></div>
            </Col>
            <Col className={"d-none d-sm-none d-md-block d-xl-block"}>
              <div className={style.xl_col}>
                {/* title  */}
                <h1 className={style.desc_driven_title}>
                  {serviceData?.title}
                </h1>
                {/* description  */}
                <div
                  className={style.desc_driven_desc}
                  dangerouslySetInnerHTML={{ __html: serviceData?.description }}
                ></div>
              </div>
            </Col>

            <Col className={style.desc_driven_img}>
              <Image
                priority
                layout="intrinsic"
                height={400}
                width={400}
                src={serviceData?.image?.data?.attributes?.url}
                alt={serviceData?.image?.data?.attributes?.alternativeText}
                objectFit="contain"
              />
            </Col>
          </Row>
        </Container>
      )}
      {variant === "secondary" && (
        <Container className={style.secondary_container}>
          <Row xs={1} md={2} className={style.row_container}>
            <Col
              className="d-md-none d-xl-none"
              md={{ order: 2 }}
              sm={{ order: 2 }}
              xs={{ order: 2 }}
              lg={{ order: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                padding: "0px",
              }}
            >
              <h1 className={style.desc_driven_title}>{serviceData?.title}</h1>

              <div
                className={
                  type === "newpages"
                    ? style.secondary_new_desc_driven_desc
                    : style.desc_driven_desc
                }
                dangerouslySetInnerHTML={{ __html: serviceData?.description }}
              ></div>
              <div className={style.herosection_button}>
                {serviceData?.button && (
                  <Buttons
                    variant={ForLongButton}
                    name={serviceData?.button?.title}
                    scrollToForm={scrollToForm}
                    paddingBottom="0px"
                    // url={serviceData?.button?.url}
                    // id={serviceData?.button?.button_id}
                    // url_type={serviceData?.button?.url_type}
                  />
                )}
              </div>
            </Col>
            <Col className={"d-none d-sm-none d-md-block d-xl-block"}>
              <div className={style.xl_col}>
                <h1 className={style.desc_driven_title}>
                  {serviceData?.title}
                </h1>

                <div
                  className={
                    type === "newpages"
                      ? style.secondary_new_desc_driven_desc
                      : style.desc_driven_desc
                  }
                  dangerouslySetInnerHTML={{
                    __html: serviceData?.description,
                  }}
                ></div>
                <div className={style.herosection_button}>
                  {serviceData?.button && (
                    <Buttons
                      variant={ForLongButton}
                      name={serviceData?.button?.title}
                      scrollToForm={scrollToForm}
                      // url={serviceData?.button?.url}
                      // id={serviceData?.button?.button_id}
                      // url_type={serviceData?.button?.url_type}
                    />
                  )}
                </div>
              </div>
            </Col>

            <Col
              className={style.desc_driven_img}
              md={{ order: 1 }}
              sm={{ order: 1 }}
              xs={{ order: 1 }}
              lg={{ order: 2 }}
            >
              <Image
                priority
                layout="intrinsic"
                height={354}
                width={600}
                src={serviceData?.image?.data?.attributes?.url}
                alt={serviceData?.image?.data?.attributes?.alternativeText}
                objectFit="contain"
              />
            </Col>
          </Row>
        </Container>
      )}
      {variant === "longcta" && (
        <Container
          style={{
            backgroundColor: "#ffffff",
          }}
          fluid="xl"
        >
          <Row className={style.longcta__row}>
            <Col
              className={style.longcta__content}
              lg={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
              md={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
              sm={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
              xs={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
            >
              <h1 className={style.desc_driven_title}>{longcta?.title}</h1>

              <div
                className={style.longcta_desc_driven_desc}
                dangerouslySetInnerHTML={{ __html: longcta?.description }}
              ></div>
              {longcta?.button?.title?.length > 0 && (
                <div className={style.herosection_button}>
                  <Buttons
                    variant="secondary"
                    name={longcta?.button?.title}
                    // url={longcta?.button?.url}
                    // id={longcta?.button?.button_id}
                    // url_type={longcta?.button?.url_type}
                  />
                </div>
              )}
            </Col>

            <Col
              className={style.longcta_image}
              md={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
              lg={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
              sm={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
              xs={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
            >
              {longcta?.image?.data?.attributes?.url && (
                <Image
                  priority
                  layout="intrinsic"
                  height={503}
                  width={522}
                  src={longcta?.image?.data?.attributes?.url}
                  alt={longcta?.image?.data?.attributes?.alternativeText}
                  objectFit="contain"
                />
              )}
            </Col>
          </Row>
        </Container>
      )}
      {variant === "case-study" && (
        <Container
          fluid
          className={addMultiClasses([
            style.casestudy_container,
            addExtraPaddingClass,
            scrolledItem === "firstItem" || caseStudies.length === 1
              ? style.first_item
              : style.second_item,
          ])}
        >
          <Container fluid="lg" className={style.inner_container}>
            {caseStudies?.map((singleCaseStudy, index) => {
              return (
                <Row className={style.casestudy__row} key={singleCaseStudy?.id}>
                  <Col
                    lg={{
                      span: 6,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 2 : 1,
                    }}
                    md={{
                      span: 6,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 2 : 1,
                    }}
                    sm={{
                      span: 12,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 2 : 2,
                    }}
                    xs={{
                      span: 12,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 2 : 2,
                    }}
                    className={style.removeExtraPadding}
                  >
                    <div className={style.xl_col_casestudy}>
                      <div
                        className={style.casestudy__type}
                        ref={index === 0 ? buttonref1 : buttonref2}
                      >
                        {singleCaseStudy?.type}
                      </div>

                      <h3
                        className={style.casestudy__title}
                        ref={index === 0 ? titleref1 : titleref2}
                      >
                        {singleCaseStudy?.title}
                      </h3>

                      <div
                        className={style.casestudy__desc}
                        dangerouslySetInnerHTML={{
                          __html: singleCaseStudy?.description,
                        }}
                      ></div>
                      <a
                        href={singleCaseStudy?.link}
                        className={style.casestudy__readmore}
                      >
                        <div className={style.casestudy__linktext}>
                          {singleCaseStudy?.link_text}
                        </div>
                        <div>
                          <img
                            className={style.arrow_right}
                            src="https://cdn-gcp.new.marutitech.com/know_more_red_arrow_2022_3b9886c436.svg"
                            alt="red-arrow"
                            height="12px"
                            width="122px"
                          />
                        </div>
                      </a>
                    </div>
                  </Col>

                  <Col
                    className={style.casestudy__image}
                    md={{
                      span: 6,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 1 : 2,
                    }}
                    lg={{
                      span: 6,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 1 : 2,
                    }}
                    sm={{
                      span: 12,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 1 : 1,
                    }}
                    xs={{
                      span: 12,
                      order:
                        singleCaseStudy?.image_alignment === "left" ? 1 : 1,
                    }}
                  >
                    {singleCaseStudy?.image?.data?.attributes && (
                      <Image
                        layout="intrinsic"
                        height={
                          singleCaseStudy?.image?.data?.attributes?.height
                        }
                        width={singleCaseStudy?.image?.data?.attributes?.width}
                        src={singleCaseStudy?.image?.data?.attributes?.url}
                        alt={
                          singleCaseStudy?.image?.data?.attributes
                            ?.alternativeText
                        }
                        objectFit="contain"
                      />
                    )}
                  </Col>
                </Row>
              );
            })}
          </Container>
        </Container>
      )}
      {variant === "ourpeople" && (
        <Container
          fluid={+true}
          style={{
            backgroundColor: color === "violet" ? "#262531" : "#FFFFFF",
          }}
          className={style.ourpeople__container}
        >
          <Container>
            <Row
              className={addMultiClasses([
                style.row_container,
                style.ForGap_Oureople,
              ])}
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <Col
                lg={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
                md={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
                sm={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
                xs={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
                className={style.ourpeople__contentcol}
              >
                <div className={style.ourpeople__headcontainer}>
                  <h2
                    className={style.ourpeople__title}
                    style={{
                      color: color === "violet" ? "#FFFFFF" : "#262531",
                    }}
                  >
                    {ourpeople?.title}
                  </h2>
                  <div
                    className={style.ourpeople__desc}
                    style={{
                      color: color === "violet" ? "#FFFFFF" : "#383838",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: ourpeople?.richtextdesc,
                    }}
                  ></div>
                </div>
              </Col>

              <Col
                md={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
                lg={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
                sm={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
                xs={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
                className={style.ourpeople__image}
              >
                <div>
                  <Image
                    priority
                    layout="intrinsic"
                    // height={ourpeople?.image?.data?.attributes?.height}
                    // width={ourpeople?.image?.data?.attributes?.width}
                    height="509.5"
                    width="605px"
                    src={ourpeople?.image?.data?.attributes?.url}
                    alt={ourpeople?.image?.data?.attributes?.alternativeText}
                  />
                </div>
              </Col>
            </Row>

            {ourpeople?.ourpeople_box && (
              <ExpertiseCard
                ourpeople={ourpeople}
                type="ourpeople"
                color="violet"
              />
            )}
          </Container>
        </Container>
      )}
      {variant === "dataprotection" && (
        <Container
          fluid={+true}
          style={{
            backgroundColor:
              color === "violet"
                ? "#262531"
                : color === "orange"
                ? "#F05443"
                : "transparent",
          }}
          className={style.dataprotection__container}
        >
          <Container>
            <Row className={style.data_row}>
              <Col
                lg={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
                md={{ span: 6, order: align === "leftimage" ? 2 : 1 }}
                sm={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
                xs={{ span: 12, order: align === "leftimage" ? 2 : 2 }}
                className={style.ourpeople__contentcol}
              >
                <div className={style.ourpeople__headcontainer}>
                  <h2
                    className={style.ourpeople__title}
                    style={{
                      color:
                        color === "violet"
                          ? "#FFFFFF"
                          : color === "orange"
                          ? "#FFFFFF"
                          : "#262531",
                    }}
                  >
                    {dataprotection?.title}
                  </h2>
                  <div
                    className={style.ourpeople__desc}
                    style={{
                      color:
                        color === "violet"
                          ? "#FFFFFF"
                          : color === "orange"
                          ? "#FFFFFF"
                          : "#383838",
                    }}
                  >
                    {dataprotection?.description}
                  </div>
                  <div className={style.dpbox__wrapper}>
                    {dataprotection?.dataprotection_box?.map((data) => {
                      return (
                        <React.Fragment key={data?.id}>
                          <div className={style.dpbox__box}>
                            <div className={style.dpbox__box__div}>
                              <img
                                src={data?.image?.data?.attributes?.url}
                                height="50px"
                                width="50px"
                              />
                              <div className={style.dpbox__box__title}>
                                {data?.title}
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </Col>

              <Col
                md={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
                lg={{ span: 6, order: align === "leftimage" ? 1 : 2 }}
                sm={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
                xs={{ span: 12, order: align === "leftimage" ? 1 : 1 }}
                className={style.dpbox__box__image}
              >
                <div>
                  <Image
                    priority
                    layout="intrinsic"
                    // height={ourpeople?.image?.data?.attributes?.height}
                    // width={ourpeople?.image?.data?.attributes?.width}
                    height="466px"
                    width="509px"
                    src={dataprotection?.image?.data?.attributes?.url}
                    alt={
                      dataprotection?.image?.data?.attributes?.alternativeText
                    }
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
      {variant === "otherservices" && (
        <Container fluid={+true} className={style.otherservices__container}>
          <Container className={style.otherservices__textcontainer}>
            <h2>{otherservicesData?.title}</h2>
            <div className={style.otherservices__textcontainer__desc}>
              {otherservicesData?.description}
            </div>

            <Row className={style.otherservices__row}>
              {otherservicesData?.otherservice_box?.map((data) => {
                const otherservice_title_margin =
                  data.title.length > 23 ? style.otherservice_title_margin : "";

                return (
                  <React.Fragment key={data?.id}>
                    <Link href={data?.link} key={data?.id} passHref>
                      <div className={style.otherservices__box__wrapper}>
                        <div
                          className={addMultiClasses([
                            style.otherservices__box__title,
                            otherservice_title_margin,
                          ])}
                        >
                          {data?.title}
                        </div>
                        <div className={style.border_bottom}></div>
                        <div
                          className={style.otherservices__box__desc}
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        ></div>

                        <div className={style.arrow__block}>
                          <div className={style.arrow__title}>
                            {/* {box?.link_name} */}
                            {data?.linktext}
                          </div>
                          <div className={style.arrow_right}>
                            {/* <Image
                              src="https://cdn-gcp.new.marutitech.com/yellowarrow_fa22d5c035.svg"
                              height="14px"
                              width="17px"
                            /> */}
                            <svg
                              width="18"
                              height="14"
                              viewBox="0 0 18 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.9505 1.1808C11.8949 1.12358 11.8283 1.07811 11.7548 1.04705C11.6813 1.016 11.6023 1 11.5225 1C11.4427 1 11.3637 1.016 11.2902 1.04705C11.2167 1.07811 11.1501 1.12358 11.0945 1.1808C10.9828 1.29465 10.9202 1.44779 10.9202 1.6073C10.9202 1.7668 10.9828 1.91994 11.0945 2.0338L15.4375 6.3938H1.1065C0.945645 6.3938 0.791376 6.4577 0.677635 6.57144C0.563894 6.68518 0.5 6.83944 0.5 7.0003C0.5 7.16115 0.563894 7.31542 0.677635 7.42916C0.791376 7.5429 0.945645 7.6068 1.1065 7.6068H15.4385L11.0955 11.9598C10.984 12.0752 10.9218 12.2294 10.9218 12.3898C10.9218 12.5502 10.984 12.7044 11.0955 12.8198C11.3355 13.0608 11.7125 13.0608 11.9515 12.8198L17.3235 7.4268C17.4349 7.31298 17.4973 7.16006 17.4973 7.0008C17.4973 6.84153 17.4349 6.68861 17.3235 6.5748L11.9515 1.1818L11.9505 1.1808Z"
                                fill="#FEBE10"
                                stroke="#FEBE10"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                );
              })}
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default ServiceHeroSection;
