import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./VerticalCards.module.scss";
import { Col, Container, Row } from "react-bootstrap";
// import { BsArrowRight } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/dist/client/router";

function VerticalCards({ variant, data }) {
  const router = useRouter();
  const [onHover, setOnHover] = useState(false);
  const [urlName, setUrlName] = useState(router?.asPath);
  useEffect(() => {
    setUrlName(router.asPath.split("/")[1]);
  }, [router?.asPath]);
  const [verticalCardData, setData] = useState([]);
  useEffect(() => {
    if (data) {
      if (data && data.length > 0) {
        setData(data);
      }
    }
  }, [data]);
  const services = [
    "bot-development-services",
    "robotic-process-automation-services",
    "business-intelligence-consulting-services",
    "data-analytics-services",
    "natural-language-processing-services",
    "computer-vision-services",
    "machine-learning-services",
    "cloud-application-development-services",
    "devops-consulting-services",
    "quality-engineering-services",
    "software-prototyping-services",
  ];

  return (
    <>
      <Container fluid className="gx-0">
        <Row className={`style.container_row gx-0`}>
          {verticalCardData?.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Link href={data?.link_url} key={index} id={data?.link_id}>
                  <Col
                    md={4}
                    className={
                      variant === "red"
                        ? `d-none d-md-flex d-xl-flex ${style.verticalCard} ${
                            !onHover && style.verticalcard_autoselected
                          }`
                        : `d-none d-md-flex d-xl-flex ${
                            style.secondary__verticalCard
                          } ${
                            !onHover &&
                            style.secondary__verticalCard_autoselected
                          }`
                    }
                    key={index}
                    onMouseOut={() => setOnHover(false)}
                    onMouseOver={() => setOnHover(true)}
                  >
                    {data?.title === "Chatbots" &&
                      urlName == "#bot-development-section" &&
                      variant === "red" && (
                        <>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__title
                                : style.secondary__title
                            }
                          >
                            {data?.title}
                          </div>
                          <div
                            className={
                              variant === "red"
                                ? style.div__primary__chatbot
                                : style.div__secondary
                            }
                          ></div>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__desc__chatbot
                                : style.secondary__desc
                            }
                          >
                            {data?.description?.substr(
                              0,
                              data?.description?.indexOf(
                                "Integrate intelligent chatbots"
                              )
                            )}
                            <br />
                            <br />
                            {data?.description?.substr(
                              data?.description?.indexOf(
                                "Integrate intelligent chatbots"
                              ),
                              data?.description?.length
                            )}
                          </div>
                          {variant === "red" && (
                            <div
                              className={style.verticalCard__icon}
                              // style={{
                              //   position: "absolute",
                              //   top: "23rem",
                              //   paddingLeft: "1rem",
                              // }}
                            >
                              <Link href={data?.link_url}>
                                <div>
                                  <span>Know more</span>{" "}
                                  <div className={style.arrow} />
                                </div>
                              </Link>
                            </div>
                          )}
                          {variant === "yellow" && (
                            <div className={style.secondary__icon}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    {data?.title === "Chatbots" &&
                      urlName?.length == "" &&
                      variant === "red" && (
                        <>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__title
                                : style.secondary__title
                            }
                          >
                            {data?.title}
                          </div>
                          <div
                            className={
                              variant === "red"
                                ? style.div__primary__chatbot
                                : style.div__secondary
                            }
                          ></div>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__desc__chatbot
                                : style.secondary__desc
                            }
                          >
                            {data?.description?.substr(
                              0,
                              data?.description?.indexOf(
                                "Integrate intelligent chatbots"
                              )
                            )}
                            <br />
                            <br />
                            {data?.description?.substr(
                              data?.description?.indexOf(
                                "Integrate intelligent chatbots"
                              ),
                              data?.description?.length
                            )}
                          </div>
                          {variant === "red" && (
                            <div className={style.verticalCard__icon}>
                              <Link href={data?.link_url}>
                                <div>
                                  <span>Know more</span>{" "}
                                  <div className={style.arrow} />
                                </div>
                              </Link>
                            </div>
                          )}
                          {variant === "yellow" && (
                            <div className={style.secondary__icon}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    {data?.title === "RPA" &&
                      urlName == "#bot-development-section" &&
                      variant === "red" && (
                        <>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__title
                                : style.secondary__title
                            }
                          >
                            {data?.title}
                          </div>
                          <div
                            className={
                              variant === "red"
                                ? style.div__primary__chatbot
                                : style.div__secondary
                            }
                          ></div>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__desc__chatbot
                                : style.secondary__desc
                            }
                          >
                            {data?.description?.substr(
                              0,
                              data?.description?.indexOf(
                                "Learn how your business"
                              )
                            )}
                            <br />
                            <br />
                            {data?.description?.substr(
                              data?.description?.indexOf(
                                "Learn how your business"
                              ),
                              data?.description?.length
                            )}
                          </div>
                          {variant === "red" && (
                            <div className={style.verticalCard__icon}>
                              <Link href={data?.link_url}>
                                <div>
                                  <span>Know more</span>{" "}
                                  <div className={style.arrow} />
                                </div>
                              </Link>
                            </div>
                          )}
                          {variant === "yellow" && (
                            <div className={style.secondary__icon}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    {data?.title === "RPA" &&
                      urlName?.length == "" &&
                      variant === "red" && (
                        <>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__title
                                : style.secondary__title
                            }
                          >
                            {data?.title}
                          </div>
                          <div
                            className={
                              variant === "red"
                                ? style.div__primary__chatbot
                                : style.div__secondary
                            }
                          ></div>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__desc__chatbot
                                : style.secondary__desc
                            }
                          >
                            {data?.description?.substr(
                              0,
                              data?.description?.indexOf(
                                "Learn how your business"
                              )
                            )}
                            <br />
                            <br />
                            {data?.description?.substr(
                              data?.description?.indexOf(
                                "Learn how your business"
                              ),
                              data?.description?.length
                            )}
                          </div>
                          {variant === "red" && (
                            <div className={style.verticalCard__icon}>
                              <Link href={data?.link_url}>
                                <div>
                                  <span>Know more</span>{" "}
                                  <div className={style.arrow} />
                                </div>
                              </Link>
                            </div>
                          )}
                          {variant === "yellow" && (
                            <div className={style.secondary__icon}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    {urlName?.length !== "" &&
                      services.indexOf(urlName) > -1 &&
                      variant === "red" && (
                        <>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__title
                                : style.secondary__title
                            }
                          >
                            {data?.title}
                          </div>
                          <div
                            className={
                              variant === "red"
                                ? style.div__primary
                                : style.div__secondary
                            }
                          ></div>
                          <div
                            className={
                              variant === "red"
                                ? style.verticalCard__desc
                                : style.secondary__desc
                            }
                          >
                            {data?.description}
                          </div>
                          {variant === "red" && (
                            <div className={style.verticalCard__icon}>
                              <Link href={data?.link_url}>
                                <div>
                                  <span>Know more</span>{" "}
                                  <div className={style.arrow} />
                                </div>
                              </Link>
                            </div>
                          )}
                          {variant === "yellow" && (
                            <div className={style.secondary__icon}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    {variant !== "red" && (
                      <>
                        <div
                          className={
                            variant === "red"
                              ? style.verticalCard__title
                              : style.secondary__title
                          }
                        >
                          {data?.title}
                        </div>
                        <div
                          className={
                            variant === "red"
                              ? style.div__primary
                              : style.div__secondary
                          }
                        ></div>
                        <div
                          className={
                            variant === "red"
                              ? style.verticalCard__desc
                              : style.secondary__desc
                          }
                        >
                          {data?.description}
                        </div>
                        {variant === "red" && (
                          <div className={style.verticalCard__icon}>
                            <Link href={data?.link_url}>
                              <div>
                                <span>Know more</span>{" "}
                                <div className={style.arrow} />
                              </div>
                            </Link>
                          </div>
                        )}
                        {variant === "yellow" && (
                          <div className={style.secondary__icon}>
                            <div>
                              <span>Know more</span>{" "}
                              <div className={style.arrow} />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </Col>
                </Link>
                <Col
                  sm={12}
                  className={`d-block d-sm-block d-md-none d-xl-none`}
                >
                  <Accordion
                    defaultActiveKey="0"
                    flush
                    className={` ${variant}-variant`}
                  >
                    <Accordion.Item className={style.accordionItem}>
                      <Accordion.Button
                        className={
                          variant === "red"
                            ? style.accordionHeader1
                            : style.accordionHeader2
                        }
                      >
                        <div className={style.accordionTitle}>
                          {data?.title}
                        </div>
                      </Accordion.Button>
                      <Accordion.Body
                        className={
                          variant === "red"
                            ? style.accordionBody1
                            : style.accordionBody2
                        }
                      >
                        <div className={style.accordionHRLine}></div>
                        <div className={style.accordionDetails}>
                          {data?.description}
                        </div>
                        <div
                          className={
                            variant === "red"
                              ? style.verticalCard__icon
                              : style.secondary__icon
                          }
                          style={{
                            marginTop: "56px",
                            marginBottom: "56px",
                            paddingLeft: "0rem",
                          }}
                        >
                          <Link href={data?.link_url}>
                            <div className={style.mobile_span}>
                              <span>Know more</span>{" "}
                              <div className={style.arrow} />
                            </div>
                          </Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </React.Fragment>
            );
          })}
          {/* <Col
        md={4}
        className={
          variant === "red"
            ? "d-none d-md-flex d-xl-flex " + style.verticalCard
            : "d-none d-md-flex d-xl-flex " + style.secondary__verticalCard
        }
      >
        <div
          className={
            variant === "red"
              ? style.verticalCard__title
              : style.secondary__title
          }
        >
          Chatbot
        </div>
        <div
          className={
            variant === "red" ? style.div__primary : style.div__secondary
          }
        ></div>
        <div
          className={
            variant === "red"
              ? style.verticalCard__desc
              : style.secondary__desc
          }
        >
          We put efficiency at the center of the cogwheel of youroperational
          processes,with a virtual workforce,enabled by automation.
          <br />
          Learn how your businesscan transcend conventionalrule-based
          processes &amp;leverage the benefits of RPA.
          <div
            className={
              variant === "red"
                ? style.verticalCard__icon
                : style.secondary__icon
            }
          >
            <span>
              Know More <BsArrowRight className={style.arrow} />{" "}
            </span>
          </div>
        </div>
      </Col> */}
          {/* <Col
        md={4}
        className={
          variant === "red"
            ? "d-none d-md-flex d-xl-flex " + style.verticalCard
            : "d-none d-md-flex d-xl-flex " + style.secondary__verticalCard
        }
      >
        <div
          className={
            variant === "red"
              ? style.verticalCard__title
              : style.secondary__title
          }
        >
          Machine Learning
        </div>
        <div
          className={
            variant === "red" ? style.div__primary : style.div__secondary
          }
        ></div>
        <div
          className={
            variant === "red"
              ? style.verticalCard__desc
              : style.secondary__desc
          }
        >
          We put efficiency at the center of the cogwheel of youroperational
          processes,with a virtual workforce,enabled by automation.
          <br />
          Learn how your businesscan transcend conventionalrule-based
          processes &amp;leverage the benefits of RPA.
          <div
            className={
              variant === "red"
                ? style.verticalCard__icon
                : style.secondary__icon
            }
          >
            <span>
              Know More <BsArrowRight className={style.arrow} />{" "}
            </span>
          </div>
        </div>
      </Col> */}
          {/* <Col sm={12} className={`d-block d-sm-block d-md-none d-xl-none`}>
        <Accordion
          defaultActiveKey="0"
          flush
          className={` ${variant}-variant`}
        >
          <Accordion.Item className={style.accordionItem}>
            <Accordion.Button
              className={
                variant === "red"
                  ? style.accordionHeader1
                  : style.accordionHeader2
              }
            >
              <div className={style.accordionTitle}>Chatbot</div>
            </Accordion.Button>
            <Accordion.Body
              className={
                variant === "red"
                  ? style.accordionBody1
                  : style.accordionBody2
              }
            >
              <div className={style.accordionDetails}>
                {" "}
                We put efficiency at the center of the cogwheel of
                youroperational processes,with a virtual workforce,enabled
                by automation.
                <br />
                Learn how your businesscan transcend conventionalrule-based
                processes &amp;leverage the benefits of RPA.
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      <Col
        sm={12}
        className={`d-block d-sm-block d-md-none d-xl-none`}
        // className={
        //   variant === "red"
        //     ? "d-block d-sm-block d-md-none d-xl-none " +
        //       style.sm_red_col_padding
        //     : "d-block d-sm-block d-md-none d-xl-none " + style.sm_yellow_col_padding
        // }
      >
        <Accordion
          defaultActiveKey="0"
          flush
          className={` ${variant}-variant`}
        >
          <Accordion.Item className={style.accordionItem}>
            <Accordion.Button
              className={
                variant === "red"
                  ? style.accordionHeader1
                  : style.accordionHeader2
              }
            >
              <div className={style.accordionTitle}>Machine Learning</div>
            </Accordion.Button>
            <Accordion.Body
              className={
                variant === "red"
                  ? style.accordionBody1
                  : style.accordionBody2
              }
            >
              <div className={style.accordionDetails}>
                {" "}
                We put efficiency at the center of the cogwheel of
                youroperational processes,with a virtual workforce,enabled
                by automation.
                <br />
                Learn how your businesscan transcend conventionalrule-based
                processes &amp;leverage the benefits of RPA.
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default VerticalCards;
