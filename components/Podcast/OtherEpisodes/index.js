import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { getVariantCommonClass } from "../../../common/Helper";
import { addMultiClasses } from "../../../common/common";
import style from "./OtherEpisodes.module.scss";
import Slider from "react-slick";
import VideoCard from "../../Common/VideoCard";
import SlickCSS from "../../SlickEssentials/slick-css";
import YTModalPopup from "../../Common/YTModalPopup";

function OtherEpisodes({ otherEpisodesData }) {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [YTVideoId, setYTVideoId] = useState("");

  const variantClass = getVariantCommonClass(otherEpisodesData?.variant);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!otherEpisodesData) return <></>;

  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_col",
        "pad_tb_100",
        variantClass,
        style.main_container,
        style[variantClass],
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_50",
          style.inner_container,
        ])}
      >
        {otherEpisodesData?.title && (
          <div
            className={addMultiClasses([
              "flex_row",
              "gap_80",
              style.top_section,
            ])}
          >
            {otherEpisodesData?.title && (
              <h2 className={style.title_wrapper}>
                {otherEpisodesData?.title}
              </h2>
            )}
          </div>
        )}

        {otherEpisodesData?.episodes && (
          <Container
            className={addMultiClasses([
              "rowContainer",
              style.row_wrapper,
              otherEpisodesData?.episodes?.length <= 2
                ? style.without_bt_padding
                : "",
            ])}
          >
            <SlickCSS></SlickCSS>
            <Slider {...settings}>
              {otherEpisodesData?.episodes?.map((item, index) => (
                <div className={style.column_container} key={index}>
                  <div className={style.videocard_wrapper}>
                    <VideoCard
                      sectionData={item}
                      setShow={setShow}
                      setShowClose={setShowClose}
                      setYTVideoId={setYTVideoId}
                    />
                  </div>
                  <div
                    className={addMultiClasses([
                      "flex_col",
                      style.details_wrapper,
                    ])}
                  >
                    <div
                      className={addMultiClasses(["flex_col", style.details])}
                    >
                      <div
                        className={addMultiClasses([
                          "flex_col",
                          style.details_top_section,
                        ])}
                      >
                        <div className={style.title_wrapper}>
                          {item.title && (
                            <h3 className={style.title}>{item.title}</h3>
                          )}
                          {item.label && (
                            <div>
                              <div className={style.label}>{item.label}</div>
                            </div>
                          )}
                        </div>
                        {item.description && (
                          <div
                            className={style.description}
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></div>
                        )}
                      </div>
                      {item.with_text && (
                        <h5 className={style.with_text}>{item.with_text}</h5>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        )}
      </Container>
      {/* Youtube video modal popup */}
      <YTModalPopup
        YTVideoId={YTVideoId}
        show={show}
        showClose={showClose}
        setShow={setShow}
        setShowClose={setShowClose}
      />
    </Container>
  );
}

export default OtherEpisodes;
