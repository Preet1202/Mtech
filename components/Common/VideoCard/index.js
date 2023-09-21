import React from "react";
import Image from "next/image";
import { getYoutubeIdFromUrl } from "../../../common/Helper";
import style from "./videocard.module.scss";

const VideoCard = ({ sectionData, setShow, setShowClose, setYTVideoId }) => {
  const ytLink = sectionData?.link;
  const videoId = ytLink !== "" ? getYoutubeIdFromUrl(ytLink) : "";

  if (!ytLink) return <></>;

  return (
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
      <div className={style.main_container}>
        <div
          className={style.single_itembox}
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${sectionData?.image?.data?.attributes?.url}), lightgray -23.06px -42.238px / 103.942% 134.22% no-repeat`,
          }}
        >
          <div className={style.play_icon}>
            <Image
              src="https://cdn-gcp.new.marutitech.com/podcast_play_icon_a58a57d0c8.png"
              width={60}
              height={60}
              alt="play_button"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
