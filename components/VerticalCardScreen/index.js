import React from "react";
import style from "./VerticalCardScreen.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import VerticalCards from "../VerticalCards";

function VerticalCardScreen({
  data,
  variant,
  mt,
  botDevelopmentData,
  reference,
  mobileref,
}) {
  return (
    <div className={` ${variant}-verticalcard`}>
      <Container fluid>
        {variant === "primary" && (
          <div style={{ marginTop: `${mt}` }}>
            <Container
              className={
                "d-block d-sm-block d-md-none d-xl-none " + style.sm_container
              }
            >
              <div ref={mobileref} className={style.scrolling}></div>
              <Row style={{ width: "100%" }} className="gx-0">
                <Col sm={12} md={12}>
                  <div className={style.secondary_component_content}>
                    <div className={style.component_title}>
                      {botDevelopmentData?.title}
                    </div>
                    <div className={style.component_description}>
                      {botDevelopmentData?.description}
                    </div>
                  </div>
                </Col>

                <div className={style.mdImgCol__image__mobileview}>
                  <div 
                  data-aos="fade-up"
                  >
                    <Image
                      // priority
                      layout="intrinsic"
                      width={400}
                      height={440}
                      src={botDevelopmentData?.image?.data?.attributes?.url}
                      alt={botDevelopmentData?.title}
                      // placeholder="blur"
                      // blurDataURL={
                      //   botDevelopmentData?.image?.data?.attributes?.url
                      // }
                    />
                  </div>
                </div>

                <div className={style.verticalcards_div}>
                  {botDevelopmentData?.vc_card && (
                    <VerticalCards
                      variant="red"
                      data={botDevelopmentData?.vc_card}
                    />
                  )}
                </div>
              </Row>
            </Container>

            <Container
              className={
                "d-none d-sm-none d-md-block d-xl-block " + style.md_container
              }
            >
              <div ref={reference} className={style.scrolling}></div>
              <Row>
                <Col md={8} sm={12} className={style.col_md_8}>
                  <div className={style.secondary_component_content}>
                    <div className={style.component_title}>
                      {botDevelopmentData?.title}
                    </div>
                    <div className={style.component_description}>
                      <Row style={{ width: "100%", margin: "0" }}>
                        <Col sm={12} md={10} className={style.desc_column}>
                          {botDevelopmentData?.description}
                        </Col>
                      </Row>
                    </div>

                    <VerticalCards
                      variant="red"
                      data={botDevelopmentData?.vc_card}
                    />
                  </div>
                </Col>

                <Col
                  md={4}
                  sm={12}
                  className={
                    "d-none d-sm-none d-md-block d-xl-block " + style.col_md_4
                  }
                >
                  <div className={style.mdImgCol}>
                    <div 
                    data-aos="fade-up"
                    >
                      <Image
                        // priority
                        layout="intrinsic"
                        width={400}
                        height={440}
                        src={botDevelopmentData?.image?.data?.attributes?.url}
                        alt={botDevelopmentData?.title}
                        // placeholder="blur"
                        // blurDataURL={
                        //   botDevelopmentData?.image?.data?.attributes?.url
                        // }
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {variant === "secondary" && (
          <div
            className={style.secondary_container}
            style={{ marginTop: `${mt}` }}
          >
            <Container>
              <Row style={{ width: "100%", margin: "0px" }}>
                <Col md={12} sm={12} className={style.secondary_component_col}>
                  <div className={style.secondary_component_content}>
                    <Container className={style.component_secondary_title}>
                      {botDevelopmentData?.title}
                    </Container>
                  </div>
                </Col>
                <div className={style.yellow_cards}>
                  <VerticalCards
                    variant="yellow"
                    data={botDevelopmentData?.vc_card}
                  />
                </div>
              </Row>
            </Container>
          </div>
        )}
        {variant === "primary_with_navyblue_background" && (
          <div
            className={style.primary_with_navyblue_background_container}
            style={{ marginTop: `${mt}` }}
          >
            <Container
              className={
                "d-block d-sm-block d-md-none d-xl-none " + style.sm_container
              }
            >
              <Row
                className={style.primary_with_navyblue_background_row}
                style={{ width: "100%" }}
              >
                <Col sm={12} md={12}>
                  <div className={style.secondary_component_content}>
                    <Container>
                      <div className={style.component_title}>
                        {botDevelopmentData?.title}
                      </div>
                      <div 
                      data-aos="fade-up"
                      >
                        <Image
                          priority
                          layout="intrinsic"
                          width={361}
                          height={395}
                          src={botDevelopmentData?.image?.data?.attributes?.url}
                          alt={botDevelopmentData?.title}
                        />
                      </div>
                    </Container>
                  </div>
                </Col>
                <div className={style.verticalcards_div}>
                  {botDevelopmentData?.vc_card && (
                    <VerticalCards
                      variant="yellow"
                      data={botDevelopmentData?.vc_card}
                    />
                  )}
                </div>
              </Row>
            </Container>
            <Container
              className={
                "d-none d-sm-none d-md-block d-xl-block " + style.md_container
              }
            >
              <Row>
                <div
                  md={7}
                  lg={7}
                  xl={6}
                  sm={12}
                  className={style.secondary_component_content}
                >
                  <div className={style.component_title}>
                    {botDevelopmentData?.title}
                  </div>
                  <div className={style.component_description}>
                    {botDevelopmentData?.description}
                  </div>
                </div>
                <Col md={7} lg={7} xl={6} sm={12}>
                  <VerticalCards
                    variant="yellow"
                    data={botDevelopmentData?.vc_card}
                  />
                </Col>
                <Col
                  md={5}
                  lg={5}
                  xl={6}
                  sm={12}
                  className={"d-none d-sm-none d-md-block d-xl-block"}
                >
                  <div className={style.mdImgCol_product} data-aos="fade-up">
                    <Image
                      priority
                      layout="intrinsic"
                      width={398}
                      height={436}
                      src={botDevelopmentData?.image?.data?.attributes?.url}
                      alt={botDevelopmentData?.image_alt_text}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default VerticalCardScreen;
