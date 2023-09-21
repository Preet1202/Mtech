import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./LibrarySection.module.scss";
import Image from "next/image";

function LibrarySection(props) {
  const firstCardImage =
    props?.resource_library?.rl_box?.[0]?.image?.data?.attributes?.formats
      ?.medium?.url ||
    props?.resource_library?.rl_box?.[0]?.image?.data?.attributes?.formats
      ?.large?.url ||
    props?.resource_library?.rl_box?.[0]?.image?.data?.attributes?.url;

  const secondCardImage =
    props?.resource_library?.rl_box?.[1]?.image?.data?.attributes?.formats
      ?.medium?.url ||
    props?.resource_library?.rl_box?.[1]?.image?.data?.attributes?.formats
      ?.large?.url ||
    props?.resource_library?.rl_box?.[1]?.image?.data?.attributes?.url;

  const thirdCardImage =
    props?.resource_library?.rl_box?.[2]?.image?.data?.attributes?.formats
      ?.medium?.url ||
    props?.resource_library?.rl_box?.[2]?.image?.data?.attributes?.formats
      ?.large?.url ||
    props?.resource_library?.rl_box?.[2]?.image?.data?.attributes?.url;

  const fourthCardImage =
    props?.resource_library?.rl_box?.[3]?.image?.data?.attributes?.formats
      ?.medium?.url ||
    props?.resource_library?.rl_box?.[3]?.image?.data?.attributes?.formats
      ?.large?.url ||
    props?.resource_library?.rl_box?.[3]?.image?.data?.attributes?.url;

  const fifthCardImage =
    props?.resource_library?.rl_box?.[4]?.image?.data?.attributes?.formats
      ?.medium?.url ||
    props?.resource_library?.rl_box?.[4]?.image?.data?.attributes?.formats
      ?.large?.url ||
    props?.resource_library?.rl_box?.[4]?.image?.data?.attributes?.url;
  return (
    <div>
      {
        <div>
          <Container
            className={"d-none d-sm-none d-md-block library-section"}
            style={{
              paddingTop: props?.paddingTop,
              paddingBottom: props?.paddingBottom,
            }}
          >
            <Row style={{ margin: "0" }}>
              <div className={style.section_title}>
                {props?.resource_library?.title}
              </div>
              <Container>
                <Row className={style.resource_desktop_card_wrapper}>
                  <Col md={3} className={style.content_column}>
                    <div className={style.resource_desktop_card_wrapper_1}>
                      <a
                        className={style.resource_desktop_card_link}
                        href={props?.resource_library?.rl_box[0]?.url}
                        title={props?.resource_library?.rl_box?.[0]?.tooltip}
                      >
                        <div
                          className={
                            style.resource_desktop_card_1 +
                            " " +
                            style.style_prevu_kit
                          }
                          style={{
                            backgroundImage: `url(${firstCardImage})`,
                          }}
                        >
                          <div className={style.resource_title_wrapper}>
                            <div className={style.resource_desktop_card_title}>
                              {props?.resource_library?.rl_box?.[0]?.title}
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className={style.resource_desktop_card_link}
                        href={props?.resource_library?.rl_box[1]?.url}
                        title={props?.resource_library?.rl_box?.[1]?.tooltip}
                      >
                        <div
                          className={
                            style.resource_desktop_card_2 +
                            " " +
                            style.style_prevu_kit
                          }
                          style={{
                            backgroundImage: `url(${secondCardImage})`,
                          }}
                        >
                          <div className={style.resource_title_wrapper}>
                            <div className={style.resource_desktop_card_title}>
                              {props?.resource_library?.rl_box?.[1]?.title}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  <Col md={4} className={style.content_column}>
                    <div className={style.resource_desktop_card_wrapper_2}>
                      <a
                        className={style.resource_desktop_card_link}
                        href={props?.resource_library?.rl_box[2]?.url}
                        title={props?.resource_library?.rl_box?.[2]?.tooltip}
                      >
                        <div
                          className={
                            style.resource_desktop_card_3 +
                            " " +
                            style.style_prevu_kit
                          }
                          style={{
                            backgroundImage: `url(${thirdCardImage})`,
                          }}
                        >
                          <div className={style.resource_title_wrapper}>
                            <div className={style.resource_desktop_card_title}>
                              {props?.resource_library?.rl_box?.[2]?.title}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  <Col md={5} className={style.content_column}>
                    <div className={style.resource_desktop_card_wrapper_3}>
                      <a
                        className={style.resource_desktop_card_link}
                        href={props?.resource_library?.rl_box[3]?.url}
                        title={props?.resource_library?.rl_box?.[3]?.tooltip}
                      >
                        <div
                          className={
                            style.resource_desktop_card_4 +
                            " " +
                            style.style_prevu_kit
                          }
                          style={{
                            backgroundImage: `url(${fourthCardImage})`,
                          }}
                        >
                          <div className={style.resource_title_wrapper}>
                            <div className={style.resource_desktop_card_title}>
                              {props?.resource_library?.rl_box?.[3]?.title}
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        className={style.resource_desktop_card_link}
                        href={props?.resource_library?.rl_box[4]?.url}
                        title={props?.resource_library?.rl_box?.[4]?.tooltip}
                      >
                        <div
                          className={
                            style.resource_desktop_card_5 +
                            " " +
                            style.style_prevu_kit
                          }
                          style={{
                            backgroundImage: `url(${fifthCardImage})`,
                          }}
                        >
                          <div className={style.resource_title_wrapper}>
                            <div className={style.resource_desktop_card_title}>
                              {props?.resource_library?.rl_box?.[4]?.title}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  <div className={style.see_all_latest_resources}>
                    <a
                      className={style.blog_resources_link}
                      href={props?.resource_library?.link?.url}
                    >
                      <div className={style.see_all_text}>
                        <div className={style.see_all}>
                          {props?.resource_library?.link?.title}
                        </div>
                        <div className={style.arrow_right}>
                          <Image
                            src="https://cdn-gcp.new.marutitech.com/know_more_red_arrow_2022_3b9886c436.svg"
                            alt="red-arrow"
                            height="12px"
                            width="122px"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </Row>
              </Container>
            </Row>
          </Container>
          <Container className={"d-block d-sm-block d-md-none"}>
            <Row style={{ margin: "0" }}>
              <div className={style.Latest_Resources_inner_container}>
                <div className={style.section_title}>
                  {props?.resource_library?.title}
                </div>

                <div
                  className={style.Latest_Resources_mobile_horizontal_card_1}
                >
                  <a
                    className={style.Latest_Resources_Image}
                    href={props?.resource_library?.rl_box[0]?.url}
                  >
                    <div
                      className={
                        style.Latest_Resources_Image +
                        " " +
                        style.style_prevu_kit
                      }
                      id={style.lates_resource_bg_1}
                      style={{
                        backgroundImage: `url(${firstCardImage})`,
                      }}
                    >
                      <div className={style.resource_title_wrapper}>
                        <div
                          className={
                            style.Latest_Resources_Title +
                            " " +
                            "poppins-medium-14"
                          }
                        >
                          {props?.resource_library?.rl_box?.[0]?.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={style.Latest_Resources_mobile_vertical_card}>
                  <a
                    className={style.Latest_Resources_Image}
                    href={props?.resource_library?.rl_box[1]?.url}
                  >
                    <div
                      className={
                        style.Latest_Resources_Image +
                        " " +
                        style.style_prevu_kit
                      }
                      id={style.lates_resource_bg_2}
                      style={{
                        backgroundImage: `url(${secondCardImage})`,
                      }}
                    >
                      <div className={style.resource_title_wrapper}>
                        <div
                          className={
                            style.Latest_Resources_Title +
                            " " +
                            "poppins-medium-14"
                          }
                        >
                          {props?.resource_library?.rl_box?.[1]?.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={style.Latest_Resources_mobile_vertical_card}>
                  <a
                    className={style.Latest_Resources_Image}
                    href={props?.resource_library?.rl_box[2]?.url}
                  >
                    <div
                      className={
                        style.Latest_Resources_Image +
                        " " +
                        style.style_prevu_kit
                      }
                      id={style.lates_resource_bg_3}
                      style={{
                        backgroundImage: `url(${thirdCardImage})`,
                      }}
                    >
                      <div className={style.resource_title_wrapper}>
                        <div
                          className={
                            style.Latest_Resources_Title +
                            " " +
                            "poppins-medium-14"
                          }
                        >
                          {props?.resource_library?.rl_box?.[2]?.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className={style.Latest_Resources_mobile_horizontal_card_2}
                >
                  <a
                    className={style.Latest_Resources_Image}
                    href={props?.resource_library?.rl_box[3]?.url}
                  >
                    <div
                      className={
                        style.Latest_Resources_Image +
                        " " +
                        style.style_prevu_kit
                      }
                      id={style.lates_resource_bg_4}
                      style={{
                        backgroundImage: `url(${fourthCardImage})`,
                      }}
                    >
                      <div className={style.resource_title_wrapper}>
                        <div
                          className={
                            style.Latest_Resources_Title +
                            " " +
                            "poppins-medium-14"
                          }
                        >
                          {props?.resource_library?.rl_box?.[3]?.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className={style.Latest_Resources_mobile_horizontal_card_2}
                >
                  <a
                    className={style.Latest_Resources_Image}
                    href={props?.resource_library?.rl_box[4]?.url}
                  >
                    <div
                      className={
                        style.Latest_Resources_Image +
                        " " +
                        style.style_prevu_kit
                      }
                      id={style.lates_resource_bg_5}
                      style={{
                        backgroundImage: `url(${fifthCardImage})`,
                      }}
                    >
                      <div className={style.resource_title_wrapper}>
                        <div
                          className={
                            style.Latest_Resources_Title +
                            " " +
                            "poppins-medium-14"
                          }
                        >
                          {props?.resource_library?.rl_box?.[4]?.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={style.see_all_latest_resources}>
                  <a
                    className={style.blog_resources_link}
                    href={props?.resource_library?.link?.url}
                  >
                    <div className={style.see_all_text}>
                      <div className={style.see_all}>
                        {props?.resource_library?.link?.title}
                      </div>
                      <div className={style.arrow_right}>
                        <Image
                          src="https://cdn-gcp.new.marutitech.com/know_more_red_arrow_2022_3b9886c436.svg"
                          alt="red-arrow"
                          height="12px"
                          width="122px"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      }
    </div>
  );
}
export default LibrarySection;
