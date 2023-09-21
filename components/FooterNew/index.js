import React from "react";
import Image from "next/image";
import style from "./footernew.module.scss";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Link from "next/link";
import { addMultiClasses } from "../../common/common";

const FooterNew = (props) => {
  const addExtraPaddingClass = props?.addExtraPadding
    ? style.extraPaddingAddded
    : "";

  return (
    <>
      {/* Desktop Footer */}
      <Container
        className={addMultiClasses([
          style.newfooter__container__desktop,
          addExtraPaddingClass,
        ])}
        fluid
      >
        <Container className={style.inner__container}>
          <Row className={style.firstrow}>
            {props?.newFooter?.Sectors?.map((data) => {
              return (
                <React.Fragment key={data?.id}>
                  <Col md={3} sm={6} xs={12}>
                    <div className={style.main__title}>{data?.title}</div>
                    <ul>
                      {data?.subsectors.map((subsector) => {
                        return (
                          <Link
                            href={subsector?.link}
                            key={subsector?.id}
                            passHref
                          >
                            <li>{subsector?.title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
          <Row className={style.secondrow}>
            <Col lg={2} sm={12} className={style.secondrow_logo}>
              {props?.newFooter?.SecondRow?.image?.data &&
                props?.newFooter?.SecondRow?.logo_url && (
                  <Link href={props?.newFooter?.SecondRow?.logo_url} passHref>
                    <Image
                      priority
                      src={
                        props?.newFooter?.SecondRow?.image?.data?.attributes
                          ?.url
                      }
                      layout="intrinsic"
                      height={37}
                      width={200}
                      alt={
                        props?.newFooter?.SecondRow?.image?.data?.attributes
                          ?.alternativeText
                      }
                    />
                  </Link>
                )}
            </Col>
            <Col lg={2} sm={12} className={style.ouroffices}>
              {props?.newFooter?.SecondRow?.heading}
            </Col>
            <Col
              lg={3}
              sm={12}
              className={style.usa__address}
              dangerouslySetInnerHTML={{
                __html: props?.newFooter?.SecondRow?.addressone,
              }}
            ></Col>
            <Col
              lg={4}
              sm={12}
              className={style.india__address}
              dangerouslySetInnerHTML={{
                __html: props?.newFooter?.SecondRow?.addresstwo,
              }}
            ></Col>
          </Row>
        </Container>
        <Container>
          <Row className={style.thirdrow}>
            <Col className={style.reviewplatforms} md={6} sm={12}>
              {" "}
              {props?.newFooter?.ThirdRow?.ReviewPlatforms?.slice(0, 2).map(
                (data) => {
                  return (
                    <React.Fragment key={data?.id}>
                      <a
                        href={data?.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image
                          priority
                          src={data?.hoverimage?.data?.attributes?.url}
                          layout="intrinsic"
                          height={66}
                          width={155}
                          objectFit="contain"
                          alt={
                            data?.hoverimage?.data?.attributes?.alternativeText
                          }
                          className={style.footerthird__reviewplat__image}
                        />
                      </a>{" "}
                    </React.Fragment>
                  );
                }
              )}
            </Col>
            <Col className={style.socialicons} md={6} sm={12}>
              {props?.newFooter?.ThirdRow?.SocialPlatforms?.map((data) => {
                return (
                  <Link href={data?.link} key={data?.id}>
                    <a
                      href={data?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        layout="intrinsic"
                        height={30}
                        width={30}
                        objectFit="contain"
                        alt="Social"
                      />
                    </a>
                  </Link>
                );
              })}
            </Col>
            <Col md={12} className={style.footertext}>
              {props?.newFooter?.copyright}
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Mobile Footer */}
      <Container className={style.newfooter__container__mobile}>
        <Accordion defaultActiveKey="0">
          {props?.newFooter?.Sectors?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                <Accordion.Item
                  eventKey={index}
                  bsPrefix={style.accordion__item}
                >
                  <Accordion.Header className="footeraccordion__header">
                    {data?.title}
                  </Accordion.Header>
                  <Accordion.Body bsPrefix={style.accordion__body}>
                    <ul>
                      {data?.subsectors.map((subsector) => {
                        return (
                          <Link
                            href={subsector?.link}
                            key={subsector?.id}
                            passHref
                          >
                            <li>{subsector?.title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </React.Fragment>
            );
          })}
        </Accordion>

        <Row className={style.footercompany__details}>
          <Col
            sm={12}
            className={style.footer__moboffice}
            style={{ padding: "0px" }}
          >
            {props?.newFooter?.SecondRow?.heading}
          </Col>
          <Col
            sm={12}
            className={style.usa__address}
            style={{ padding: "0px" }}
            dangerouslySetInnerHTML={{
              __html: props?.newFooter?.SecondRow?.addressone,
            }}
          ></Col>
          <Col
            sm={12}
            className={style.india__address}
            style={{ padding: "0px" }}
            dangerouslySetInnerHTML={{
              __html: props?.newFooter?.SecondRow?.addresstwo,
            }}
          ></Col>
          <Col className={style.footer__firms} sm={12}>
            {props?.newFooter?.ThirdRow?.ReviewPlatforms?.slice(2, 4).map(
              (data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <a
                      href={data?.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        priority
                        src={data?.image?.data?.attributes?.url}
                        layout="intrinsic"
                        height={66}
                        width={140}
                        objectFit="contain"
                        alt={data?.image?.data?.attributes?.alternativeText}
                      />
                    </a>{" "}
                  </React.Fragment>
                );
              }
            )}
          </Col>
          <Col className={style.footer__socialicons_mobile} sm={12}>
            {props?.newFooter?.ThirdRow?.SocialPlatforms?.map((data) => {
              return (
                <Link href={data?.link} key={data?.id}>
                  <a
                    href={data?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={data?.mobile_image?.data?.attributes?.url}
                      layout="intrinsic"
                      height={30}
                      width={30}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              );
            })}
          </Col>
          <Col sm={12} className={style.footertext__mobile}>
            {props?.newFooter?.copyright}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterNew;
