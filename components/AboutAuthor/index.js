import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./aboutauthor.module.scss";
import SocialMediaIcons from "../SocialMediaIcons";

const AboutAuthor = ({ data, variant, blogsAuthorData }) => {
  const [show, setShow] = useState(false);
  const twitter_link = blogsAuthorData?.data[0]?.attributes?.twitter_link;
  const linkedin_link = blogsAuthorData?.data[0]?.attributes?.linkedin_link;

  const handleContent = () => {
    setShow((prevstate) => !prevstate);
  };
  return (
    <>
      {variant === "primary" && (
        <Container className={style.container}>
          <div className={style.author__wrapper}>
            <div className={style.author__image__wrapper}>
              {data?.image?.data[0]?.attributes?.url && (
                <Image
                  priority
                  className={style.author__image}
                  src={data?.image?.data[0]?.attributes?.url}
                  layout="fixed"
                  height="180"
                  width="180"
                  alt={data?.name}
                />
              )}
            </div>
            <div className={style.author__details}>
              {/* <div className={style.author__headline}>{data?.designation}</div> */}
              <div className={style.author__headline}>About the author</div>
              <div className={style.author__name}>{data?.name}</div>
              <div
                className={style.author__desc}
                dangerouslySetInnerHTML={{ __html: data?.description }}
              >
                {/* <p dangerouslySetInnerHTML={{ __html: data?.description }}></p> */}
              </div>
              {/* add author link here */}
              <Link href={`/author/${data?.slug}/`} passHref>
                <a href={`/author/${data?.slug}/`} className={style.link}>
                  <div className={style.author__post}>
                    Posts from this author
                    <img
                      className={style.arrow_right}
                      src="https://cdn-gcp.new.marutitech.com/know_more_red_arrow_2022_3b9886c436.svg"
                      alt="red-arrow"
                      height="8px"
                      width="122px"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      )}
      {variant === "secondary" && (
        <Container className={style.secondary__container}>
          <div className={style.secondary__wrapper}>
            <div className={style.secondary__image}>
              <Image
                priority
                src={
                  blogsAuthorData?.data[0]?.attributes.image.data[0].attributes
                    .url
                }
                layout="fixed"
                height="246px"
                width="246px"
                alt="authorname"
              />
            </div>
            <div className={style.author__detail__wrappper}>
              <div className={style.secondary__author__name}>
                {blogsAuthorData?.data[0]?.attributes?.name}
              </div>
              {/* for desktop */}
              {blogsAuthorData?.data[0]?.attributes?.description && (
                <div
                  className={style.secondary__description}
                  dangerouslySetInnerHTML={{
                    __html: blogsAuthorData?.data[0]?.attributes?.description,
                  }}
                ></div>
              )}

              {/* for mobile */}
              {blogsAuthorData?.data[0]?.attributes?.description && (
                <>
                  <div
                    className={
                      show
                        ? [
                            style.secondary__description__mobile,
                            style.showmore,
                          ].join(" ")
                        : [
                            style.secondary__description__mobile,
                            style.showless,
                          ].join(" ")
                    }
                    dangerouslySetInnerHTML={{
                      __html: blogsAuthorData?.data[0]?.attributes?.description,
                    }}
                  ></div>
                  <div className={show ? "" : style.fade}></div>
                </>
              )}
              {blogsAuthorData?.data[0]?.attributes?.description && (
                <span
                  className={style.secondary__loadmorebtn}
                  onClick={handleContent}
                >
                  {show ? (
                    <>
                      Show Less
                      <div className={style.arrow_right_loadless}>
                        <Image
                          priority
                          src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                          alt="red-arrow"
                          layout="intrinsic"
                          height="12"
                          width="12"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      Load More
                      <div className={style.arrow_right_loadmore}>
                        <Image
                          priority
                          src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                          alt="red-arrow"
                          layout="intrinsic"
                          height="12"
                          width="12"
                        />
                      </div>
                    </>
                  )}
                </span>
              )}

              <div>
                <SocialMediaIcons
                  linkedin
                  twitter
                  variant="horizontal"
                  twitter_link={twitter_link}
                  linkedin_link={linkedin_link}
                />
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default AboutAuthor;
