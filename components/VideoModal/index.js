import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { addMultiClasses } from "../../common/common";
import style from "./videomodal.module.scss";

function VideoModal({ props, variant }) {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  let bg = props?.cover_image?.data?.attributes?.url;

  return (
    <>
      {variant === "product_videos" && (
        <Container fluid className={style.container__products}>
          <Row>
            <Col
              onClick={() => {
                setShow(true);
                setTimeout(() => {
                  setShowClose(true);
                }, 1000);
              }}
              className={style.vidcard__product}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className={style.title_desc_div}>
                <div className={style.titleWithDescription}>{props.title}</div>
                {props?.description ? (
                  <div className={style.description__products}>
                    {props.description}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <img
                alt="play_button"
                className={style.vidimage__product}
                src="https://cdn-gcp.new.marutitech.com/playbtn_d629876a2f.png"
              />
            </Col>

            <Modal
              className={style.modal__dialog}
              show={show}
              size="xl"
              onHide={() => {
                setShowClose(false);
                setShow(false);
              }}
            >
              <Modal.Header closeButton={showClose}></Modal.Header>
              <Modal.Body className={style.modal__body}>
                <Col className={style.respcontainer}>
                  <iframe
                    className={style.respiframe}
                    src={props.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </Col>
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      )}

      {variant === "resource_videos" && (
        <div className={`style.cardText`}>
          <Col
            onClick={() => {
              setShow(true);
              setTimeout(() => {
                setShowClose(true);
              }, 1000);
            }}
            className={addMultiClasses([
              style.resources_vidcard,
              "removeExtraPadding",
            ])}
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* {props?.description ? (
                <Col className={style.titleWithDescription}>{props.title}</Col>
              ) : (
                <Col className={style.titleWithoutDescription}>
                  {props.title}
                </Col>
              )} */}
            {/* <Col className={style.title}>{props.title}</Col> */}
            {/* {props?.description ? (
                <Col className={style.description}>{props.description}</Col>
              ) : (
                ""
              )} */}
            {props?.description ? (
              <div className={style.resource_title_wrapper}>
                <div className={style.blog_card_title}>
                  {props?.description}
                </div>
              </div>
            ) : (
              ""
            )}

            <img
              alt="play_button"
              className={style.vidimage}
              src="https://cdn-gcp.new.marutitech.com/playbtn_d629876a2f.png"
            />
          </Col>

          <Modal
            className={style.modal__dialog}
            show={show}
            size="xl"
            onHide={() => {
              setShowClose(false);
              setShow(false);
            }}
          >
            <Modal.Header closeButton={showClose}></Modal.Header>
            <Modal.Body className={style.modal__body}>
              <Col className={style.respcontainer}>
                <iframe
                  className={style.respiframe}
                  src={props.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </Col>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default VideoModal;
