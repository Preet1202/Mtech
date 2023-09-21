import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addMultiClasses } from "../../common/common";
import style from "./counter.module.scss";
import NumberCounter from "./NumberCounter";

function Counter({ draw, counterData, backgroundColor, variant, mb }) {
  const firstMemberImage =
    counterData?.members?.data[0]?.attributes?.formats?.small?.url ||
    counterData?.members?.data[0]?.attributes?.formats?.medium?.url ||
    counterData?.members?.data[0]?.attributes?.formats?.large?.url ||
    counterData?.members?.data[0]?.attributes?.url;
  const secondMemberImage =
    counterData?.members?.data[1]?.attributes?.formats?.small?.url ||
    counterData?.members?.data[1]?.attributes?.formats?.medium?.url ||
    counterData?.members?.data[1]?.attributes?.formats?.large?.url ||
    counterData?.members?.data[1]?.attributes?.url;
  const thirdMemberImage =
    counterData?.members?.data[2]?.attributes?.formats?.small?.url ||
    counterData?.members?.data[2]?.attributes?.formats?.medium?.url ||
    counterData?.members?.data[2]?.attributes?.formats?.large?.url ||
    counterData?.members?.data[2]?.attributes?.url;
  const forthMemberImage =
    counterData?.members?.data[3]?.attributes?.formats?.small?.url ||
    counterData?.members?.data[3]?.attributes?.formats?.medium?.url ||
    counterData?.members?.data[3]?.attributes?.formats?.large?.url ||
    counterData?.members?.data[3]?.attributes?.url;
  useEffect(() => {}, [draw]);
  return (
    <>
      {variant === "noimage" ? (
        <Container fluid={+true} className={style.noimage__container}>
          <Row className={style.noimage__row}>
            <div className={style.noimage__title}>{counterData?.title}</div>
            <div className={style.noimage__desc}>
              {" "}
              {counterData?.description}
            </div>
            <NumberCounter
              draw={draw}
              counts={counterData?.count}
              backgroundColor={backgroundColor}
              addsigncolor="white"
            />
          </Row>
        </Container>
      ) : variant === "companystat" ? (
        <Container fluid className={style.companystat}>
          <Container>
            <Row className={style.companystat__row}>
              <Col
                xl={{ span: 6, order: 1 }}
                md={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                xs={{ span: 12, order: 2 }}
                lg={{ span: 6, order: 1 }}
              >
                <NumberCounter
                  draw={draw}
                  counts={counterData?.statistics}
                  backgroundColor={backgroundColor}
                  addsigncolor="white"
                  type="companystat"
                />
              </Col>
              <Col
                lg={{ span: 6, order: 2 }}
                md={{ span: 12, order: 1 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
                xl={{ span: 6, order: 2 }}
                className={style.companystat__img_col}
              >
                <div className={style.companystat__boxwrapper}>
                  <div
                    className={[style.box, style.item1].join(" ")}
                    style={{
                      backgroundImage: `url(${firstMemberImage})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  <div
                    className={[style.box, style.item2].join(" ")}
                    style={{
                      backgroundImage: `url(${secondMemberImage})`,
                      backgroundPosition: "center",

                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div
                    className={[style.box, style.item3].join(" ")}
                    style={{
                      backgroundImage: `url(${thirdMemberImage})`,
                      backgroundPosition: "center",

                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div
                    className={[style.box, style.item4].join(" ")}
                    style={{
                      backgroundImage: `url(${forthMemberImage})`,
                      backgroundPosition: "center",

                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>

                {/* mobile screen */}
                <div className={style.companystat__mobile__div}>
                  <div className={style.companystat__mobile}>
                    <div
                      className={style.mobile__box}
                      style={{
                        backgroundImage: `url(${firstMemberImage})`,
                        backgroundPosition: "center",

                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className={style.mobile__box}
                      style={{
                        backgroundImage: `url(${secondMemberImage})`,
                        backgroundPosition: "center",

                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className={style.mobile__box}
                      style={{
                        backgroundImage: `url(${thirdMemberImage})`,
                        backgroundPosition: "center",

                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className={style.mobile__box}
                      style={{
                        backgroundImage: `url(${forthMemberImage})`,
                        backgroundPosition: "center",

                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      ) : (
        <Container
          fluid={+true}
          className={
            backgroundColor === "darkblue"
              ? `${style.darkblue__section} ${addMultiClasses([style.counter])}`
              : `${addMultiClasses([style.counter])}`
          }
          style={{ marginBottom: mb }}
        >
          <div>
            <Col className={style.content_column}>
              {/* <div className={style.title}>{counterData?.title}</div> */}
              {counterData?.title && (
                <div
                  className={
                    backgroundColor === "darkblue"
                      ? `${style.title} ${style.darkblue_title}`
                      : style.title
                  }
                >
                  {counterData?.title}
                </div>
              )}
              {/* <div
                className={
                  backgroundColor === "darkblue"
                    ? `${style.title} ${style.darkblue_title}`
                    : style.title
                }
              >
                {counterData?.title}
              </div> */}
              {counterData?.description && (
                <div
                  className={
                    backgroundColor === "darkblue"
                      ? `${style.desc} ${style.darkblue_desc}`
                      : style.desc
                  }
                >
                  {backgroundColor === "darkblue" && (
                    <div className={style.darkblue_description}>
                      {counterData?.description}
                    </div>
                  )}
                  {backgroundColor !== "darkblue" && (
                    <div>{counterData?.description}</div>
                  )}
                </div>
              )}
              <NumberCounter
                draw={draw}
                counts={counterData?.count}
                backgroundColor={backgroundColor}
                addsigncolor={
                  backgroundColor === "darkblue" ? "white" : "orange"
                }
              />
            </Col>
          </div>
        </Container>
      )}
    </>
  );
}

export default Counter;
