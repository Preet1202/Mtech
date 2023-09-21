import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../common/common";
import style from "./ExpertiseCard.module.scss";
const ExpertiseCard = ({ expertiseData, color, type, ourpeople }) => {
  return (
    <>
      {type === "ourpeople" && (
        <Row
          className={addMultiClasses([
            style.devs__secondrow,
            style.for_hide_overflow,
          ])}
        >
          <h2
            style={{
              color: color === "violet" ? "#FFFFFF" : "#262531",
            }}
          >
            {expertiseData?.title}
          </h2>
          {ourpeople?.ourpeople_box?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                <Col md={3} sm={6} xs={6} className={style.devs__box}>
                  <Image
                    priority
                    src={data?.image?.data?.attributes?.url}
                    height={60}
                    width={60}
                    layout="fixed"
                  />
                  <h6
                    style={{
                      color: color === "violet" ? "#FFFFFF" : "#383838",
                    }}
                  >
                    {data?.title}
                  </h6>
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      )}
      {type === "expertise_block" && (
        <Row
          className={addMultiClasses([
            style.devs__secondrow,
            style.for_hide_overflow,
          ])}
        >
          <h2
            style={{
              color: color === "violet" ? "#FFFFFF" : "#262531",
            }}
          >
            {expertiseData?.title}
          </h2>

          {expertiseData?.expertise_box?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                <Col md={3} sm={6} xs={6} className={style.devs__box}>
                  <Image
                    priority
                    src={data?.image?.data?.attributes?.url}
                    height={60}
                    width={60}
                    layout="fixed"
                  />
                  <h6
                    style={{
                      color: color === "violet" ? "#FFFFFF" : "#383838",
                    }}
                  >
                    {data?.title}
                  </h6>
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default ExpertiseCard;
