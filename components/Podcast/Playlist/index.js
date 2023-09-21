import React, { useState, useEffect } from "react";
import { Container, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { getVariantCommonClass } from "../../../common/Helper";
import { addMultiClasses } from "../../../common/common";
import Buttons from "../../Button";
import YTModalPopup from "../../Common/YTModalPopup";
import style from "./playlist.module.scss";

function Playlist({ sectionData }) {
  const variantClass = getVariantCommonClass(sectionData?.variant);
  if (!sectionData) return <></>;
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
        {sectionData?.playlist_details?.title && (
          <h2>{sectionData?.playlist_details?.title}</h2>
        )}
        {sectionData?.playlist_details?.link &&
          sectionData?.playlist_details?.image?.data?.attributes?.url && (
            <Link
              href={sectionData?.playlist_details?.link}
              passHref
              target="_blank"
            >
              <a
                href={sectionData?.playlist_details?.link}
                target="_blank"
                className={style.playlist_link}
                rel="noreferrer noopener"
              >
                <div
                  className={style.imgbox}
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${sectionData?.playlist_details?.image?.data?.attributes?.url}), lightgray 50% / cover no-repeat`,
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
              </a>
            </Link>
          )}
      </Container>
    </Container>
  );
}

export default Playlist;
