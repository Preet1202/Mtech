import React, { useState } from "react";
import { Container, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../../common/common";
import style from "./ytvideos.module.scss";

function YTVideos({ sectionData }) {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  if (!sectionData) return <></>;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_row",
        "pad_tb_80",
        style.main_container,
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_50",
          style.inner_container,
        ])}
      >
        {sectionData?.title && (
          <h2 className={style.title}>{sectionData?.title}</h2>
        )}
        {sectionData?.video_items.length > 0 && (
          <div
            className={addMultiClasses([
              "flex_row",
              "gap_30",
              style.video_items,
            ])}
          >
            {sectionData?.video_items?.map((data, index) => {
              return (
                <div
                  className={style.single_item}
                  key={data?.id}
                  style={{
                    backgroundImage: `url(${data?.cover_image?.data?.attributes?.url})`,
                  }}
                  onClick={() => {
                    setShow(true);
                    setVideoUrl(data?.youtube_url);
                    setTimeout(() => {
                      setShowClose(true);
                    }, 1000);
                  }}
                >
                  {data?.title && (
                    <div className={style.textbox}>{data?.title}</div>
                  )}

                  <div className={style.play_icon}>
                    <Image
                      src="https://cdn-gcp.new.marutitech.com/playbtn_d629876a2f.png"
                      width={100}
                      height={100}
                      alt="play_button"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              );
            })}
            <Modal
              show={show}
              size="xl"
              onHide={() => {
                setShow(false);
                setShowClose(false);
              }}
            >
              <Modal.Header closeButton={showClose}></Modal.Header>
              <Modal.Body>
                <Col className={style.iframe_container}>
                  <iframe
                    className={style.yt_iframe}
                    src={videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </Col>
              </Modal.Body>
            </Modal>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default YTVideos;
