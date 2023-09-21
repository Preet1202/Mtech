import React from "react";
import style from "./versus.module.scss";
import { addMultiClasses } from "../../common/common";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Versus = ({ color, versusData, variant }) => {
  const For_description_versus = versusData?.description
    ? ""
    : style.For_title_padding;
  return (
    <Container
      fluid
      className={
        color === "orange"
          ? style.versus__container__orange
          : style.versus__container
      }
    >
      <Container>
        <h2
          className={addMultiClasses([
            style.versus__title,
            For_description_versus,
          ])}
        >
          {versusData?.title}
        </h2>
        <div
          className={style.versus__description}
          dangerouslySetInnerHTML={{
            __html: versusData?.description,
          }}
        ></div>

        <Container
          fluid
          className={
            color === "orange"
              ? style.versus__wrapper__orange
              : style.versus__wrapper
          }
        >
          <Row className={style.versus__firstrow}>
            <Col className={style.emtpycol}></Col>
            <Col className={style.mtl}>{versusData?.nameA}</Col>
            <Col className={style.fl}>{versusData?.nameB}</Col>
            {versusData?.nameC && (
              <Col className={style.fl}>{versusData?.nameC}</Col>
            )}
          </Row>

          {versusData?.versus_box?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                {data?.pointC !== null && (
                  <Row className={style.versus__row}>
                    <Col className={style.versus__headings__triplecols}>
                      {data?.title}
                    </Col>
                    <Col className={style.versus__points__triplecols}>
                      {data?.pointA}
                    </Col>
                    <Col className={style.versus__points__triplecols}>
                      {data?.pointB}
                    </Col>
                    <Col className={style.versus__points__triplecols}>
                      {data?.pointC}
                    </Col>
                  </Row>
                )}
                {data?.pointC === null && (
                  <Row className={style.versus__row}>
                    <Col className={style.versus__headings}>{data?.title}</Col>

                    <Col className={style.versus__points__mtl}>
                      {data?.pointA}
                    </Col>
                    <Col className={style.versus__points__freelance}>
                      {data?.pointB}
                    </Col>
                  </Row>
                )}
                {/* <Row className={style.versus__row}>
                  <Col className={style.versus__headings}>{data?.title}</Col>
               
                  <Col className={style.versus__points__mtl}>
                    {data?.pointA}
                  </Col>
                  <Col className={style.versus__points__freelance}>
                    {data?.pointB}
                  </Col>
                </Row> */}
                {/* mobile component */}
                <Row
                  className={addMultiClasses([
                    style.versus__row__accordion,
                    "For_versus_service",
                  ])}
                  key={data?.index}
                >
                  <Accordion>
                    <Accordion.Item
                      eventKey={data?.id}
                      style={{ borderRadius: "4px" }}
                    >
                      <Accordion.Header bsPrefix="versus__accordion__header">
                        {data?.title}
                      </Accordion.Header>
                      <Accordion.Body bsPrefix={style.accordion__body}>
                        <div className={style.acc__wrapper}>
                          <div className={style.acc__title}>
                            {versusData?.nameA}
                          </div>

                          <div className={style.acc__desc}>{data?.pointA}</div>
                        </div>
                        <div className={style.acc__wrapper}>
                          <div className={style.acc__title}>
                            {versusData?.nameB}
                          </div>
                          <div className={style.acc__desc}>{data?.pointB}</div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </React.Fragment>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default Versus;
