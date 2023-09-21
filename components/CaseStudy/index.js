import React, { useState } from "react";
import style from "./casestudy.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function CaseStudy() {
  // const [itemtoShow, setItemsToShow] = useState(4);
  // const [loadMore, setLoadMore] = useState(false);
  // const showMore = () => {
  //   if (itemtoShow === 4) {
  //     setItemsToShow(data.length);
  //     setLoadMore(true);
  //   } else {
  //     setItemsToShow(4);
  //     setLoadMore(false);
  //   }
  // };
  const data = [
    {
      link: "https://marutitech.com/case-study/frontend-development-for-weather-forecasting-app/",
      title: "  Frontend Development of a Maritime Forecasting Tool",
      background: "/Artboard1.png",
    },
    {
      link: "https://marutitech.com/case-study/revamping-real-estate-platform-using-agile-development/",
      title: "   Overhauling a High-Performance Property Listing Platform",
      background: "/Artboard4.png",
    },
    {
      link: "https://marutitech.com/case-study/predictive-analytics-in-the-auto-industry/",
      title:
        "  Building a Machine Learning Model to Predict the Sales of Auto Parts",
      background: "/Artboard2.png",
    },
    {
      link: "https://marutitech.com/case-study/medical-record-processing-using-nlp/",
      title:
        " Machine Learning Model Accelerates Healthcare Record Processing by 87%",
      background: "/Artboard3.png",
    },
  ];

  return (
    <Container>
      <Row className={style.row_container}>
        <h1 className={style.case_study_title}>Other Case Studies</h1>
        {data.map((d, index) => {
          return (
            <React.Fragment key={index}>
              <Col md={6} sm={12} title={d.title}>
                <a href={d.link} target="_blank" rel="noreferrer">
                  <div
                    className={style.blog_card}
                    style={{
                      backgroundColor: "lightgray",
                      backgroundImage: "url(" + d.background + ")",
                    }}
                  >
                    <div className={style.resource_title_wrapper}>
                      <div className={style.blog_card_title}>{d.title}</div>
                    </div>
                  </div>
                </a>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}
export default CaseStudy;
