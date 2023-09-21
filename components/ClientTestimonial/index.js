import React, { useState } from "react";
import style from "./clienttestimonial.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Buttons from "../Button";

const ClientTestimonial = (props) => {
  const [showReadMoreButton, setShowReadMoreButton] = useState(true);
  return (
    <Container className={style.newct__container}>
      <Row style={{ margin: "0px" }}>
        <Col className={style.ct__left} md={5}>
          <h2>{props?.newCTData?.title}</h2>
          <h6>{props?.newCTData?.description}</h6>
          <div className={style.ct__btn}>
            {props?.newCTData?.button && (
              <Buttons
                variant={"secondary_animated"}
                name={props?.newCTData?.button?.title}
                url={props?.newCTData?.button?.url}
                // id={data?.button?.button_id}
                // url_type={data?.button?.url_type}
              />
            )}
          </div>
        </Col>
        <Col className={style.ct__right} md={7}>
          {props?.newCTData?.ClientBox?.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div
                  className={
                    style.review__wrapper +
                    " " +
                    (showReadMoreButton ? style.show_more : "")
                  }
                >
                  {data?.logo?.data?.attributes && (
                    <Image
                      priority={true}
                      src={data?.logo?.data?.attributes?.url}
                      width={data?.logo?.data?.attributes?.width}
                      height={52}
                      layout="fixed"
                      // objectFit="contain"
                      alt={data?.logo?.data?.attributes?.alternativeText}
                    />
                  )}
                  <div
                    className={style.review__text}
                    dangerouslySetInnerHTML={{
                      __html: data.review,
                    }}
                  ></div>
                  <div className={style.review__client}>
                    <Image
                      priority={true}
                      src={data?.reviewer_img?.data?.attributes?.url}
                      width={87}
                      height={87}
                      className={style.client__image}
                      alt={
                        data?.reviewer_img?.data?.attributes?.alternativeText
                      }
                    />
                    <div>
                      <div className={style.client__name}>
                        {data?.reviewer_name}
                      </div>
                      <div className={style.client__designation}>
                        {data?.reviewer_designation}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}

          <div className={style.read_more_button}>
            <span
              className={style.see_button_text}
              onClick={() => setShowReadMoreButton(!showReadMoreButton)}
            >
              <>
                {showReadMoreButton ? "See More" : "See Less"}
                <span
                  className={
                    showReadMoreButton ? style.arrow_down : style.arrow_up
                  }
                >
                  <Image
                    src="https://cdn-gcp.new.marutitech.com/arrow_down_02649e7955.svg"
                    height="12px"
                    width="17px"
                    priority
                  />
                </span>
              </>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientTestimonial;
