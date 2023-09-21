import React from "react";
import style from "./faq.module.scss";
import { Accordion, Button, Container } from "react-bootstrap";
import Buttons from "../Button";

const FAQ = ({ color, faqdata, scrollToForm }) => {
  return (
    <Container
      fluid
      className={style.accordion__container}
      style={{ background: color === "white" ? "#FFFFFF" : "#262531" }}
    >
      <Container style={{ maxWidth: "850px", margin: "0 auto" }}>
        <h2
          className={style.faq__title}
          style={{ color: color === "white" ? "#262531" : "#FFFFFF" }}
        >
          {faqdata?.title}
        </h2>
        <Accordion bsPrefix={style.accordion}>
          {faqdata?.faqitems?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                <Accordion.Item
                  eventKey={data?.id}
                  bsPrefix={style.accordion__item}
                  style={{
                    borderRadius: "0px",
                    borderTop:
                      color === "white"
                        ? "0.5px solid #262531 "
                        : "0.5px solid #FFFFFF",
                  }}
                >
                  <Accordion.Header
                    bsPrefix={
                      color === "white"
                        ? "accordion__header__white"
                        : "accordion__header__violet"
                    }
                    className={
                      color === "white"
                        ? "faqaccordion"
                        : "faqaccordion__violet"
                    }
                  >
                    {data?.title}
                  </Accordion.Header>
                  <Accordion.Body
                    bsPrefix={style.accordion__body}
                    style={{
                      color: color === "white" ? "#383838" : "#FFFFFF",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: data?.desc,
                    }}
                  >
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: data?.desc,
                      }}
                    ></div> */}
                  </Accordion.Body>
                </Accordion.Item>
              </React.Fragment>
            );
          })}
        </Accordion>
      </Container>
      {faqdata?.button && (
        <div className={style.faq__button}>
          <Button onClick={scrollToForm}>{faqdata?.button?.title}</Button>
        </div>
      )}
    </Container>
  );
};

export default FAQ;

//  <Container
//    fluid
//    className={style.accordion__container}
//    style={{ background: color === "white" ? "#FFFFFF" : "#3F3D56" }}
//  >
//    <Container style={{ maxWidth: "850px", margin: "0 auto" }}>
//      <h2
//        className={style.faq__title}
//        style={{ color: color === "white" ? "#262531" : "#FFFFFF" }}
//      >
//        FAQ
//      </h2>
//      <Accordion bsPrefix={style.accordion}>
//        {[1, 2, 3, 4, 5].map((_, index) => {
//          return (
//            <React.Fragment key={index}>
//              <Accordion.Item
//                eventKey={index}
//                bsPrefix={style.accordion__item}
//                style={{
//                  borderRadius: "0px",
//                  borderTop:
//                    color === "white"
//                      ? "0.5px solid #3F3D56 "
//                      : "0.5px solid #FFFFFF",
//                }}
//              >
//                <Accordion.Header
//                  bsPrefix={
//                    color === "white"
//                      ? "accordion__header__white"
//                      : "accordion__header__violet"
//                  }
//                  className={
//                    color === "white" ? "faqaccordion" : "faqaccordion__violet"
//                  }
//                >
//                  1. How can you help me develop my product idea?
//                </Accordion.Header>
//                <Accordion.Body
//                  bsPrefix={style.accordion__body}
//                  style={{
//                    color: color === "white" ? "#383838" : "#FFFFFF",
//                  }}
//                >
//                  We sign Non-Disclosure Agreements with all our clients before
//                  initiating any project. We ensure security standards are
//                  adhered to and that client information and IPs stay
//                  confidential.
//                </Accordion.Body>
//              </Accordion.Item>
//            </React.Fragment>
//          );
//        })}
//      </Accordion>
//    </Container>
//    <div className={style.faq__button}>
//      <Buttons
//        // variant={
//        //   props.page === "product_page" ? "secondary_animated" : "secondary"
//        // }
//        variant={color === "white" ? "secondary" : "yellow"}
//        name="Get In Touch"
//        // url={data?.button?.url}
//        // id={data?.button?.button_id}
//        // url_type={data?.button?.url_type}
//        // page={props?.page}
//        // reference={props?.reference}
//        // mobileref={props?.mobileref}
//      />
//    </div>
//  </Container>;
