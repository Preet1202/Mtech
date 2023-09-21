import Image from "next/image";
import style from "./404.module.scss";
import Header from "../components/Header";
import FooterNew from "../components/FooterNew";
import { Container } from "react-bootstrap";
import axiosInstance from "../config/axiosConfig";
import SEO from "../components/SEO";
function NotFoundPage(props) {
  return (
    <>
      <SEO seoData={props.seoData} />
      <Header headerData={props?.headerData} />
      <Container fluid className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.title_secondary}>
            {props?.pagenotfoundData?.title}
          </div>
          <div className={style.imageContainer}>
            <Image
              priority
              src={props?.pagenotfoundData?.image?.data?.attributes?.url}
              width="517px"
              height="273px"
              layout="intrinsic"
              objectFit="contain"
              alt={
                props?.pagenotfoundData?.image?.data?.attributes
                  ?.alternativeText
              }
            />
          </div>

          <div className={style.title_primary}>
            {props?.pagenotfoundData?.title}
          </div>
        </div>
      </Container>
      <FooterNew newFooter={props?.newFooter} />
      {/* sasa */}
    </>
  );
}

export default NotFoundPage;
export async function getStaticProps(context) {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const pagenotfoundResponse = await axiosInstance.get(
    "/api/pagenotfound?populate=*"
  );

  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  return {
    props: {
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,
      pagenotfoundData: pagenotfoundResponse?.data?.attributes,
      seoData: pagenotfoundResponse?.data?.attributes?.seo,
    },
  };
}
