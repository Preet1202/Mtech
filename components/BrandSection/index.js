import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import style from "./brandsection.module.scss";
import { addMultiClasses } from "../../common/common";

function BrandSection({
  variant,
  brandData,
  mt,
  columns,
  service,
  paddingBottom,
  color,
  addExtraPadding = false,
  fromPodcast = false,
}) {
  const addExtraPaddingClass = addExtraPadding ? style.extraPaddingAddded : "";
  const variantClass =
    variant === "primary" ? style.brand__primary : style.brand__secondary;
  return (
    <>
      {(variant === "primary" || variant === "secondary") && (
        <Container
          fluid
          className={addMultiClasses([variantClass, addExtraPaddingClass])}
          // style={{ marginTop: `${mt}` }}
          // style={{ paddingTop }}
        >
          <Container fluid className={style.brand__container}>
            <div className={style.brand__container__title}>
              {brandData?.title}
            </div>
            <Container>
              <Row className={style.brand__container__row}>
                {!fromPodcast &&
                  brandData?.brand_logo.map((data) => {
                    return (
                      <React.Fragment key={data?.id}>
                        <Col
                          className={style.brand__itembox}
                          md={3}
                          sm={6}
                          xs={6}
                        >
                          <div
                            className={style.image__wrapper}
                            // data-aos="fade-up"
                            title={data?.tooltip}
                          >
                            <Image
                              // priority
                              // placeholder="blur"
                              // blurDataURL={data?.image?.data?.attributes?.url}
                              src={data?.image?.data?.attributes?.url}
                              layout="intrinsic"
                              height={data?.image?.data?.attributes?.height}
                              width={data?.image?.data?.attributes?.width}
                              alt={data?.image_alt_text}
                            />
                          </div>
                        </Col>
                      </React.Fragment>
                    );
                  })}
                {fromPodcast &&
                  brandData?.images?.data?.map((data) => {
                    return (
                      <React.Fragment key={data?.id}>
                        <Col
                          className={style.brand__itembox}
                          md={3}
                          sm={6}
                          xs={6}
                        >
                          <div
                            className={style.image__wrapper}
                            // data-aos="fade-up"
                            title={data?.tooltip}
                          >
                            <Image
                              src={data?.attributes?.url}
                              layout="intrinsic"
                              height={data?.attributes?.height}
                              width={data?.attributes?.width}
                              alt={data?.image_alt_text}
                            />
                          </div>
                        </Col>
                      </React.Fragment>
                    );
                  })}
              </Row>
            </Container>
          </Container>
        </Container>
      )}
      {(variant === "primary_other" || variant === "primary_other_white") && (
        <Container
          fluid
          className={
            variant === "primary_other"
              ? style.brand__container__primary_other
              : style.brand__container__primary_other_white
          }
        >
          <Container>
            <div
              className={style.brand__container__title}
              style={{ color: variant !== "primary_other" ? "#4a4a4a" : "" }}
            >
              {brandData?.title}
            </div>
            <Row style={{ margin: "0px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {brandData?.brand_logo
                  .map((data) => {
                    return (
                      <div
                        // data-aos="fade-up"
                        title={data?.tooltip}
                        key={data?.id}
                        className={style.fade}
                      >
                        <Image
                          priority
                          // src={URL + data?.image?.data?.attributes?.url}
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={150}
                          width={150}
                          alt={data?.image_alt_text}
                        />
                      </div>
                    );
                  })
                  .slice(0, 3)}
              </div>
            </Row>
            <Row style={{ margin: "0px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  paddingBottom: "4rem",
                }}
              >
                {brandData?.brand_logo
                  .map((data) => {
                    return (
                      <div
                        key={data?.id}
                        // data-aos="fade-up"
                        title={data?.tooltip}
                        className={style.fade}
                      >
                        <Image
                          priority
                          // src={URL + data?.image?.data?.attributes?.url}
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={150}
                          width={150}
                          alt={data?.image_alt_text}
                        />
                      </div>
                    );
                  })
                  .slice(3, 6)}
              </div>
            </Row>
          </Container>
        </Container>
      )}

      {variant === "services_primary" && (
        <Container
          fluid
          className={
            color === "violet-white"
              ? style.violetwhitebg
              : color === "violet-orange"
              ? style.violetorangebg
              : style.brand__primary + " " + style.services__primary
          }
        >
          <Container className={style.brand__container}>
            <div className={style.brand__container__title1}>
              {brandData?.title}
            </div>
            {brandData?.brand_logo?.length === 3 && (
              <Row
                className={
                  "d-none d-md-none d-lg-flex d-xl-flex " +
                  style.brand__container__row__services
                }
              >
                <div className={style.brand__container__row2}>
                  {brandData?.brand_logo
                    .map((data, index) => {
                      return (
                        <div
                          className={
                            style.services__column +
                            " " +
                            style.services_brand_container
                          }
                          key={data?.id}
                        >
                          {/* <div data-aos="fade-up">
                            <Image priority
                              src={data?.image?.data?.attributes?.url}
                              layout="intrinsic"
                              height={150}
                              width={150}
                              className={style.images}
                              alt="services brands"
                            />
                          </div> */}

                          <div
                            // data-aos="fade-up"
                            style={{ width: "150px", height: "150px" }}
                            title={data?.tooltip}
                            className={style.fade}
                          >
                            <Image
                              priority
                              src={data?.image?.data?.attributes?.url}
                              layout="intrinsic"
                              height={150}
                              width={150}
                              className={style.images}
                              alt={data?.image_alt_text}
                            />
                          </div>
                        </div>
                      );
                    })
                    .slice(0, brandData?.brand_logo?.length)}
                </div>
              </Row>
            )}
            {brandData?.brand_logo?.length > 3 &&
              service == "NATURAL LANGUAGE PROCESSING" && (
                <>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <div className={style.brand__container__row2}>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 3)}
                    </div>
                  </Row>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <div className={style.brand__container__row2}>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(3, brandData?.brand_logo?.length)}
                    </div>
                  </Row>
                  <Row
                    className={
                      "d-flex d-md-flex d-lg-none d-xl-none " +
                      style.brand__container__row
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                title={data?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 3)}
                    </React.Fragment>
                  </Row>
                  <Row
                    className={
                      "d-flex d-md-flex d-lg-none d-xl-none " +
                      style.brand__container__row2
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(3, brandData?.brand_logo?.length)}
                    </React.Fragment>
                  </Row>
                </>
              )}
            {brandData?.brand_logo?.length > 3 &&
              (service == "DEVOPS" || service == "MACHINE LEARNING") && (
                <>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 4)}
                    </React.Fragment>
                  </Row>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <div className={style.brand__container__row2}>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column__ml +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={
                                  data?.image?.data?.attributes?.tooltip ||
                                  data?.tooltip
                                }
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(4, 8)}
                    </div>
                  </Row>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <div className={style.brand__container__row2}>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column__ml +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={
                                  data?.image?.data?.attributes?.tooltip ||
                                  data?.tooltip
                                }
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(8, brandData?.brand_logo?.length)}
                    </div>
                  </Row>
                </>
              )}
            {brandData?.brand_logo?.length > 3 &&
              service !== "NATURAL LANGUAGE PROCESSING" &&
              service !== "MACHINE LEARNING" &&
              service !== "DEVOPS" && (
                <>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={
                                  data?.image?.data?.attributes?.tooltip ||
                                  data?.tooltip
                                }
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 4)}
                    </React.Fragment>
                  </Row>
                  <Row
                    className={
                      "d-none d-md-none d-lg-flex d-xl-flex " +
                      style.brand__container__row__services
                    }
                  >
                    <div className={style.brand__container__row2}>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={
                                  data?.image?.data?.attributes?.tooltip ||
                                  data?.tooltip
                                }
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(4, brandData?.brand_logo?.length)}
                    </div>
                  </Row>
                </>
              )}
            {brandData?.brand_logo?.length > 3 &&
              (service !== "NATURAL LANGUAGE PROCESSING" ||
                service !== "DEVOPS") && (
                <>
                  <Row
                    className={
                      "d-flex d-md-flex d-lg-none d-xl-none " +
                      style.brand__container__row__services
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.image?.data?.attributes?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 4)}
                    </React.Fragment>
                  </Row>
                  <Row
                    className={
                      "d-flex d-md-flex d-lg-none d-xl-none " +
                      style.brand__container__row2
                    }
                  >
                    <React.Fragment>
                      {brandData?.brand_logo
                        .map((data, index) => {
                          return (
                            <div
                              className={
                                style.services__column +
                                " " +
                                style.services_brand_container
                              }
                              key={data?.id}
                            >
                              <div
                                // data-aos="fade-up"
                                style={{ width: "150px", height: "150px" }}
                                title={data?.image?.data?.attributes?.tooltip}
                                className={style.fade}
                              >
                                <Image
                                  priority
                                  src={data?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={150}
                                  width={150}
                                  className={style.images}
                                  alt={data?.image_alt_text}
                                />
                              </div>
                            </div>
                          );
                        })
                        .slice(4, brandData?.brand_logo?.length)}
                    </React.Fragment>
                  </Row>
                </>
              )}
          </Container>
        </Container>
      )}
    </>
  );
}

export default BrandSection;
