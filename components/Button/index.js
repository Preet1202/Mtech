import React, { useState } from "react";
import Link from "next/link";
import { Col, Modal } from "react-bootstrap";
import styles from "./button.module.scss";

const Buttons = ({
  name,
  variant,
  url,
  id,
  tabname,
  url_type,
  page,
  reference,
  mobileref,
  width,
  scrollToForm,
  onClick,
}) => {
  const [show, setShow] = useState(false);
  const onFindOutMore = () => {
    if (page && page === "product_page") {
      setShow(true);
    }
  };

  const onOneImageFindOutMore = () => {
    reference?.current?.scrollIntoView({
      behaviour: "smooth",
    });
    mobileref?.current?.scrollIntoView({
      behaviour: "smooth",
    });
  };
  let classes = "";

  switch (variant) {
    case "primary":
      classes = `${styles.animation_btn1}`;
      break;

    case "secondary":
      classes = `${styles.simple_btn}`;
      break;
    case "yellow":
      classes = `${styles.yellow_btn}`;
      break;

    case "secondary_animated":
      classes = `${styles.animation_btn2}`;
      break;
  }

  const handleButtonClick = (e) => {
    if (scrollToForm) {
      scrollToForm();
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <>
      {url_type === "new_tab_url" ? (
        url && (
          <Link href={url} passHref>
            <a
              href={url}
              key={id}
              target="_blank"
              tabIndex="-1"
              rel="noreferrer"
            >
              {/* this is for the black inline in the button in Banner  */}
              {tabname === "Partners" ||
              tabname === "Client Success Stories" ? (
                <button
                  tabIndex="-1"
                  className={`${classes}`}
                  style={{ marginTop: "22px" }}
                >
                  <span>{name}</span>
                </button>
              ) : (
                <button
                  tabIndex="-1"
                  className={`${classes}`}
                  onClick={onFindOutMore}
                >
                  <span>{name}</span>
                </button>
              )}
            </a>
          </Link>
        )
      ) : (
        // url &&
        // <Link href={url} passHref>
        <a href={url} key={id} tabIndex="-1">
          {/* this is for the black inline in the button in Banner  */}
          {url === "/#bot-development-section" ? (
            <button
              tabIndex="-1"
              className={`${classes}`}
              onClick={onOneImageFindOutMore}
            >
              <span>{name}</span>
            </button>
          ) : tabname === "Partners" || tabname === "Client Success Stories" ? (
            <button
              tabIndex="-1"
              className={`${classes}`}
              style={{ marginTop: "22px" }}
            >
              <span>{name}</span>
            </button>
          ) : (
            <button
              tabIndex="-1"
              className={
                name === "✓"
                  ? `${classes} ${styles.formSubmited}`
                  : `${classes}`
              }
              onClick={(e) => handleButtonClick(e)}
            >
              <span>{name}</span>
            </button>
          )}
        </a>
        // </Link>
      )}
      <Modal
        className={styles.modal__dialog}
        show={show}
        size="xl"
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={styles.modal__body}>
          <Col className={styles.respcontainer}>
            <iframe
              className={styles.respiframe}
              src="https://www.youtube.com/embed/VedPb88qa4s?rel=0&amp;autoplay=1&amp;enablejsapi=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Buttons;
