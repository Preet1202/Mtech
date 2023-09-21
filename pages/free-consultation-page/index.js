import React from "react";
import Header from "../../components/Header";
import axiosInstance from "../../config/axiosConfig";
import Banner from "../../components/Banner";
import Display from "../../components/Display";
import Form from "../../components/Form";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";

const Index = (props) => {
  return (
    <>
      <SEO seoData={props.seoData} />
      <Header headerData={props?.headerData} />
      <Banner variant="secondary" bannerData={props?.bannerData} />
      <Display
        variant="text"
        title={props.displayData.title}
        description={props?.displayData?.description}
        text_center="true"
      />
      <Form
        variant="primary"
        formData={props?.formData}
        ForfreeConsultation={true}
      />
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const response = await axiosInstance.get(
    "/api/free-consultation-page?populate=banner&populate=white_banner&populate=seo&populate=seo.image&populate=seo.metaProperties&populate=seo.keywords&populate=form"
  );
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  return {
    props: {
      headerData: headerResponse,
      //   bannerData: response.data.data.attributes.banner,
      bannerData: response?.data?.attributes?.banner,
      displayData: response?.data?.attributes?.white_banner,
      formData: response?.data?.attributes?.form,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.seo,
    },
  };
}
