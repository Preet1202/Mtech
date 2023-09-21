import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./gartner.module.scss";

const GartnerWidget = (props) => {
  const [scriptLoadingState, setScriptLoadingState] = useState("");
  let isMounted = true;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.src = "https://www.gartner.com/reviews/public/Widget/js/widget.js";
      script.async = true;
      script.onload = function () {
        if (isMounted) {
          setScriptLoadingState("LOADED");
        }
        script.innerHTML = GartnerPI_Widget({
          size: "large",
          theme: "dark",
          sourcingLink: "",
          widget_id: "MzYwYzM0NzEtNGE1OC00NjM5LTg5ZWQtNTk2NTdmMjkxN2Uw",
          version: "2",
          container: document.querySelector(".gartner_widget"),
        });
      };
      document.body.appendChild(script);

      // script.onerror = function () {
      //   setScriptLoadingState("FAILED");
      // };
    }
    return () => {
      isMounted = false;
    };
  }, [scriptLoadingState]);
  return (
    <Container style={{ padding: "1.5rem 0", position: "relative" }}>
      <Row
        className="gartner_widget"
        style={{
          margin: "0px",
        }}
      ></Row>
      {scriptLoadingState === "LOADED" && (
        <Col className={style.gartner__text}>
          <a href={props?.gartnerData?.link} target="_blank">
            {props?.gartnerData?.title}
          </a>
        </Col>
      )}
    </Container>
  );
};

export default GartnerWidget;
