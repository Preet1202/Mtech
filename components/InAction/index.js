import React from "react";
import Image from "next/image";
import { Container, Col } from "react-bootstrap";
// import { BsArrowRight } from "react-icons/bs";
import style from "./inaction.module.scss";

export default function InAction({ inActionData }) {
  let backgroundColor = "#262531";
  let counter = 0;
  return (
    <Container
      fluid
      className={style.inaction__container__fluid}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Col className="d-none d-md-block d-lg-block">
        <Container className={style.inaction__container}>
          <div className={style.inaction__container__title}>
            {inActionData?.title}
          </div>
          <div className={style.inaction__container__desc}>
            {inActionData?.description}
          </div>
        </Container>
        <Container fluid>
          <div className={style.inaction__container__row}>
            {inActionData?.in_action_card?.map((data) => {
              {
                counter = counter + 1;
              }
              return (
                <React.Fragment key={data?.id}>
                  <div className={style.actions} key={data?.id}>
                    <div className={style.actions_background}>
                      <Image
                        priority
                        className={style.actions__img}
                        src={`${data?.image?.data?.attributes?.url}`}
                        layout="intrinsic"
                        height={178}
                        width={185}
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                    </div>
                    <p className={style.actionTitle}>{data?.title}</p>
                  </div>
                  {counter < 5 ? (
                    <div className={style.arrowRight}>
                      <Image
                        priority
                        src={
                          "https://cdn-gcp.new.marutitech.com/process_flow_right_arrow_78338587ba.svg"
                        }
                        layout="intrinsic"
                        height={61}
                        width={61}
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Container>
      </Col>

      {/* <Row xs={1} className={style.row__mobileView}> */}
      <Col className="d-md-none">
        <Container fluid className={style.inaction__container__mobileView}>
          <div className={style.inaction__container__title__mobileView}>
            {inActionData?.title}
          </div>
          <div className={style.inaction__container__desc__mobileView}>
            {inActionData?.description}
          </div>
          <div className={style.flex_mobile_view}>
            {inActionData?.in_action_card?.map((data) => {
              {
                counter = counter + 1;
              }
              return (
                <React.Fragment key={data?.id}>
                  <div className={style.actions} key={data?.id}>
                    <div className={style.actions_background__mobileView}>
                      <div className={style.actions_img}>
                        <Image
                          priority
                          src={`${data?.image?.data?.attributes?.url}`}
                          layout="intrinsic"
                          height={111}
                          width={107}
                          alt={data?.image?.data?.attributes?.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.actionTitle__mobileView}>
                    {data?.title}
                  </div>
                  {counter > 5 && counter < 10 ? (
                    <div className={style.arrowDown}>
                      <Image
                        priority
                        src={
                          "https://cdn-gcp.new.marutitech.com/process_flow_right_arrow_78338587ba.svg"
                        }
                        layout="intrinsic"
                        height={56.25}
                        width={56.25}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Container>
      </Col>
      {/* </Row> */}
    </Container>
  );
}
