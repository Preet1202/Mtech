import React from "react";
import style from "./display.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import WhiteBox from "../WhiteBox";
import { addMultiClasses } from "../../common/common";

function Display(props) {
  return (
    <Container fluid>
      {props?.variant === "primary" && (
        <Container
          className={addMultiClasses([
            style.display__primary,
            props?.fromCaseStudy ? style.for_casestudy : "",
          ])}
        >          {props?.data?.title?.length > 0 && (
            <div className={style.title} style={{ color: props?.titleColor }}>
              {props?.data?.title}
            </div>
          )}
          {props?.data?.richtext ? (
            <div
              className={style.description}
              style={{
                maxWidth: `${props?.descTextWidth}`,
                color: `${props?.descColor}`,
              }}
              dangerouslySetInnerHTML={{ __html: props?.data?.description }}
            ></div>
          ) : props?.data?.description ? (
            <div
              className={style.description}
              style={{ maxWidth: `${props?.descTextWidth}` }}
              dangerouslySetInnerHTML={{ __html: props?.data?.description }}
            ></div>
          ) : (
            ""
          )}

           {props?.data?.image && (
            <Row className={style.display__row}>
              {props?.data?.image?.data.map((image) => {
                return (
                  <Col md={5} key={image.id} className={style.display__image}>
                    <Image
                      priority
                      // src={URL + image.attributes?.url}
                      src={image?.attributes?.url}
                      width={380}
                      height={321}
                      layout="responsive"
                      objectFit="cover"
                      position="relative"
                      alt={image?.attributes?.name.split(".")[0]}
                    />
                  </Col>
                );
              })
              
              }
              </Row>
            )}
          
        </Container>
      )}
      {props?.variant === "primary_one" && (
        <Container className={style.display__primary_one}>
          <div className={style.title__primary_one}>{props?.data?.title}</div>
          <div className={style.primary_one_description}>
            {props?.data?.description}
          </div>
          <Row className={style.primary_one__row}>
            <WhiteBox
              variant={props?.variant}
              withoutBorder="true"
              whiteBoxData={props?.data?.white_box}
            />
          </Row>
        </Container>
      )}
      {props?.variant === "text" && (
        <Container
          className={
            props?.text_center === "true"
              ? style.display__primary_text_center
              : style.display__primary
          }
        >
          <h1
            className={
              props?.text_center === "true"
                ? style.text__center__title
                : style.text__title__clientsuccess
            }
          >
            {props?.title}
          </h1>
          {props?.description && (
            <div
              className={
                props?.text_center === "true"
                  ? style.text__center__description
                  : style.description__clientsuccess
              }
            >
              {props?.description}
            </div>
          )}
        </Container>
      )}
      {props?.variant === "backgroundText" && (
        <Container
          fluid
          className={
            props?.color === "violet"
              ? style.display__violet__background
              : props?.color === "white"
              ? style.display__white__background
              : style.display__white__singleimage__background
          }
        >
          <div
            className={style.text__title__clientsuccess}
            style={{ color: props?.color === "violet" ? "#FFFFFF" : "#262531" }}
          >
            {props?.title}
          </div>
          {props?.description && (
            <div
              className={
                props?.color === "violet"
                  ? style.display__violettext
                  : props?.color === "white"
                  ? style.display__whitetext
                  : style.description__clientsuccess
              }
              dangerouslySetInnerHTML={{ __html: props?.description }}
            ></div>
          )}
        </Container>
      )}
      {props?.variant === "onlytext" && (
        <Container
          fluid
          style={{
            background: props?.color === "orange" ? "#F05443" : "#FFFFFF",
            paddingBottom: "60px",
          }}
        >
          <Container>
            <h2
              className={style.onlytext__title}
              style={{
                color: props?.color === "orange" ? "#FFFFFF" : "#262531",
              }}
            >
              {" "}
              {props?.onlytextData?.title}
            </h2>
            <div
              className={style.onlytext__desc}
              dangerouslySetInnerHTML={{
                __html: props?.onlytextData?.description,
              }}
              style={{
                color: props?.color === "orange" ? "#FFFFFF" : "#262531",
              }}
            ></div>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default Display;
