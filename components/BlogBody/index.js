import React, { useEffect, useRef, useState } from "react";
import style from "./blogbody.module.scss";
import { Container, Col, Row, Button } from "react-bootstrap";
import AboutAuthor from "../AboutAuthor";
import SocialMediaIcons from "../SocialMediaIcons";
import TableOfContent from "../TableOfContent";
import { useRouter } from "next/router";

function BlogBody({ blogData, setTocVisible, isTocVisible }) {
  const [scrollToArray, setScrollToArray] = useState([]);
  const [visibleSection, setVisibleSection] = useState(null);
  // to get the blogurl where headings have to be changed specifically
  const [checkBlog, setCheckBlog] = useState("");

  const router = useRouter();

  React.useEffect(() => {
    setCheckBlog(router.asPath.split("#")[0]);
  }, []);

  const headerRef = useRef(null);
  const refs = blogData.content.map((value, currentIndex) => {
    value[currentIndex] = React.createRef();
    return value;
  });

  // getting url for social share buttons
  let blogurl;
  if (typeof window !== "undefined") {
    blogurl = window.location.href;
  }

  const scrollToElement = (id) => {
    let current = refs[id];
    current.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const RenderHTML = (props) => (
    <p
      className={`${style.blogbody__para} overflow-hidden`}
      dangerouslySetInnerHTML={{ __html: props.HTML }}
    ></p>
  );

  //--------onscroll
  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const sectionRefs = blogData.content.map((value, currentIndex) => {
    return { section: value.title, ref: refs[currentIndex], id: value.id };
  });
  // const [activeDiv, setActiveDiv] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let scrollPosition;
    if (typeof window !== "undefined") {
      scrollPosition = window.scrollY;
    }
    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);

        return (
          scrollPosition + 70 >= offsetTop &&
          scrollPosition - 50 <= offsetBottom
        );
      }
    });

    // if (selected && selected.id === activeDiv) {
    //   setVisibleSection(null);
    // }
    // if (selected && selected.section !== visibleSection) {
    //   setScrollToArray((prev) => {
    //     return [...prev, selected.id];
    //   });
    // }

    // setTimeout(() => {
    //   const changeSelectedItem = (selectedId) => {
    //     setTimeout(() => {
    //       setVisibleSection(selectedId);
    //     }, 500);
    //   };
    //   for (let i = 0; i < scrollToArray.length; i++) {
    //     changeSelectedItem(scrollToArray[i]);
    //   }
    // }, 1000);
    // setTimeout(() => {
    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.id);
    }
    // }, 1000);
  };

  // const setActiveDivClick = (data) => {
  //   // setActiveDiv(data);
  //   // setVisibleSection(null);
  // };
  // const [activeDivOnScroll, setActiveDivOnScroll] = useState(null);

  const shareOnTwitter = (tweetlink) => {
    const twittershare = `https://twitter.com/intent/tweet?text=${tweetlink}`;
    if (typeof window !== "undefined") {
      window.open(
        twittershare,
        "_blank",
        "width=800,height=450,toolbar=no,menubar=no,resizable=yes left=400px top=200px"
      );
    }
  };

  return (
    <>
      <Container fluid>
        <Row style={{ margin: "0" }} className={`${style.blogbody__row} gx-0`}>
          <Col md={4} lg={3} xl={3} className={style.blogbody__toc}>
            <TableOfContent
              variant="primary"
              blogDataContent={blogData?.content}
              onIndexClick={scrollToElement}
              isTocVisible={isTocVisible}
              setTocVisible={setTocVisible}
              activeDivOnScroll={visibleSection}
              // setActiveDivOnScroll={setActiveDivOnScroll}
              // setActiveDiv={setActiveDivClick}
              // activeDiv={activeDiv}
            />
          </Col>
          <Col md={7} lg={6} xl={7} className={style.blogbody__content}>
            <div ref={headerRef}></div>
            {blogData?.content?.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <h2
                    ref={refs[index]}
                    title={refs[index].title}
                    className={style.blogbody__content__h2}
                  >
                    {data?.title}
                  </h2>

                  <RenderHTML HTML={data?.description} />

                  {data?.twitter_link_text && (
                    <div className={style.tweet_body}>
                      <p
                        onClick={() => shareOnTwitter(data?.twitter_link)}
                        className={style.tweet}
                      >
                        {data?.twitter_link_text}
                      </p>
                      <Button
                        variant="light"
                        onClick={() => shareOnTwitter(data?.twitter_link)}
                        bsPrefix="btn"
                      >
                        Tweet
                      </Button>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            <div>
              <AboutAuthor
                variant="primary"
                data={blogData?.authors?.data[0]?.attributes}
              />
            </div>
          </Col>
          <Col md={1} xl={2} className={style.blogbody__socialicons}>
            <SocialMediaIcons variant="vertical" blogurl={blogurl} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogBody;
