import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import style from "./whitewrapper.module.scss";
import WhiteBox from "../WhiteBox";
import { addMultiClasses } from "../../common/common";

function WhiteWrapper(props) {
  const ForWhiteWrapper1 = props?.WhiteWrapperData?.description
    ? style.ForWhiteWrapper
    : "";
  const for_height_92 =
    props?.height === true
      ? style.height_92
      : props?.height_web_app === true
      ? style.height_92
      : props?.height_hire_mobile === true
      ? style.height_92
      : props?.height_hire_nodejs === true
      ? style.height_92
      : props?.height_it_outsourcing === true
      ? style.height_92
      : props?.height_cto === true
      ? style.height_92
      : "";

  const for_height_87_82 =
    props?.height_enterprise === true
      ? style.height_87
      : props?.height_enterprise_other
      ? style.height_82
      : props?.height_other === true
      ? style.height_82
      : props?.height_product_management === true
      ? style.height_87
      : props?.height_agile === true
      ? style.height_87
      : "";

  const for_height_88 =
    props?.height_ais === true
      ? style.height_88
      : props?.height_nlp === true
      ? style.height_88
      : props?.height_low_code === true
      ? style.height_88
      : "";
  const for_height_78 =
    props?.height_hire_mobile_other === true
      ? style.height_78
      : props?.height_hire_nodejs_other === true
      ? style.height_78
      : props?.height_hire_dedicated === true
      ? style.height_78
      : props?.height_wotnot === true
      ? style.height_78
      : "";
  return (
    <>
      {props.variant === "primary" && (
        <Container
          fluid
          className={
            props.backgroundColor === "darkblue"
              ? style.darkblue__section
              : style.white__section
          }
        >
          <Container className={style.white_wrapper_container}>
            <Row className={style.white__section__row}>
              <Col>
                <div
                  className={
                    props.backgroundColor === "darkblue"
                      ? style.darkblue__section__title
                      : style.white__section__title
                  }
                >
                  {/* <div className={style.white__section__title}> */}
                  {props?.WhiteWrapperData?.title}
                </div>
                <Col
                  className={
                    props.backgroundColor === "darkblue"
                      ? `${style.darkblue__section__desc} ${style.white__section__desc}`
                      : style.white__section__desc
                  }
                >
                  {props?.WhiteWrapperData?.description}
                </Col>
              </Col>
            </Row>

            <WhiteBox
              variant="primary"
              whiteBoxData={props?.WhiteWrapperData?.white_box}
              whiteBoxImage={props?.WhiteWrapperData?.image}
              backgroundColor={props?.backgroundColor}
              imgalt={props?.WhiteWrapperData?.image_alt_text}
              borderradius={props?.borderradius}
            />
          </Container>
        </Container>
      )}
      {props.variant === "primary_other" && (
        <Container
          fluid
          className={
            props.backgroundColor === "darkblue"
              ? style.darkblue__section_other
              : style.white__section_other
          }
        >
          <Container>
            <Row className={style.white__section__row_other}>
              <Col>
                <div
                  className={
                    props.backgroundColor === "darkblue"
                      ? style.darkblue__section__title
                      : style.white__section__title
                  }
                >
                  {props?.WhiteWrapperData?.title}
                </div>
                <Col
                  className={
                    props.backgroundColor === "darkblue"
                      ? `${style.darkblue__section__desc} ${style.white__section__desc}`
                      : style.white__section__desc__primary_other
                  }
                >
                  {props?.WhiteWrapperData?.description}
                </Col>
              </Col>
            </Row>

            <WhiteBox
              variant={props.whiteboxVariant}
              whiteBoxData={props?.WhiteWrapperData?.white_box}
              borderradius="4px"
            />
          </Container>
        </Container>
      )}
      {props.variant === "secondary" && (
        <Container
          fluid
          className={addMultiClasses([
            style.white__section,
            style.white__section__secondary,
            for_height_78,
          ])}
        >
          <Container>
            <Row className={style.white__section__row}>
              <Col>
                <div className={addMultiClasses([style.white__section__title])}>
                  {props?.whiteWrapperData?.title}
                </div>
                <Col
                  className={addMultiClasses([
                    style.white__section__desc,
                    style.white__section__desc__secondary,
                  ])}
                >
                  {props?.whiteWrapperData?.description}
                </Col>
              </Col>
            </Row>
            <WhiteBox
              variant="secondary"
              whiteBoxData={props?.whiteWrapperData?.white_box}
            />
          </Container>
        </Container>
      )}
      {props.variant === "services_secondary" && (
        <Container
          fluid
          className={
            addMultiClasses([
              props?.parentPage === "newcasestudy" ? style.from_newcasestudy : "",
            props.type === "whychoosemaruti"
              ? style.white__section__secondary__wcm
              : props.color !== "violet"
              ? addMultiClasses([
                  style.white__section__secondary,
                  ForWhiteWrapper1,
                  for_height_92,
                  for_height_87_82,
                  for_height_88,
                  for_height_78,
                ])
              : style.white__section__secondary__violet
            ])}
          // style={{
          //   marginBottom: props.marginBottom && `${props.marginBottom}`,
          //   marginTop: props.marginTop && `${props.marginTop}`,
          // }}
        >
          <Container>
            <Row className={style.white__section__row}>
              <Col style={{ paddingRight: 0 }}>
                <div className={style.white__section__title}>
                  {props?.WhiteWrapperData?.title}
                </div>
                {props?.WhiteWrapperData?.description && (
                  <Col
                    className={addMultiClasses([
                      style.white__section__desc,
                      style.white__section__desc__secondary,
                    ])}
                  >
                    {props?.WhiteWrapperData?.description}
                  </Col>
                )}
              </Col>
            </Row>
            <WhiteBox
              variant="services_secondary"
              whiteBoxData={props?.WhiteWrapperData?.white_box}
              textColor={props?.textColor}
              type={props?.type}
              parentPage={props?.parentPage}
            />
          </Container>
        </Container>
      )}
      {props.variant === "engagement_model" && (
        <Container
          fluid
          className={
            props.color === "primary"
              ? style.engagement_white__section__primary
              : style.engagement_white__section__secondary
          }
          // style={{
          //   marginBottom: props.marginBottom && `${props.marginBottom}`,
          // }}
        >
          <Container>
            <Row className={style.white__section__row}>
              <Col className={style.engagement_model__textcolumn}>
                <div className={style.engagement__title}>
                  {props?.engagementmodel?.title}
                </div>
                {props?.engagementmodel?.description && (
                  <Col className={style.engagement__desc}>
                    {props?.engagementmodel?.description}
                  </Col>
                )}
              </Col>
            </Row>
            <WhiteBox
              variant="engagement_box"
              engagementboxdata={props.engagementmodel.Engagement_Box}
              color={props.color}
              height_cto={props?.height_cto}
            />
          </Container>
        </Container>
      )}
    </>
  );
}

export default WhiteWrapper;
