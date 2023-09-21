import React from "react";
import style from "./circular.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function Circular(props) {
  return (
    <Container>
      <div className={style.circular__title}>Leadership Team</div>
      {props?.data?.slice(0, 1).map((data) => {
        return (
          <React.Fragment key={data?.id}>
            <Row className={style.circular__row}>
              <Col md={4} sm={12} xs={12}>
                <div className={style.circular__wrapper}>
                  <div className={style.circular__image}>
                    <Image
                      priority
                      src={data.image?.data?.attributes?.url}
                      width={200}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                      position="relative"
                      alt={data?.image_alt_text}
                    />

                    <div className={style.image__overlay}>
                      <div className={style.image__title}>
                        {data?.overlay_text}
                      </div>
                    </div>
                  </div>

                  <div className={style.circular__name}>{data.name}</div>
                  <p className={style.circular__position}>{data.position}</p>
                  <div className={style.circular__socials}>
                    <a href={data?.twitter_link} target="_blank">
                      <div>
                        <Image
                          priority
                          src={data?.twittericon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={32}
                          alt={
                            data?.twittericon?.data?.attributes?.alternativeText
                          }
                        />
                      </div>
                    </a>
                    <a href={data?.linkedin_link} target="_blank">
                      <div>
                        <Image
                          src={data?.linkedin_icon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={35}
                          alt={
                            data?.linkedin_icon?.data?.attributes
                              ?.alternativeText
                          }
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        );
      })}

      <Row className={style.circular__row}>
        {props?.data?.slice(1, 4).map((data) => {
          return (
            <React.Fragment key={data?.id}>
              <Col md={4} sm={12} xs={12}>
                <div className={style.circular__wrapper}>
                  <div className={style.circular__image}>
                    <Image
                      priority
                      src={data.image?.data?.attributes?.url}
                      width={200}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                      position="relative"
                      alt={data?.image_alt_text}
                    />

                    <div className={style.image__overlay}>
                      <div className={style.image__title}>
                        {data?.overlay_text}
                      </div>
                    </div>
                  </div>

                  <div className={style.circular__name}>{data.name}</div>
                  <p className={style.circular__position}>{data.position}</p>
                  <div className={style.circular__socials}>
                    <a
                      href={data.twitter_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          priority
                          src={data?.twittericon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={32}
                          alt={
                            data?.twittericon?.data?.attributes?.alternativeText
                          }
                        />
                      </div>
                    </a>
                    <a
                      href={data?.linkedin_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          priority
                          src={data?.linkedin_icon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={35}
                          alt={
                            data?.linkedin_icon?.data?.attributes
                              ?.alternativeText
                          }
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>

      <Row className={style.circular__row}>
        {props?.data?.slice(4, 6).map((data) => {
          return (
            <React.Fragment key={data?.id}>
              <Col md={6} sm={12} xs={12}>
                <div className={style.circular__wrapper}>
                  <div className={style.circular__image}>
                    <Image
                      priority
                      src={data.image?.data?.attributes?.url}
                      width={200}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                      position="relative"
                      alt={data?.image_alt_text}
                    />

                    <div className={style.image__overlay}>
                      <div className={style.image__title}>
                        {data?.overlay_text}
                      </div>
                    </div>
                  </div>

                  <div className={style.circular__name}>{data?.name}</div>
                  <p className={style.circular__position}>{data?.position}</p>
                  <div className={style.circular__socials}>
                    <a
                      href={data?.twitter_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          priority
                          src={data?.twittericon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={32}
                          alt={
                            data?.twittericon?.data?.attributes?.alternativeText
                          }
                        />
                      </div>
                    </a>
                    <a
                      href={data?.linkedin_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Image
                          priority
                          src={data?.linkedin_icon?.data?.attributes?.url}
                          layout="fixed"
                          height={35}
                          width={35}
                          alt={
                            data?.linkedin_icon?.data?.attributes
                              ?.alternativeText
                          }
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}
