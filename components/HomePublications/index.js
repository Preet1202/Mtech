import React from "react";
import style from "./homepublications.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/dist/client/link";
import Buttons from "../Button";
import { getWindowWidth } from "../../common/Helper";
import OneImageTextSlider from "../../components/Slider/oneImageText";
import { FormatDate } from "../../common/Helper";

const HomePublications = ({ publication, recentPublications }) => {
  const [windowWidth] = getWindowWidth();
  if (!recentPublications?.length) return <></>;
  const lengthOfBlogs = recentPublications?.length;
  const firstBlog = recentPublications[0].attributes;
  const firstBlogCover =
    recentPublications[0].attributes.heroSection_image?.data?.attributes
      ?.formats?.large?.url ||
    recentPublications[0].attributes.heroSection_image?.data?.attributes?.url;
  const mobileBlogData = recentPublications;
  return (
    <Container className={style.home_publication_section}>
      <Row style={{ margin: "0px" }}>
        <div className={style.main_container}>
          <div className={style.inner_container}>
            <div className={style.section_top}>
              {publication?.title && (
                <h2 className={style.desktoptitle}>{publication?.title}</h2>
              )}
              {publication?.mobile_title && (
                <h2 className={style.mobiletitle}>
                  {publication?.mobile_title}
                </h2>
              )}
              {publication?.description && (
                <h5
                  dangerouslySetInnerHTML={{ __html: publication?.description }}
                ></h5>
              )}
            </div>
            <Link href={`/blog/${firstBlog?.slug}/`} key={firstBlog?.id}>
              <div className={style.section_center}>
                <div className={style.content_box}>
                  <div
                    className={style.content_image}
                    style={{
                      backgroundImage: `url(${firstBlogCover})`,
                    }}
                  ></div>
                  <div className={style.content_gradient}></div>
                  <div className={style.content_text}>
                    <h6>
                      {firstBlog?.authors?.data[0]?.attributes?.name} •{" "}
                      {FormatDate(firstBlog?.createdAt)}
                    </h6>
                    <h2>{firstBlog?.title}</h2>
                    <h6>{firstBlog?.description}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <div className={style.section_bottom_desktop}>
              {recentPublications?.slice(1, lengthOfBlogs).map((data) => {
                const otherBlogCover =
                  data?.attributes?.heroSection_image?.data?.attributes?.formats
                    ?.small?.url ||
                  data?.attributes?.heroSection_image?.data?.attributes?.formats
                    ?.medium?.url ||
                  data?.attributes?.heroSection_image?.data?.attributes?.formats
                    ?.large?.url ||
                  data?.attributes?.heroSection_image?.data?.attributes?.url;
                return (
                  <Link
                    href={`/blog/${data?.attributes?.slug}/`}
                    key={data?.id}
                  >
                    <div className={style.single_item}>
                      <div className={style.single_item_box}>
                        {data?.attributes?.heroSection_image?.data
                          ?.attributes && (
                          <Image
                            src={otherBlogCover}
                            alt={
                              data?.attributes?.heroSection_image?.data
                                ?.attributes?.alternativeText
                            }
                            layout="intrinsic"
                            height="200"
                            width="350"
                            objectFit="fill"
                          />
                        )}
                        <div className={style.item_detail_box}>
                          <div className={style.item_details}>
                            <h6>
                              {
                                data?.attributes?.authors?.data[0]?.attributes
                                  ?.name
                              }{" "}
                              • {FormatDate(data?.attributes?.createdAt)}
                            </h6>
                            <h3 className={style.item_details_title}>
                              {data?.attributes?.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {publication?.button?.url && (
              <div className={style.homepub__button}>
                <Buttons
                  variant={"secondary_animated"}
                  name={publication?.button?.title}
                  url={publication?.button.url}
                  id={publication?.button.button_id}
                  url_type={publication?.button.url_type}
                />
              </div>
            )}

            <div className={style.section_bottom_mobile}>
              <OneImageTextSlider
                variant="homepage-publications"
                sliderWidth={windowWidth}
                mobileBlogData={mobileBlogData}
                publication={publication}
              />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default HomePublications;
