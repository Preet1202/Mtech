import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import style from "./blog.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Image from "next/image";
import readingTime from "reading-time";

function Blog({ resourceData, resource, variant, blogs, blogsAuthorData }) {
  const [show, setShow] = useState(false);
  const [windowSize, setWindowSize] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const [selectedItem, setSelectedItem] = useState("all");
  const [selectedFilterItem, setSelectedFilterItem] = useState("all");
  const [allItems] = useState([
    ...new Set(resourceData?.imageArr?.map((d) => d.type)),
  ]);
  const [listOfBlogs, setListOfBlogs] = useState([]);
  useEffect(() => {}, [allItems]);
  useEffect(() => {
    if (resourceData?.length > 0) {
      let newSetOfBlogs = [];
      resourceData?.map((data) => {
        if (data?.type !== null) {
          newSetOfBlogs.push(data?.type);
        }
      });
      newSetOfBlogs = [...new Set(newSetOfBlogs)];
      newSetOfBlogs.sort();
      setListOfBlogs(newSetOfBlogs);
      setSelectedItem("all");
    }
  }, [resourceData]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        if (window.innerWidth > 767) {
          setShow(false);
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const onClickOfCheckbox = (event) => {
    if (event?.target?.checked === true) {
      if (event?.target?.id === "All") {
        setSelectedFilterItem("all");
        resourceData?.map((data) => {
          document.getElementById(data?.type).checked = false;
        });
      }
      if (event?.target?.id !== "All") {
        let target = event?.target?.id;
        document.getElementById("All").checked = false;
        setSelectedFilterItem(event?.target?.id);
        resourceData?.map((data) => {
          if (target !== data?.type) {
            document.getElementById(data?.type).checked = false;
          }
        });
      }
    } else {
      document.getElementById(event?.target?.id).checked = false;
    }
  };
  const onClearAllFilter = () => {
    document.getElementById("All").checked = false;
    resourceData?.map((data) => {
      document.getElementById(data?.type).checked = false;
    });
    setSelectedFilterItem("all");
    document.getElementById("All").checked = true;
  };
  const onClickOfApply = () => {
    if (selectedFilterItem) {
      setSelectedItem(selectedFilterItem);
    }
    setShow(false);
  };

  const estimateTime = (blogcontent) => {
    const WPM = 240;

    const entiredata = blogcontent?.map((d) => {
      return readingTime(d.description);
    });

    let totalwords = 0;
    for (let i of entiredata) {
      totalwords = totalwords + Number(i.words);
    }
    const time = Math.ceil(totalwords / WPM);

    return time;
  };

  /* show more posts  starts */
  const [itemtoShow, setItemsToShow] = useState(4);
  const [loadMore, setLoadMore] = useState(false);
  const [nomoreblogs, setNoMoreBlogs] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const showMore = () => {
    if (blogs?.length > 4) {
      if (itemtoShow === 4 && typeof window !== "undefined") {
        setItemsToShow(blogs?.length);

        setLoadMore(true);

        // let d = document.getElementById("showless")?.getBoundingClientRect();
        // window.scrollTo(d);
      } else {
        setItemsToShow(4);
        setLoadMore(false);

        window.scrollTo(
          0,
          document.getElementById("showmoreid").getBoundingClientRect().y +
            Number(50)
        );
      }
    } else {
      // if (blogs?.length === 4 || blogs?.length === blogs?.length) {
      //   alert("no more blogs");
      //   setD(true);
      // }
      if (blogs?.length < 4) {
        setNoMoreBlogs(true);
        setShowAlert(true);
      }
    }
  };
  const compare = (a, b) => {
    return b.id - a.id;
  };

  /* show more posts  ends */
  return (
    <Container fluid className={style.main_container}>
      <Container className={style.blog__container}>
        {resource === "blog" && (
          <>
            <Row className={style.blog_filter_wrapper}>
              <button
                className={selectedItem === "all" ? style.active : style.btn}
                onClick={() => setSelectedItem("all")}
              >
                All
              </button>
              {/* {resourceData?.map((data, index) => {
                return (
                  data?.link_url && (
                    <button
                      key={index}
                      className={
                        selectedItem === data?.type ? style.active : style.btn
                      }
                      onClick={() => setSelectedItem(data?.type)}
                    >
                      {data?.type}
                    </button>
                  )
                );
              })} */}
              {listOfBlogs?.map((data, index) => {
                return (
                  data && (
                    <button
                      key={index}
                      className={
                        selectedItem === data ? style.active : style.btn
                      }
                      onClick={() => setSelectedItem(data)}
                    >
                      {data}
                    </button>
                  )
                );
              })}
            </Row>
            <Row className={"d-block d-sm-block d-md-none d-lg-none"}>
              <div>
                <div className={style.mobile_filter} onClick={handleShow}>
                  <img
                    className={style.filter_image}
                    src="https://cdn-gcp.new.marutitech.com/filter_2c9f419b4d.svg"
                    alt="filter-mobile"
                  />
                  FILTER
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header className={style.offcanvas_header}>
                    <Offcanvas.Title style={{ width: "100%" }}>
                      <Container>
                        <Row style={{ margin: "0" }}>
                          <Col xs={6} className={style.mobile_canvas_title1}>
                            Filters
                          </Col>
                          <Col
                            xs={6}
                            className={style.mobile_canvas_title2}
                            onClick={onClearAllFilter}
                          >
                            CLEAR ALL
                          </Col>
                        </Row>
                      </Container>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className={style.offcanvas_body}>
                    <div className={style.filter_type}>TYPE</div>
                    <Form className={style.mobile_filter_form}>
                      <div className="mb-3">
                        <Form.Check
                          inline
                          label="All"
                          name="filter-all"
                          type="checkbox"
                          id={"All"}
                          onChange={onClickOfCheckbox}
                          defaultChecked={selectedFilterItem == "all"}
                        />
                      </div>
                      {listOfBlogs.map((data, index) => {
                        return (
                          <div className="mb-3" key={index}>
                            <Form.Check
                              inline
                              label={data}
                              name={`filter-${data}`}
                              type="checkbox"
                              id={data}
                              onChange={onClickOfCheckbox}
                              defaultChecked={selectedFilterItem == data}
                            />
                          </div>
                        );
                      })}
                    </Form>
                    <Container>
                      <Row
                        style={{ margin: "0", left: "0px", zoom: "1" }}
                        className={style.filter_footer_wrapper}
                      >
                        <Col
                          xs={6}
                          className={style.mobile_filter_footer_clear_all}
                          onClick={onClearAllFilter}
                        >
                          CLEAR ALL
                        </Col>
                        <Col
                          xs={6}
                          className={style.mobile_filter_footer_apply}
                          onClick={onClickOfApply}
                        >
                          APPLY
                        </Col>
                      </Row>
                    </Container>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Row>
          </>
        )}
        <Row className={style.blog__container__row}>
          {resourceData?.sort(compare)?.map((data, index) => {
            return (
              (selectedItem === "all" || selectedItem === data.type) &&
              data?.link_url && (
                <Col
                  md={6}
                  sm={12}
                  key={index}
                  title={data?.title || data?.image_alt_text}
                >
                  <Link href={`${data?.link_url}`} passHref>
                    <a href={`${data?.link_url}`}>
                      <div
                        className={
                          style.blog_card +
                          " " +
                          style.style_prevu_kit +
                          " " +
                          style.slideanim +
                          " " +
                          style.slide
                        }
                        style={{
                          backgroundImage: data?.image?.data?.attributes
                            ?.formats?.medium?.url
                            ? "url(" +
                              data?.image?.data?.attributes?.formats?.medium
                                ?.url +
                              ")"
                            : "url(" + data?.image?.data?.attributes?.url + ")",
                          backgroundColor: "lightgray",
                        }}
                      >
                        <div className={style.resource_title_wrapper}>
                          <div className={style.blog_card_title}>
                            {data?.title || data?.image_alt_text}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              )
            );
          })}
        </Row>
      </Container>
      {variant === "secondary" && (
        <Container className={style.secondary_container}>
          <Row className={style.secondary_row}>
            <h1>Latest post by {blogsAuthorData?.data[0]?.attributes?.name}</h1>
            {blogs.slice(0, itemtoShow).map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <Link href={`/${data?.attributes?.slug}/`} passHref>
                    <Col md={6} sm={12} title={data?.attributes?.title}>
                      <a href={`/${data?.attributes?.slug}/`}>
                        <div
                          style={{
                            backgroundImage: `url(${data?.attributes?.image?.data?.attributes?.formats?.medium?.url})`,
                          }}
                          className={style.secondary_blog_card}
                        ></div>
                        <div className={style.subheading}>
                          {data?.attributes?.type?.toUpperCase()} {" - "}
                          <span>
                            {estimateTime(data?.attributes?.content)} MINS READ
                          </span>
                        </div>
                        <div className={style.blog_title}>
                          {data?.attributes?.title}
                        </div>
                      </a>
                    </Col>
                  </Link>
                </React.Fragment>
              );
            })}
          </Row>
          <div className={style.showmorediv} id="showmoreid">
            <button onClick={showMore} className={style.showmore__button}>
              {loadMore ? (
                <div id="showless">
                  Show Less
                  <span>
                    <Image
                      priority
                      src="/arrowshowless.svg"
                      alt="red-arrow"
                      layout="intrinsic"
                      height="14"
                      width="14"
                    />
                  </span>
                </div>
              ) : (
                <>
                  Load More
                  <span>
                    <Image
                      priority
                      src="/arrowloadmore.svg"
                      layout="intrinsic"
                      height="14"
                      width="14"
                      alt="arrowloadmore"
                    />
                  </span>
                </>
              )}
            </button>
          </div>
          {nomoreblogs && (
            <div className={style.alertbox}>
              {showAlert && (
                <Alert
                  show={showAlert}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  No More Blogs
                </Alert>
              )}
            </div>
          )}
        </Container>
      )}
    </Container>
  );
}

export default Blog;
