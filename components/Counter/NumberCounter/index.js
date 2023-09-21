import React, { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { addMultiClasses } from "../../../common/common";
import { Row, Col } from "react-bootstrap";
import style from "./number.module.scss";

function NumberCounter({ draw, counts, backgroundColor, addsigncolor, type }) {
  useEffect(() => {}, [draw]);

  let npsvalue = "";
  counts.forEach((element) => {
    if (element.title === "NPS on Clutch") npsvalue = element.number;
  });

  // Refector and update this as per new case study-CasestudyStatistics component
  // remove this old static texts and read from strapi as per case study component
  const showPlus = [
    "Global Clientele",
    "Publications",
    "Professionals",
    "Projects Delivered",
    "Years of Services",
    "Years of Service",
    "Years of Experience",
  ];
  const showPercentage = ["Net Promoter Score"];
  return (
    // <Container md style={{ width: "auto" }}>
    <Row
      className={
        style.number_counter_row +
        " " +
        (type === "companystat" ? style.company_state_counter : "")
      }
    >
      {counts?.map((data, index) => {
        return (
          <React.Fragment key={data.id}>
            {type !== "companystat" ? (
              <Col md={2} sm={6} xs={6} xl={1} className={style.counter}>
                <div
                  className={
                    backgroundColor === "darkblue"
                      ? `${style.description} ${style.darkblue_description}`
                      : style.description
                  }
                >
                  <CountUp
                    start={0}
                    end={data?.number}
                    duration={2.75}
                    separator=" "
                    redraw={draw}
                    decimals={data?.number === npsvalue ? 1 : 0}
                    suffix={data?.number === npsvalue ? "/5" : ""}
                  />
                  {data?.number === 46 || data?.number === 96 ? (
                    <span
                      className={addMultiClasses([
                        style.addsign,
                        style.addsignFor_Responsive,
                      ])}
                      style={{
                        color: addsigncolor === "white" ? "#fff" : "#f05443",
                      }}
                    >
                      %
                    </span>
                  ) : data?.number >= 225 ||
                    data?.number >= 13 ||
                    data?.number >= 100 ? (
                    <span
                      className={addMultiClasses([
                        style.addsign,
                        style.addsignFor_Responsive,
                      ])}
                      style={{
                        color: addsigncolor === "white" ? "#fff" : "#f05443",
                      }}
                    >
                      +
                    </span>
                  ) : (
                    " "
                  )}
                </div>

                <div
                  className={
                    backgroundColor === "darkblue"
                      ? style.darkblue_subtitle
                      : style.subtitle
                  }
                >
                  {data?.title}
                </div>
              </Col>
            ) : (
              <Col md={6} sm={6} xs={12} className={style.companystat__row}>
                <div className={style.companystat__counter}>
                  <CountUp
                    start={0}
                    end={data?.number}
                    duration={2.75}
                    separator=" "
                    redraw={draw}
                    suffix={
                      showPlus.indexOf(data?.title) > -1
                        ? "+"
                        : showPercentage.indexOf(data?.title) > -1
                        ? "%"
                        : ""
                    }
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className={style.companystat__title}>{data?.title}</div>
              </Col>
            )}
          </React.Fragment>
        );
      })}
      {/* <Col className={style.counter}>
          <div className={style.description}>
            <CountUp
              start={0}
              end={30}
              duration={2.75}
              separator=" "
              redraw={draw}
            />
            <span className={style.addsign}>+</span>
          </div>

          <div className={style.subtitle}>Clientele</div>
        </Col> */}
      {/* <Col className={style.counter}>
          <div className={style.description}>
            <CountUp
              start={0}
              end={35}
              duration={2.75}
              separator=" "
              redraw={draw}
            />
            <span className={style.addsign}>+</span>
          </div>

          <div className={style.subtitle}>Publications</div>
        </Col>
        <Col className={style.counter}>
          <div className={style.description}>
            <CountUp
              start={0}
              end={75}
              duration={2.75}
              separator=" "
              redraw={draw}
            />
          </div>

          <div className={style.subtitle}>Professionals</div>
        </Col>
        <Col className={style.counter}>
          <div className={style.description}>
            <CountUp
              start={0}
              end={11}
              duration={2.75}
              separator=" "
              redraw={draw}
            />
          </div>

          <div className={style.subtitle}>Years of Service</div>
        </Col>
        <Col className={style.counter}>
          <div className={style.description}>
            <CountUp
              start={0}
              end={7}
              duration={2.75}
              separator=" "
              redraw={draw}
            />
          </div>

          <div className={style.subtitle}>Countries</div>
        </Col> */}
    </Row>
    // </Container>
  );
}

export default NumberCounter;
