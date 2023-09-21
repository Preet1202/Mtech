import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./videomodalcontainer.module.scss";
import VideoModal from "../VideoModal";
import { addMultiClasses } from "../../common/common";
const VideoModalContainer = ({
  videomodalcontainerData,
  variant,
  removeExtraSpacing,
  for_mobile_low_code = false,
}) => {
  let videoData = [];
  if (videomodalcontainerData?.video === undefined) {
    videoData = videomodalcontainerData?.how_it_works_card;
  } else {
    videoData = videomodalcontainerData?.video[0]?.how_it_works_card;
  }
  const for_mobile_low_code_1 = (for_mobile_low_code = true
    ? style.for_mobile_low_code
    : style.default_video);
  return (
    <>
      {variant === "product_videos" && (
        <Container fluid>
          <div className={style.section_title}>
            {videomodalcontainerData?.title}
          </div>
          <Container fluid>
            <Row style={{ margin: "0px" }} className={style.container_row}>
              {videoData?.map((data, index) => {
                return (
                  <Col lg={6} md={6} className={style.videomodal} key={index}>
                    <VideoModal variant="product_videos" props={data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>
      )}
      {variant === "resource_videos" && (
        <Container
          className={addMultiClasses([
            style.extrapadding,
            removeExtraSpacing ? style.removeExtraSpacing : "",
          ])}
        >
          <h1 className={style.section_title_resources}>
            {videomodalcontainerData?.title}
          </h1>

          <Row className={for_mobile_low_code_1}>
            {videoData?.map((data, index) => {
              return (
                <Col
                  md={6}
                  sm={12}
                  className={style.videomodal_resources}
                  key={index}
                >
                  <VideoModal props={data} variant="resource_videos" />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};
export default VideoModalContainer;
