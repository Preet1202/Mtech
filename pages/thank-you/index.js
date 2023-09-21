import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

import style from "./thankyou.module.scss";
// import { BsArrowLeft } from "react-icons/bs";
import FooterNew from "../../components/FooterNew";
import Link from "next/link";
import axiosInstance from "../../config/axiosConfig";
import SEO from "../../components/SEO";

function ThankYou(props) {
  return (
    <>
      <SEO seoData={props.seoData} />
      <Header headerData={props?.headerData} />
      <Container>
        <Row className={style.thankyou__wrapper}>
          <Col className={style.thankyou__image}>
            <Image
              priority
              src={props?.thankYouData?.image?.data?.attributes?.url}
              width="200"
              height="199"
              layout="responsive"
              objectFit="contain"
              alt={
                props?.thankYouData?.image?.data?.attributes?.alternativeText
              }
            />
          </Col>
          <Col className={style.thankyou__title}>
            <h1>{props?.thankYouData?.title}</h1>
          </Col>
          <Col className={style.thankyou__description}>
            <div
              dangerouslySetInnerHTML={{
                __html: props?.thankYouData?.description,
              }}
            ></div>
          </Col>
          <Col className={style.thankyou__description__small}>
            {props?.thankYouData?.description_secondary}
          </Col>

          <div className={style.resources_back_link} style={{ zIndex: "10" }}>
            <Link href="/" passHref>
              <a
                href="/"
                className={style.back_link}
                id={props?.thankYouData?.link?.link_id}
              >
                {/* <BsArrowLeft className={style.arrow} strokeWidth={1} /> &nbsp; */}
                <div className={style.arrow_right}>
                  <Image
                    priority
                    src="https://cdn-gcp.new.marutitech.com/new_know_more_red_arrow_left_d1f6410e1a.svg"
                    alt="red-arrow"
                    layout="intrinsic"
                    height="18"
                    width="18"
                  />
                </div>
                &nbsp;{" "}
                <span className={style.homepagetext}>
                  {props?.thankYouData?.link?.link_name}
                </span>
              </a>
            </Link>
          </div>
        </Row>
      </Container>
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}

export default ThankYou;
export async function getStaticProps(context) {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  const thankResponse = await axiosInstance.get(
    "/api/thank-you?populate=image&populate=seo&populate=seo.image&populate=link"
  );
  return {
    props: {
      headerData: headerResponse,
      thankYouData: thankResponse?.data?.attributes,
      seoData: thankResponse?.data?.attributes?.seo,
      newFooter: newFooterResponse?.data?.attributes,
    },
  };
}
