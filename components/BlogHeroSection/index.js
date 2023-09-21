import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from "./blogherosection.module.scss";

import Link from "next/link";
import readingTime from "reading-time";

function BlogHeroSection({ blogData, setTocVisible, isTocVisible, author }) {
  const [timetoread, setTimeToRead] = useState(null);
  const FormatDate = (date) => {
    var date1 = new Date(date);

    return `${date1.toDateString().slice(4, 10)}/${date1.getFullYear()}`;
  };

  const estimateTime = () => {
    // to get text from dynamic content
    // if (typeof window !== "undefined") {
    //   const span = document.createElement("span");
    //   span.innerHTML = data;
    //   const text = span.textContent || span.innerText;
    //   const textArr = text.split(" ");
    // }
    const WPM = 240;
    const entiredata = blogData?.content?.map((d) => {
      return readingTime(d.description);
    });
    let totalwords = 0;
    for (let i of entiredata) {
      totalwords = totalwords + Number(i.words);
    }
    const time = Math.ceil(totalwords / WPM);
    setTimeToRead(time);
    // console.log(time);
  };
  React.useEffect(() => {
    estimateTime();
  }, [estimateTime]);

  return (
    <Container className={style.mainContainer} fluid>
      <Row
        style={{
          margin: "0",
          height: "550px",
        }}
        className={"d-none d-sm-none d-md-none d-lg-flex d-xl-flex"}
      >
        <Col
          className={style.image_content_column1}
          md={6}
          lg={6}
          style={{
            backgroundImage: `url("${blogData?.heroSection_image?.data?.attributes?.url}")`,
          }}
        ></Col>
        <Col className={style.column2} md={6} lg={6}>
          <div className={style.column2_div}>
            <div className={style.column2_div_row1}>
              <div className={style.category}>{blogData?.type}</div>
              <div className={style.time}>{timetoread} min read</div>
            </div>
            <h1 className={style.blog_title}>{blogData?.title}</h1>
            <div className={style.blog_description}>
              {blogData?.description}
            </div>
            <div className={style.author}>
              {author?.image?.data[0]?.attributes?.url && (
                <Image
                  priority={true}
                  src={author?.image?.data[0]?.attributes?.url}
                  width={52}
                  height={52}
                  layout="fixed"
                  alt={author?.name}
                  className={style.author_image}
                />
              )}

              <div className={style.author_details}>
                <Link href={`/author/${author?.slug}/`} passHref>
                  <a href={`/author/${author?.slug}/`}>
                    <div className={style.author_name}>{author?.name}</div>
                  </a>
                </Link>
                <div className={style.content_updated_on}>
                  Updated on {FormatDate(blogData?.updatedAt)}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          margin: "0",
          backgroundImage: `url("${blogData?.heroSection_image?.data?.attributes?.url}")`,
        }}
        className={
          "d-flex d-sm-flex d-md-flex d-lg-none d-xl-none " +
          style.mobile_image_div
        }
      ></div>
      <div
        className={"d-lg-none d-xl-none " + style.mobile_content_wrapper_div}
      >
        <div className={style.div_row1}>
          <div className={style.category}>{blogData?.type}</div>
          <div className={style.time}>{timetoread} min read</div>
        </div>
        <div className={style.blog_title}>{blogData?.title}</div>
        <div className={style.blog_description}>{blogData?.description}</div>
        <div className={style.author}>
          <Image
            priority={true}
            src={author?.image?.data[0]?.attributes?.url}
            width={52}
            height={52}
            layout="fixed"
            alt="image"
            className={style.author_image}
          />
          <div className={style.author_details}>
            <Link href={`/author/${author?.slug}/`} passHref>
              <a href={`/author/${author?.slug}/`}>
                <div className={style.author_name}>{author?.name}</div>
              </a>
            </Link>
            <div className={style.content_updated_on}>
              Updated on {FormatDate(blogData?.updatedAt)}
            </div>
          </div>
        </div>
        <div
          className={style.table_of_contents}
          onClick={() => setTocVisible(!isTocVisible)}
        >
          Table of contents
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.25 8.50005C0.25 8.04441 0.711706 7.67505 1.28125 7.67505H15.7188C16.2883 7.67505 16.75 8.04441 16.75 8.50005C16.75 8.95568 16.2883 9.32505 15.7188 9.32505H1.28125C0.711706 9.32505 0.25 8.95568 0.25 8.50005Z"
                fill="#F05443"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.76849 0.552046C9.12647 0.149318 9.70687 0.149318 10.0648 0.552046L16.4815 7.7708C16.8395 8.17352 16.8395 8.82648 16.4815 9.2292L10.0648 16.448C9.70687 16.8507 9.12647 16.8507 8.76849 16.448C8.4105 16.0452 8.4105 15.3923 8.76849 14.9895L14.537 8.5L8.76849 2.01045C8.4105 1.60773 8.4105 0.954774 8.76849 0.552046Z"
                fill="#F05443"
              />
            </svg>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default BlogHeroSection;
