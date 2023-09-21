import React, { useState, useEffect } from "react";
import { Container, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import { addMultiClasses } from "../../common/common";
import { getYoutubeVideos } from "../../common/Helper";
import style from "./youtubevideos.module.scss";

function YoutubeVideos({ sectionData }) {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [YTVideoId, setYTVideoId] = useState("");
  const [YTItems, setYTItems] = useState([]);
  const [ytNextToken, setYTNextToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (ytNextToken = "") => {
    const resultsPerPage = 50;
    const youtubeChannelID = "UCYUfs2E0HakEmFICFMTKc7A";
    const youtubePlaylistID = "PLQ92X02qbjsVho2BaEpK2UtTLEbc9C9pF";
    setIsLoading(true);
    setError(null);

    getYoutubeVideos({
      pageToken: ytNextToken,
      youtubeChannelID,
      youtubePlaylistID,
      resultsPerPage,
    })
      .then((res) => {
        if (res?.items) {
          setYTItems([...YTItems, ...res?.items]);
        } else if (res?.error?.message !== "") {
          setError(res?.error?.message);
        } else {
          setError(res);
        }
        if (res?.nextPageToken && res?.nextPageToken !== "") {
          setYTNextToken(res?.nextPageToken);
        } else {
          setYTNextToken("AllFetched");
          setIsLoading(false);
        }
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ytNextToken !== "" && ytNextToken !== "AllFetched")
      fetchData(ytNextToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ytNextToken]);

  if (!sectionData) return <></>;
  return (
    <Container
      fluid
      className={addMultiClasses([
        "flex_row",
        "pad_tb_80",
        style.main_container,
        isLoading ? style.data_loading : "",
      ])}
    >
      <Container
        className={addMultiClasses([
          "flex_col",
          "gap_60",
          style.inner_container,
        ])}
      >
        {sectionData?.title && (
          <h2 className={style.title}>{sectionData?.title}</h2>
        )}
        {!isLoading && YTItems?.length > 0 && (
          <div
            className={addMultiClasses([
              "flex_row",
              "gap_40",
              style.video_items,
            ])}
          >
            {YTItems?.map((data, index) => {
              const YTImage =
                data?.snippet?.thumbnails?.maxres?.url ||
                data?.snippet?.thumbnails?.standard?.url ||
                data?.snippet?.thumbnails?.high?.url ||
                data?.snippet?.thumbnails?.medium?.url ||
                data?.snippet?.thumbnails?.default?.url ||
                "";
              return (
                <div
                  className={style.single_item}
                  key={data?.id}
                  onClick={() => {
                    setShow(true);
                    setYTVideoId(data?.snippet?.resourceId?.videoId);
                    setTimeout(() => {
                      setShowClose(true);
                    }, 1000);
                  }}
                  data-aos="fade-up"
                >
                  <div
                    className={style.single_itembox}
                    style={{
                      backgroundImage: `url(${YTImage})`,
                    }}
                  >
                    {data?.snippet?.title && (
                      <div className={style.textbox}>
                        {data?.snippet?.title}
                      </div>
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
                    src={`https://www.youtube.com/embed/${YTVideoId}?rel=0&autoplay=1&enablejsapi=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </Col>
              </Modal.Body>
            </Modal>
          </div>
        )}
        {!isLoading && YTItems?.length <= 0 && (
          <>Unable to load videos. Plese check back after some time.</>
        )}
        {isLoading && <p>Loading...</p>}
      </Container>
    </Container>
  );
}

export default YoutubeVideos;
