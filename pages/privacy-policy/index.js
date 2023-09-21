import { Container } from "react-bootstrap";
import style from "./policy.module.scss";
import Header from "../../components/Header";
import FooterNew from "../../components/FooterNew";
import axiosInstance from "../../config/axiosConfig";
import SEO from "../../components/SEO";

function PrivacyPolicyPage(props) {
  const RenderHTML = (props) => (
    <p
      className={style.description}
      dangerouslySetInnerHTML={{ __html: props.HTML }}
    ></p>
  );
  return (
    <>
      <SEO seoData={props.seoData} />
      <Header headerData={props?.headerData} />
      <Container>
        <div className={style.container}>
          <div className={style.innerContainer}>
            <h1 className={style.heading}>{props?.privacyPolicyData?.title}</h1>
            <div>
              <div
                className={style.description}
                dangerouslySetInnerHTML={{
                  __html: props?.privacyPolicyData?.descriptions,
                }}
              ></div>
            </div>
            {props?.privacyPolicyData?.faqs_privacyPolicy.map((item, index) => (
              <div key={item.id}>
                <h4 className={style.smallHeader}>{item?.title}</h4>
                {index >= 0 && <RenderHTML HTML={item?.desc} />}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}

export default PrivacyPolicyPage;
export async function getStaticProps(context) {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const privacyPolicyResponse = await axiosInstance.get(
    "/api/privacy-policy?populate=faqs_privacyPolicy&populate=seo"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  return {
    props: {
      headerData: headerResponse,
      privacyPolicyData: privacyPolicyResponse?.data?.attributes,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: privacyPolicyResponse?.data?.attributes?.seo,
    },
  };
}
