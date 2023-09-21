import React, { useState } from "react";
import Image from "next/image";
import style from "./CardBox.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { addMultiClasses } from "../../common/common";
import ExpertiseCard from "../ExpertiseCard";

function CardBox({ variant, productEngineeringData, color, expertiseData }) {
  const [onHover, setOnHover] = useState(true);

  const splitNumber = (data) => {
    let words = data.split(" ");
    let wordarr = [];
    wordarr.push(words[0]);
    wordarr.push(words.slice(1).join(" ").toString());
    return wordarr[0];
  };
  const splitText = (data) => {
    let words = data.split(" ");
    let wordarr = [];
    wordarr.push(words[0]);
    wordarr.push(words.slice(1).join(" ").toString());
    return wordarr[1];
  };
  return (
    <Container fluid>
      {variant === "primary" && (
        <div className="product-engineering">
          <Container className={style.container}>
            <Row style={{ margin: "0" }}>
              <Col md={6} sm={12} className={style.image_column}>
                <Container>
                  <div data-aos="fade-up">
                    <Image
                      width={509}
                      height={466}
                      // priority
                      // placeholder="blur"
                      // blurDataURL={
                      //   productEngineeringData?.image?.data?.attributes?.url
                      // }
                      src={productEngineeringData?.image?.data?.attributes?.url}
                      alt={productEngineeringData?.image_alt_text}
                      data-aos="fade-up"
                    />
                  </div>
                </Container>
              </Col>
              <Col md={6} sm={12}>
                <Container>
                  <div className={style.columnContent}>
                    <div className={style.cardBoxTitle}>
                      {productEngineeringData?.title}
                    </div>
                    <div className={style.cardBoxDescription}>
                      <div>{productEngineeringData?.description}</div>
                    </div>
                    <Row className={"d-flex d-md-flex"} style={{ margin: "0" }}>
                      <Col md={5} sm={6} xs={6} className={style.contentCol1}>
                        <a href={productEngineeringData?.cb_box[0]?.link_url}>
                          <div
                            className={style.square_card_wrapper_1}
                            onMouseOut={() => setOnHover(true)}
                            onMouseOver={() => setOnHover(false)}
                          >
                            <div className={style.sq_card_content}>
                              <div>
                                {productEngineeringData?.cb_box[0]?.title}
                              </div>
                              <div className={style.know_more}>
                                <div>
                                  <span className={style.know_more_text}>
                                    {
                                      productEngineeringData?.cb_box[0]
                                        ?.link_name
                                    }
                                  </span>{" "}
                                  &nbsp;{" "}
                                  {/* <BsArrowRight
                                    strokeWidth={1}
                                    className={style.arrow}
                                  /> */}
                                  <div className={style.arrow} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href={productEngineeringData?.cb_box[2]?.link_url}>
                          <div
                            className={style.square_card_wrapper_3}
                            onMouseOut={() => setOnHover(true)}
                            onMouseOver={() => setOnHover(false)}
                          >
                            <div className={style.sq_card_content}>
                              {productEngineeringData?.cb_box[2]?.title}

                              <div className={style.know_more}>
                                <div>
                                  <span className={style.know_more_text}>
                                    {
                                      productEngineeringData?.cb_box[2]
                                        ?.link_name
                                    }
                                  </span>{" "}
                                  &nbsp;{" "}
                                  {/* <BsArrowRight
                                    strokeWidth={1}
                                    className={style.arrow}
                                  /> */}
                                  <div className={style.arrow} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col md={5} sm={6} xs={6} className={style.contentCol2}>
                        <a
                          href={productEngineeringData?.cb_box[1]?.link_url}
                          className={style.card3atag}
                        >
                          <div
                            className={`${style.square_card_wrapper_2} ${
                              onHover &&
                              style.square_card_wrapper_2_autoselected
                            }`}
                          >
                            <div className={style.sq_card_content}>
                              {productEngineeringData?.cb_box[1]?.title}

                              <div className={style.know_more}>
                                <div>
                                  <span className={style.know_more_text}>
                                    {
                                      productEngineeringData?.cb_box[1]
                                        ?.link_name
                                    }
                                  </span>{" "}
                                  &nbsp;{" "}
                                  {/* <BsArrowRight
                                    strokeWidth={1}
                                    className={style.arrow}
                                  /> */}
                                  <div className={style.arrow} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href={productEngineeringData?.cb_box[3]?.link_url}>
                          <div
                            className={style.square_card_wrapper_4}
                            onMouseOut={() => setOnHover(true)}
                            onMouseOver={() => setOnHover(false)}
                          >
                            <div className={style.sq_card_content}>
                              {productEngineeringData?.cb_box[3]?.title}

                              <div className={style.know_more}>
                                <div>
                                  <span className={style.know_more_text}>
                                    {
                                      productEngineeringData?.cb_box[3]
                                        ?.link_name
                                    }
                                  </span>{" "}
                                  &nbsp;{" "}
                                  {/* <BsArrowRight
                                    strokeWidth={1}
                                    className={style.arrow}
                                  /> */}
                                  <div className={style.arrow} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {variant === "devs" && (
        <div className="product-engineering">
          <Container
            fluid
            className={style.devs__container}
            style={{ background: color === "violet" ? "#262531" : "#FFFFFF" }}
          >
            <Container className={style.for_hide_overflow}>
              <Row className={style.for_hide_overflow}>
                <Col md={6} sm={12} className={style.ForCardBox}>
                  <Container>
                    <div className={style.columnContent}>
                      <Row
                        className={addMultiClasses([
                          "d-flex d-md-flex",
                          style.ForVertical,
                        ])}
                      >
                        <Col md={5} sm={6} xs={6} className={style.contentCol1}>
                          <a href={productEngineeringData?.cb_box[0]?.link_url}>
                            <div
                              className={`${style.dev_card_wrapper_1} ${
                                onHover && [
                                  style.dev_card_wrapper_1_autoselected,
                                ]
                              }`}
                              onMouseOut={() => setOnHover(true)}
                              onMouseOver={() => setOnHover(false)}
                            >
                              <div className={style.sq_card_content}>
                                <div>
                                  {splitNumber(
                                    productEngineeringData?.cb_box[0]?.title
                                  )}
                                </div>
                                <div className={style.sq_number_title}>
                                  {splitText(
                                    productEngineeringData?.cb_box[0]?.title
                                  )}
                                </div>
                                {/* <div className={style.know_more}>
                                  <div>
                                    <span className={style.know_more_text}>
                                      {
                                        productEngineeringData?.cb_box[0]
                                          ?.link_name
                                      }
                                    </span>
                                    <span>Know More</span>
                                    <div className={style.arrow} />
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </a>

                          <a href={productEngineeringData?.cb_box[2]?.link_url}>
                            <div
                              className={style.dev_card_wrapper_3}
                              onMouseOut={() => setOnHover(true)}
                              onMouseOver={() => setOnHover(false)}
                            >
                              <div className={style.sq_card_content}>
                                {/* {productEngineeringData?.cb_box[2]?.title} */}
                                <div>
                                  {splitNumber(
                                    productEngineeringData?.cb_box[2]?.title
                                  )}
                                </div>
                                <div className={style.sq_number_title}>
                                  {splitText(
                                    productEngineeringData?.cb_box[2]?.title
                                  )}
                                </div>

                                {/* <div className={style.know_more}>
                                  <div>
                                    <span className={style.know_more_text}>
                                      {
                                        productEngineeringData?.cb_box[2]
                                          ?.link_name
                                      }
                                    </span>{" "}
                                    <span>Know More</span>
                                    <div className={style.arrow} />
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </a>
                        </Col>
                        <Col md={5} sm={6} xs={6} className={style.contentCol2}>
                          <a
                            href={productEngineeringData?.cb_box[1]?.link_url}
                            className={style.card3atag}
                          >
                            <div
                              className={style.dev_card_wrapper_2}
                              onMouseOut={() => setOnHover(true)}
                              onMouseOver={() => setOnHover(false)}
                            >
                              <div className={style.sq_card_content}>
                                {/* {productEngineeringData?.cb_box[1]?.title} */}
                                <div>
                                  {splitNumber(
                                    productEngineeringData?.cb_box[1]?.title
                                  )}
                                </div>
                                <div className={style.sq_number_title}>
                                  {splitText(
                                    productEngineeringData?.cb_box[1]?.title
                                  )}
                                </div>
                                {/* <div className={style.know_more}>
                                  <div>
                                    <span className={style.know_more_text}>
                                      {
                                        productEngineeringData?.cb_box[1]
                                          ?.link_name
                                      }
                                    </span>{" "}
                                    <span>Know More</span>{" "}
                                    <div className={style.arrow} />
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </a>

                          <a href={productEngineeringData?.cb_box[3]?.link_url}>
                            <div
                              className={style.dev_card_wrapper_4}
                              onMouseOut={() => setOnHover(true)}
                              onMouseOver={() => setOnHover(false)}
                            >
                              <div className={style.sq_card_content}>
                                {productEngineeringData?.cb_box[3]?.title}

                                {/* <div className={style.know_more}>
                                  <div>
                                    <span className={style.know_more_text}>
                                      {
                                        productEngineeringData?.cb_box[3]
                                          ?.link_name
                                      }
                                    </span>{" "}
                                    <span>Know More</span>{" "}
                                    <div className={style.arrow} />
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </Col>
                <Col md={6} sm={12}>
                  <Container>
                    <div
                      className={style.cardBoxTitle}
                      style={{
                        color: color === "violet" ? "#FFFFFF" : "#262531",
                      }}
                    >
                      {productEngineeringData?.title}
                    </div>
                    <div
                      className={style.devsbox__description}
                      style={{
                        color: color === "violet" ? "#FFFFFF" : "#383838",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: productEngineeringData?.richtextdesc,
                      }}
                    >
                      {/* {productEngineeringData?.description} */}
                    </div>
                  </Container>
                </Col>
              </Row>

              <ExpertiseCard
                expertiseData={expertiseData}
                type="expertise_block"
              />
            </Container>
          </Container>
        </div>
      )}
    </Container>
  );
}
export default CardBox;
