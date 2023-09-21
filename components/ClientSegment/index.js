import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./clientsegment.module.scss";

const ClientSegment = ({ color, csData }) => {
  return (
    <Container
      fluid
      className={
        color === "orange-white"
          ? style.cs__orangewhite
          : color === "orange"
          ? style.cs__orange
          : style.cs__white
      }
    >
      <h2>{csData?.title}</h2>
      <Container>
        <Row className={style.cs__row} style={{ margin: "0px" }}>
          {csData?.ClientSegment_box.map((data) => {
            return (
              <React.Fragment key={data?.id}>
                <Col md={6} sm={12} className={style.cs__box}>
                  <h3>{data?.title}</h3>
                  <div
                    className={style.cs__box__desc}
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  ></div>
                </Col>
              </React.Fragment>
            );
          })}

          {/* <Col md={6} sm={12} className={style.cs__box}>
            <h3>Startups / SME</h3>
            <div className={style.cs__box__desc}>
              Build from scratch, improve what you have, or do something else
              entirely - we’ve got you covered. ○○ Build Something New Map out
              your idea, figure out what to build, and collaborate to bring MVP
              to life or a solid 1.0. ○○ Improve What You Have Build a new
              version of your existing app or add new features, with us
              integrating with your team. ○○ Discover What You Need Not sure
              where to start? We also offer code and architecture reviews,
              strategic planning, team training, and more.
            </div>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default ClientSegment;
