import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import style from "./whitebox.module.scss";
import { addMultiClasses } from "../../common/common";
import Link from "next/link";
function WhiteBox(props) {
  const RenderHTML = (props) => (
    <div
      className={style.engagement__box__desc}
      dangerouslySetInnerHTML={{ __html: props.HTML }}
    ></div>
  );

  return (
    <>
      {props.variant === "primary" && (
        <Container>
          <Row
            className={style.white__section__row2}
            style={{
              paddingBottom: "3rem",
              borderRadius: `${props.borderradius}`,
            }}
          >
            <Col
              lg={4}
              md={4}
              sm={12}
              className={
                props.backgroundColor === "darkblue"
                  ? style.darkblue__row2img
                  : style.row2img
              }
            >
              <div data-aos="fade-up">
                <Image
                  // priority
                  // placeholder="blur"
                  // blurDataURL={props?.whiteBoxImage?.data?.attributes?.url}
                  src={props?.whiteBoxImage?.data?.attributes?.url}
                  layout="responsive"
                  height={303}
                  width={353}
                  objectFit="contain"
                  alt={props?.imgalt}
                />
              </div>
            </Col>
            {props?.whiteBoxData?.map((data, index) => {
              return (
                <Col
                  lg={4}
                  md={4}
                  sm={12}
                  className={
                    props.backgroundColor === "darkblue"
                      ? style.darkblue__row2col
                      : style.row2col
                  }
                  key={index}
                  style={{ borderRadius: `${props.borderradius}` }}
                >
                  <p>{data?.title}</p>
                  <div
                    className={
                      props.backgroundColor === "darkblue"
                        ? style.darkblue__row2div
                        : style.row2div
                    }
                  >
                    {data?.description}
                    <Link href={data?.link_url} key={index}>
                      <div className={style.knowmore_aliginment}>
                        <div className={style.knowmore_text}>Know more</div>{" "}
                        <div className={style.arrow_right}>
                          <Image
                            src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                            height="14px"
                            width="17px"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {props.variant === "secondary" && (
        <Container>
          <Row
            className={
              style.white__section__row2 +
              " " +
              style.white__section__row2__secondary
            }
          >
            {props?.whiteBoxData?.map((data, index) => {
              return (
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  className={style.features}
                  key={index}
                >
                  <div data-aos="fade-up">
                    <div className={style.whiteBox_image}>
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        height={90}
                        width={90}
                        objectFit="contain"
                        alt={data?.image?.data?.attributes?.name}
                      />
                    </div>
                    <p>{data?.title}</p>
                    <div
                      className={addMultiClasses([
                        style.row2div,
                        style.row2div__secondary,
                      ])}
                    >
                      {data?.description}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {props.variant === "services_secondary" && (
        <Container
        className={addMultiClasses([
          style.services_secondary_container,
          props?.parentPage === "newcasestudy" ? style.from_newcasestudy : "",
        ])}
      >
          <Row className={style.white__section__row2}>
            {props?.whiteBoxData
              ?.map((data, index) => {
                return (
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className={style.features}
                    key={index}
                  >
                    <div data-aos="fade-up">
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        layout="intrinsic"
                        height={60}
                        width={60}
                        objectFit="contain"
                      />
                      <h6 style={{ color: `${props?.textColor}` }}>
                        {data?.title}
                      </h6>
                      {data?.richText_description ? (
                        <div
                          className={style.row2div_services_secondary}
                          dangerouslySetInnerHTML={{
                            __html: data?.richText_description,
                          }}
                        />
                      ) : (
                        <div
                          style={{ color: `${props?.textColor}` }}
                          className={style.row2div_services_secondary}
                        >
                          {data?.description}
                        </div>
                      )}
                    </div>
                  </Col>
                );
              })
              .slice(0, 2)}
          </Row>
          <Row
            className={style.white__section__row2}
            style={{
              borderRadius: "0px",
              boxShadow: " 0 10px 5px 0 rgb(0 0 0 / 10%)",
            }}
          >
            {props?.whiteBoxData
              ?.map((data, index) => {
                return (
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className={style.features}
                    key={index}
                  >
                    <div data-aos="fade-up">
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        layout="intrinsic"
                        height={60}
                        width={60}
                        objectFit="contain"
                      />
                      <h6 style={{ color: `${props?.textColor}` }}>
                        {data?.title}
                      </h6>
                      {data?.richText_description ? (
                        <div
                          className={style.row2div_services_secondary}
                          dangerouslySetInnerHTML={{
                            __html: data?.richText_description,
                          }}
                        />
                      ) : (
                        <div
                          style={{ color: `${props?.textColor}` }}
                          className={style.row2div_services_secondary}
                        >
                          {data?.description}
                        </div>
                      )}
                    </div>
                  </Col>
                );
              })
              .slice(2, 4)}
          </Row>
          <Row
            className={style.white__section__row2 + " " + style.padding_space}
            style={{
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              boxShadow: " 0 3px 5px 0 rgb(0 0 0 / 10%)",
            }}
          >
            {props?.whiteBoxData
              ?.map((data, index) => {
                return (
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className={style.features}
                    key={index}
                  >
                    <div data-aos="fade-up">
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        layout="intrinsic"
                        height={60}
                        width={60}
                        objectFit="contain"
                      />
                      <h6 style={{ color: `${props?.textColor}` }}>
                        {data?.title}
                      </h6>
                      {data?.richText_description ? (
                        <div
                          className={style.row2div_services_secondary}
                          dangerouslySetInnerHTML={{
                            __html: data?.richText_description,
                          }}
                        />
                      ) : (
                        <div
                          style={{ color: `${props?.textColor}` }}
                          className={style.row2div_services_secondary}
                        >
                          {data?.description}
                        </div>
                      )}
                    </div>
                  </Col>
                );
              })
              .slice(4, 6)}
          </Row>
          {props?.whiteBoxData?.length > 6 && (
            <>
              <Row
                className={
                  style.white__section__row2 + " " + style.padding_space
                }
                style={{
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: " 0 3px 5px 0 rgb(0 0 0 / 10%)",
                }}
              >
                {props?.whiteBoxData
                  ?.map((data, index) => {
                    return (
                      <Col
                        lg={6}
                        md={6}
                        sm={12}
                        className={style.features}
                        key={index}
                      >
                        <div data-aos="fade-up">
                          <Image
                            priority
                            src={data?.image?.data?.attributes?.url}
                            layout="intrinsic"
                            height={60}
                            width={60}
                            objectFit="contain"
                          />
                          <h6 style={{ color: `${props?.textColor}` }}>
                            {data?.title}
                          </h6>
                          {data?.richText_description ? (
                            <div
                              className={style.row2div_services_secondary}
                              dangerouslySetInnerHTML={{
                                __html: data?.richText_description,
                              }}
                            />
                          ) : (
                            <div
                              style={{ color: `${props?.textColor}` }}
                              className={style.row2div_services_secondary}
                            >
                              {data?.description}
                            </div>
                          )}
                        </div>
                      </Col>
                    );
                  })
                  .slice(6, 8)}
              </Row>
            </>
          )}
          {props?.whiteBoxData?.length > 8 && (
            <Row
              className={style.white__section__row2 + " " + style.padding_space}
              style={{
                borderBottomLeftRadius: "4px",
                borderBottomRightRadius: "4px",
                boxShadow: " 0 3px 5px 0 rgb(0 0 0 / 10%)",
              }}
            >
              {props?.whiteBoxData
                ?.map((data, index) => {
                  return (
                    <Col
                      lg={6}
                      md={6}
                      sm={12}
                      className={style.features}
                      key={index}
                    >
                      <div data-aos="fade-up">
                        <Image
                          priority
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={60}
                          width={60}
                          objectFit="contain"
                        />
                        <h6 style={{ color: `${props?.textColor}` }}>
                          {data?.title}
                        </h6>
                        {data?.richText_description ? (
                          <div
                            className={style.row2div_services_secondary}
                            dangerouslySetInnerHTML={{
                              __html: data?.richText_description,
                            }}
                          />
                        ) : (
                          <div
                            style={{ color: `${props?.textColor}` }}
                            className={style.row2div_services_secondary}
                          >
                            {data?.description}
                          </div>
                        )}
                      </div>
                    </Col>
                  );
                })
                .slice(8, 10)}
            </Row>
          )}
        </Container>
      )}
      {props.variant === "primary_one" && (
        <Container className={style.primary_1_container}>
          <Row
            className={
              props.withoutBorder === "true"
                ? `${style.white__section__row2} ${style.white__section__row2__withoutShadow} + g-0`
                : style.white__section__row2
            }
            style={{
              paddingBottom: "3rem",
              borderRadius: `${props.borderradius}`,
            }}
          >
            {props?.whiteBoxData?.map((data, index) => {
              return (
                <Col
                  lg={4}
                  md={4}
                  sm={12}
                  className={`${style.row2col} ${style.primary_one_row1col} ${style.translate}`}
                  key={data?.id}
                >
                  <div data-aos="fade-up" className={style.fadeup}>
                    <Image
                      priority
                      // src={URL + data.image.data.attributes.url}
                      src={data?.image?.data?.attributes?.url}
                      height={66}
                      width={66}
                      layout="fixed"
                      alt={data?.image?.data?.attributes?.name.split(".")[0]}
                      // className={style.translate}
                    />

                    <p>{data?.title}</p>
                    <div className={style.primary_one_row2div}>
                      {data?.description}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {props.variant === "primary_two" && (
        <Container>
          <Row
            className={`${style.white__section__row2} ${style.primary_two_white__section__row2}`}
            style={{
              paddingBottom: "3rem",
              borderRadius: `${props.borderradius}`,
            }}
          >
            {props.whiteBoxData?.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className={`${style.row2col} ${style.primary_one_row1col}`}
                  >
                    <div data-aos="fade-up">
                      <Row style={{ margin: "0px" }}>
                        <Col lg={4}>
                          <Image
                            priority
                            // src={URL + data.image.data.attributes.url}
                            src={data?.image?.data?.attributes?.url}
                            height={66}
                            width={66}
                            layout="fixed"
                            alt={data?.image_alt_text}
                          />
                        </Col>
                        <Col lg={8}>
                          <p className={style.title}>{data?.title}</p>
                          <div className={style.primary_two_row2div}>
                            {data?.description}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </Container>
      )}

      {props.variant === "engagement_box" && (
        <>
          <Container className=" d-none d-sm-none d-md-block d-xl-block">
            <Row className={style.engagement__row}>
              {props?.engagementboxdata.map((data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <Col md={3} sm={12} className={style.engagement__box}>
                      <div
                        style={{
                          borderLeft:
                            props.color === "primary"
                              ? "6px solid #F05443"
                              : "6px solid #FEBE10",
                          height: props?.height_cto ? "122px" : "",
                        }}
                      >
                        <h3>{data?.title}</h3>
                      </div>
                      <RenderHTML HTML={data?.description} />
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Container>
          <Container className="  d-sm-block d-md-none d-xl-none">
            <Row className={style.engagement__row}>
              {props?.engagementboxdata.map((data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <Col md={3} sm={12} className={style.engagement__box}>
                      <div
                        style={{
                          borderLeft:
                            props.color === "primary"
                              ? "6px solid #F05443"
                              : "6px solid #FEBE10",
                        }}
                      >
                        <h3>{data.title}</h3>

                        <RenderHTML HTML={data?.description} />
                      </div>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default WhiteBox;
