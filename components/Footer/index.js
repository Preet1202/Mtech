import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.scss";
import { useRouter } from "next/dist/client/router";

function Footer({ footerData }) {
  const router = useRouter();
  const [url, setUrl] = React.useState(router.asPath);

  React.useEffect(() => {
    setUrl(router.asPath.split("/")[1]);
  }, [router.asPath]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.CLUTCHCO) {
        window.CLUTCHCO.Init();
      }
      if (window.GOODFIRMS) {
        window.GOODFIRMS.Init();
      }
    }
  }, []);

  const getBold = (text) => {
    if (url === "" && text.toLowerCase() === "home") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url.includes(text.toLowerCase())) {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "about-us" && text === "About Us") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "blog" && text === "Resources") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "ebooks" && text === "Resources") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "case-study" && text === "Resources") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "white-paper" && text === "Resources") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "videos" && text === "Resources") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    } else if (url === "privacy-policy" && text === "Privacy Policy") {
      return <b style={{ fontWeight: "600" }}>{text}</b>;
    }
    return text;
  };

  return (
    <>
      <Container fluid className={style.footer__container}>
        <Container className={style.footer_container1}>
          <Row className={style.footer__main}>
            <Col md={8} className={style.footer__left}>
              <Link href="/" passHref>
                <a href="/">
                  <div className={style.footer__logo}>
                    {footerData?.logo?.data?.attributes?.url && (
                      <Image
                        // priority
                        // placeholder="blur"
                        // blurDataURL={footerData?.logo?.data?.attributes?.url}
                        src={footerData?.logo?.data?.attributes?.url}
                        width={250}
                        height={104}
                        layout="intrinsic"
                        alt="maruti-logo"
                      />
                    )}
                  </div>
                </a>
              </Link>
              <div className={style.footer__text}>
                {footerData?.description}
              </div>
              <div className={style.footer__link}>
                <ul>
                  {footerData?.footer_links?.map((data) => {
                    return (
                      <React.Fragment key={data?.id}>
                        <Link href={data?.link} prefetch={false}>
                          <li>{getBold(data?.link_text)}</li>
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
              {/* <div
                className={
                  "d-none d-sm-none d-md-flex d-lg-flex d-xl-flex " +
                  style.footer__partners
                }
              >
                {footerData?.certificates?.data.map((data) => {
                  return (
                    <div className={style.footer__partners_img} key={data?.id}>
                      <Image
                        // priority
                        // placeholder="blur"
                        // blurDataURL={data?.attributes?.url}
                        src={data?.attributes?.url}
                        layout="intrinsic"
                        height={data?.attributes?.height}
                        width={data?.attributes?.width}
                        alt={data?.attributes?.alternativeText}
                      />
                    </div>
                  );
                })}
                  </div> */}
              <div
                className={
                  "d-none d-sm-none d-md-flex d-lg-flex d-xl-flex " +
                  style.footer__widgets
                }
              >
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="45"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="100"
                  data-clutchcompany-id="214416"
                ></div>

                <div
                  className="goodfirm-widget"
                  data-widget-type="goodfirms-widget-t8"
                  data-widget-pattern="poweredby-star"
                  data-height="100"
                  data-company-id="4334"
                ></div>

                {/* <div
                  style={{ paddingRight: "1em" }}
                  className={style.footer__widgets__ai}
                >
                  <a
                    target="_blank"
                    href="https://www.goodfirms.co/artificial-intelligence"
                  >
                    <Image
                      src="https://assets.goodfirms.co/badges/color-badge/artificial-intelligence.svg"
                      title="Artificial Intelligence Company"
                      alt="Artificial Intelligence Company"
                      height="100px"
                      width="100px"
                      layout="fixed"
                    />
                  </a>
                </div> */}
                <div
                  style={{ paddingRight: "1em" }}
                  className={style.footer__widgets__clutch}
                >
                  <Image
                    src="https://cdn-gcp.new.marutitech.com/clutch_new_f92cb412bb.png"
                    title="Clutch_2022"
                    alt="Clutch_2022"
                    height="85px"
                    width="85px"
                    layout="fixed"
                  />
                </div>

                <div className={style.footer__widgets__sd}>
                  <a
                    target="_blank"
                    href="https://www.goodfirms.co/directory/languages/top-software-development-companies"
                  >
                    <Image
                      src="https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg"
                      title="Software Development Company"
                      alt="Software Development Company"
                      height="100px"
                      width="100px"
                      layout="fixed"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} className={style.footer__right}>
              <div className={style.footer__heading}>
                {footerData?.socials?.title}
              </div>
              <div
                className={
                  "d-flex d-sm-flex d-md-none d-lg-none d-xl-none " +
                  style.footer__icons1
                }
              >
                {footerData?.socials_other?.social_links.map((social) => {
                  return (
                    <React.Fragment key={social.id}>
                      <a
                        href={social?.link}
                        target="_blank"
                        id={social?.link_id}
                        rel="noreferrer"
                      >
                        <div>
                          <Image
                            // priority
                            // placeholder="blur"
                            // blurDataURL={social?.image?.data?.attributes?.url}
                            src={social?.image?.data?.attributes?.url}
                            layout="intrinsic"
                            height={1}
                            width={17}
                            alt={
                              social?.image?.data?.attributes?.alternativeText
                            }
                          />
                        </div>
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>

              <div
                className={
                  "d-none d-sm-none d-md-flex d-lg-flex d-xl-flex " +
                  style.footer__icons
                }
              >
                {footerData?.socials?.social_links.map((social) => {
                  return (
                    <React.Fragment key={social.id}>
                      <a
                        href={social?.link}
                        target="_blank"
                        id={social?.link_id}
                        rel="noreferrer"
                      >
                        <div>
                          <Image
                            // priority
                            // placeholder="blur"
                            // blurDataURL={social?.image?.data?.attributes?.url}
                            src={social?.image?.data?.attributes?.url}
                            layout="fixed"
                            height={45}
                            width={45}
                            alt={
                              social?.image?.data?.attributes?.alternativeText
                            }
                          />
                        </div>
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
              <div
                className={
                  "d-block d-sm-vlock d-md-none d-lg-none d-xl-none " +
                  style.footer__copyright1
                }
              >
                &#169; {new Date().getFullYear()} {footerData?.copyright}
              </div>
              <div
                className={
                  "d-none d-sm-none d-md-block d-lg-block d-xl-block " +
                  style.footer__copyright
                }
              >
                &#169;
                {new Date().getFullYear()} {footerData?.copyright}
              </div>
              <div
                className={
                  "d-flex d-sm-flex d-md-none d-lg-none d-xl-none " +
                  style.footer__partners_widgets
                }
              >
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="45"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="100"
                  data-clutchcompany-id="214416"
                ></div>
                <div
                  className="goodfirm-widget"
                  data-widget-type="goodfirms-widget-t8"
                  data-widget-pattern="poweredby-star"
                  data-height="100"
                  data-company-id="4334"
                ></div>

                {/* <div className={style.footer__partners_widgets_ai}>
                  <a
                    target="_blank"
                    href="https://www.goodfirms.co/artificial-intelligence"
                  >
                    <Image
                      src="https://assets.goodfirms.co/badges/color-badge/artificial-intelligence.svg"
                      title="Artificial Intelligence Company"
                      alt="Artificial Intelligence Company"
                      height="100px"
                      width="100px"
                      layout="fixed"
                    />
                  </a>
                </div> */}

                <div className={style.footer__partners_widgets_clutch}>
                  <Image
                    src="https://cdn-gcp.new.marutitech.com/clutch_new_f92cb412bb.png"
                    title="Clutch_2022"
                    alt="Clutch_2022"
                    height="85px"
                    width="85px"
                    layout="fixed"
                  />
                </div>
                <div className={style.footer__partners_widgets_sd}>
                  <a
                    target="_blank"
                    href="https://www.goodfirms.co/directory/languages/top-software-development-companies"
                  >
                    <Image
                      src="https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg"
                      title="Software Development Company"
                      alt="Software Development Company"
                      height="100px"
                      width="100px"
                      layout="fixed"
                    />
                  </a>
                </div>

                {/* <div className={style.footer__partners_img}>
                  <Image
                    // priority
                    // placeholder="blur"
                    // blurDataURL={`https://cdn-gcp.marutitech.com/wp-media/2021/03/651e76aa-ibm-partner.png`}
                    src="https://cdn-gcp.marutitech.com/wp-media/2021/03/651e76aa-ibm-partner.png"
                    layout="intrinsic"
                    height={89}
                    width={156}
                    alt="ibm-partner"
                  />
                </div>
                <div className={style.footer__partners_img}>
                  <Image
                    // priority
                    // placeholder="blur"
                    // blurDataURL={`https://cdn-gcp.marutitech.com/wp-media/2021/03/200a1d97-clutch-partner.png`}
                    src="https://cdn-gcp.marutitech.com/wp-media/2021/03/200a1d97-clutch-partner.png"
                    layout="intrinsic"
                    height={84}
                    width={91}
                    alt="clutch-partner"
                  />
                </div>
                <div className={style.footer__partners_img}>
                  <Image
                    // priority
                    // placeholder="blur"
                    // blurDataURL={`https://cdn-gcp.marutitech.com/wp-media/2021/03/aa59dfdc-sales-pitch.png`}
                    src="https://cdn-gcp.marutitech.com/wp-media/2021/03/aa59dfdc-sales-pitch.png"
                    layout="intrinsic"
                    height={52}
                    width={118}
                    alt="sales-pitch"
                  />
                </div>
                <div className={style.footer__partners_img}>
                  <Image
                    // priority
                    // placeholder="blur"

                    src="https://cdn-gcp.marutitech.com/wp-media/2021/03/26850671-ui-path-partner.png"
                    layout="intrinsic"
                    height={30}
                    width={135}
                    alt="ui-path-partner"
                  />
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
