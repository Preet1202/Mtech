import React, { useState, useEffect } from "react";
import { Container, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {
  getVariantCommonClass,
  getYoutubeIdFromUrl,
} from "../../../common/Helper";
import { addMultiClasses } from "../../../common/common";
import Buttons from "../../Button";
import YTModalPopup from "../../Common/YTModalPopup";
import style from "./latestepisode.module.scss";

function LatestEpisode({ sectionData, usedAt, pad_tb_80 }) {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [YTVideoId, setYTVideoId] = useState("");
  const [showTextModal, setShowTextModal] = useState(false);
  const variantClass = getVariantCommonClass(sectionData?.variant);
  const ytLink = sectionData?.video_link?.link;
  const videoId = ytLink !== "" ? getYoutubeIdFromUrl(ytLink) : "";

  if (!sectionData) return <></>;
  return (
    <Container
      fluid
      className={
        pad_tb_80
          ? addMultiClasses([
              "flex_col",
              "pad_tb_80",
              variantClass,
              style.main_container,
              style[variantClass],
            ])
          : addMultiClasses([
              "flex_col",
              "pad_tb_100",
              variantClass,
              style.main_container,
              style[variantClass],
            ])
      }
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_50",
          style.inner_container,
        ])}
      >
        <div
          className={addMultiClasses(["flex_row", "gap_80", style.top_section])}
        >
          <div
            className={
              usedAt === "homePage"
                ? addMultiClasses([
                    "flex_col",
                    style.left_box,
                    style.left_box_for_homePage,
                  ])
                : addMultiClasses(["flex_col", style.left_box])
            }
          >
            {(sectionData?.title_part1 || sectionData?.title_part2) && (
              <h2>
                {sectionData?.title_part1 && (
                  <span className={style.titlepart1}>
                    {sectionData?.title_part1}
                  </span>
                )}
                {sectionData?.title_part2}
              </h2>
            )}
          </div>
          <div
            className={addMultiClasses(["flex_col", "gap_20", style.right_box])}
          >
            {sectionData?.description && (
              <div
                className={
                  usedAt === "homePage"
                    ? addMultiClasses([
                        style.description,
                        style.description_for_homePage,
                      ])
                    : style.description
                }
                dangerouslySetInnerHTML={{
                  __html: sectionData?.description,
                }}
              ></div>
            )}
            <div className={style.button_container_desktop}>
              <Buttons
                name={sectionData?.button?.title}
                url={sectionData?.button?.url}
                id={sectionData?.button?.button_id}
                url_type={sectionData?.button?.url_type}
                variant="secondary_animated"
                onClick={(e) => {
                  if (sectionData?.readmore_content) {
                    e.preventDefault();
                    setShowTextModal(true);
                  }
                }}
              />
            </div>
          </div>
        </div>
        {ytLink && sectionData?.video_link?.image?.data?.attributes?.url && (
          <div
            className={style.bottom_section}
            onClick={() => {
              setShow(true);
              setYTVideoId(videoId);
              setTimeout(() => {
                setShowClose(true);
              }, 1000);
            }}
          >
            <div className={style.image_container}>
              <div
                className={style.single_itembox}
                style={{
                  background:
                    usedAt === "homePage"
                      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.40) 100%), url(${sectionData?.video_link?.image?.data?.attributes?.url}), lightgray 0px -7.185px / 100% 113.981% no-repeat`
                      : `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${sectionData?.video_link?.image?.data?.attributes?.url}), lightgray 0px -7.185px / 100% 113.981% no-repeat`,
                }}
              >
                <div className={style.play_icon}>
                  <Image
                    src="https://cdn-gcp.new.marutitech.com/podcast_play_icon_a58a57d0c8.png"
                    width={100}
                    height={100}
                    alt="play_button"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={style.button_container_mobile}>
          <Buttons
            name={sectionData?.button?.title}
            url={sectionData?.button?.url}
            id={sectionData?.button?.button_id}
            url_type={sectionData?.button?.url_type}
            variant="secondary"
            onClick={(e) => {
              if (sectionData?.readmore_content) {
                e.preventDefault();
                setShowTextModal(true);
              }
            }}
          />
        </div>
        {/* Youtube video modal popup */}
        <YTModalPopup
          YTVideoId={YTVideoId}
          show={show}
          showClose={showClose}
          setShow={setShow}
          setShowClose={setShowClose}
        />
        {sectionData?.readmore_content && (
          <Modal
            show={showTextModal}
            size="lg"
            onHide={() => {
              setShowTextModal(false);
            }}
            className="text_modalpopup"
          >
            <Modal.Header closeButton={showTextModal}></Modal.Header>
            <Modal.Body>
              <div
                className={style.modal_description}
                dangerouslySetInnerHTML={{
                  __html: sectionData?.readmore_content,
                }}
              ></div>
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </Container>
  );
}

export default LatestEpisode;
