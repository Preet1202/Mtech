import React from "react";
import { Col, Modal } from "react-bootstrap";
import style from "./ytmodalpopup.module.scss";

function YTModalPopup({ YTVideoId, show, showClose, setShow, setShowClose }) {
  return (
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
  );
}

export default YTModalPopup;
