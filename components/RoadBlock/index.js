import React from "react";
import style from "./roadblock.module.scss";
import { Col, Container, Row } from "react-bootstrap";

function RoadBlock(props) {
  let data = props.roadblock;
  let variant = props.variant;

  return (
    <>
      {props.type === "teamsweoffer" ? (
        <Container
          fluid
          style={{
            backgroundColor:
              variant === "white"
                ? "#FFFFFF"
                : variant === "violet"
                ? "#262531"
                : variant === "red"
                ? "#F05443"
                : variant === "nocolor"
                ? "#262531"
                : "",
            paddingTop: "80px",
            paddingBottom: "80px",
            // marginTop: props?.mt,
          }}
          className={style.teamsweoffer__maincontainer}
        >
          <Container>
            <h2
              className={style.teamsweoffer__title}
              style={{
                color:
                  variant === "white"
                    ? "#262531"
                    : variant === "violet"
                    ? "#FFFFFF"
                    : variant === "red"
                    ? "#FFFFFF"
                    : "#FEBE10",
              }}
            >
              {data?.Title}
            </h2>
            <Row className={style.teamsweoffer__row}>
              {props?.roadblock?.RoadBox?.map((data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <Col
                      md={4}
                      sm={12}
                      className={style.teamsweoffer__box}
                      style={{
                        backgroundColor:
                          variant === "white"
                            ? "#262531"
                            : variant === "violet"
                            ? "#FEBE10"
                            : variant === "red"
                            ? "#262531"
                            : "",
                        boxShadow:
                          variant === "white" ||
                          variant === "violet" ||
                          variant === "red"
                            ? "0px 2px 5px rgba(0, 0, 0, 0.1)"
                            : "",
                      }}
                    >
                      <h3
                        style={{
                          color:
                            variant === "white"
                              ? "#FEBE10"
                              : variant === "violet"
                              ? "#262531"
                              : variant === "red"
                              ? "#FFFFFF"
                              : "#FEBE10",
                          borderBottom:
                            variant === "white"
                              ? " 6px solid #FEBE10"
                              : variant === "violet"
                              ? " 6px solid #262531"
                              : variant === "red"
                              ? "6px solid #FFFFFF"
                              : "6px solid #FEBE10",
                        }}
                      >
                        {data?.Title}
                      </h3>
                      <div
                        className={style.teamsweoffer__box__desc}
                        style={{
                          color:
                            variant === "white"
                              ? "#FFFFFF"
                              : variant === "violet"
                              ? "#383838"
                              : variant === "red"
                              ? "#FFFFFF"
                              : "#FFFFFF",
                        }}
                        dangerouslySetInnerHTML={{ __html: data?.Description }}
                      ></div>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Container>
        </Container>
      ) : (
        <Container
          fluid
          className={
            variant === "Yellow"
              ? style.roadblock__yellow__container
              : variant === "Orange"
              ? style.roadblock__orange__container
              : style.roadblock__violet__container
          }
        >
          <div className={style.roadblock__content}>
            {data?.Title && (
              <div
                className={style.roadblock__title}
                style={{
                  color:
                    variant === "Yellow"
                      ? "#262531"
                      : variant === "Orange"
                      ? "#FFFFFF"
                      : "#FFFFFF",
                }}
              >
                {data?.Title}
              </div>
            )}
            {data?.Description && (
              <div
                className={style.roadblock__description}
                style={{
                  color:
                    variant === "Yellow"
                      ? "#383838"
                      : variant === "Orange"
                      ? "#FFFFFF"
                      : "#FFFFFF",
                }}
              >
                {data?.Description}
              </div>
            )}
          </div>
          <Row
            className={style.roadblock__row}
            // style={{
            //   paddingTop: `${data?.Title} !== "undefined"` ? "80px" : "120px",
            // }}
          >
            {props?.roadblock?.RoadBox?.map((box) => {
              return (
                <React.Fragment key={box.id}>
                  <Col
                    md={6}
                    sm={12}
                    className={style.roadblock__box}
                    style={{
                      backgroundColor:
                        variant === "Yellow"
                          ? "#262531"
                          : variant === "Orange"
                          ? "#262531"
                          : "#FFFFFF",
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2
                      style={{
                        color:
                          variant === "Yellow"
                            ? "#FEBE10"
                            : variant === "Orange"
                            ? "#FEBE10"
                            : "#262531",
                        borderBottom:
                          variant === "Yellow"
                            ? " 6px solid #FEBE10"
                            : variant === "Orange"
                            ? " 6px solid #FEBE10"
                            : "6px solid #F05443",
                      }}
                    >
                      {box?.Title}
                    </h2>
                    <div
                      className={style.roadblock__box__desc}
                      style={{
                        color:
                          variant === "Yellow"
                            ? "#FFFFFF"
                            : variant === "Orange"
                            ? "#FFFFFF"
                            : "#383838",
                      }}
                      dangerouslySetInnerHTML={{ __html: box?.Description }}
                    ></div>
                    {/* <Link href={box?.link_url}>
                  <div className={style.arrow__block}>
                    <div className={style.arrow__title}>{box?.link_name}</div>
                    <div className={style.arrow_right}>
                      <Image
                        src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                        height="14px"
                        width="17px"
                      />
                    </div>
                  </div>
                </Link> */}
                  </Col>
                </React.Fragment>
              );
            })}
            {/* <Col md={6} sm={12} className={style.roadblock__box}>
          <h2>Your roadblock</h2>
          <p>
            Your product offerings are not up to date with technological
            advancements and market competition. The pressure to do it all:
            Accommodating user feedback in your product takes never-ending
            development time. The pressure to do it all: ○ Withstanding
            competition ○ Ensuring a continuously evolving product ○ Increasing
            profits ○ Accelerating time-to-market is getting the better of your
            mental peace.
          </p>
        </Col> */}
          </Row>
        </Container>
      )}
    </>
  );
}

export default RoadBlock;
