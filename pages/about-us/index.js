import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import OneImageText from "../../components/Slider/oneImageText";
import TabComponent from "../../components/TabComponent";
import axiosInstance from "../../config/axiosConfig";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";
import dynamic from "next/dynamic";
import CustomCarousel from "../../components/CustomCarousel";

function Aboutus(props) {
  const ref = useRef(null);
  // const DynamicTabComponent = dynamic(() =>
  //   import("../../components/TabComponent")
  // );

  return (
    <Container fluid>
      <SEO seoData={props.seoData} />
      <Header headerData={props.headerData} reference={ref} />
      {/* <OneImageText
        sliderData={props.sliderData}
        variant="aboutus"
        textPosition="textPosition"
        loop="noloop"
        mouseDrag="false"
      /> */}
      <CustomCarousel
        sliderData={props.sliderData}
        variant="singlepage"
        textPosition="textPosition"
      />

      {/* <DynamicTabComponent
        reference={ref}
        variant="secondary"
        ourStory={props.ourStory}
        tabHorizontalData={props.tabHorizontalData}
        howWeWork={props.howWeWork}
        leadership={props.leadership}
        partner={props.partner}
        clientSuccess={props.clientSuccess}
        inNews={props.inNews}
      /> */}
      <TabComponent
        reference={ref}
        variant="secondary"
        ourStory={props.ourStory}
        tabHorizontalData={props.tabHorizontalData}
        howWeWork={props.howWeWork}
        leadership={props.leadership}
        partner={props.partner}
        clientSuccess={props.clientSuccess}
        inNews={props.inNews}
      />
      <FooterNew newFooter={props?.newFooter} />
    </Container>
  );
}

export default Aboutus;

export const getStaticProps = async () => {
  const response = await axiosInstance.get(
    "/api/about-us?populate=hero_section&populate=hero_section.image&populate=tab_horizontal&populate=tab_horizontal.ourstory&populate=tab_horizontal.ourstory.three_image&populate=tab_horizontal.ourstory.three_image.image&populate=tab_horizontal.ourstory.three_image.image.image_file&populate=tab_horizontal.how_we_work&populate=tab_horizontal.ourstory.banner&populate=tab_horizontal.ourstory.banner_other&populate=tab_horizontal.ourstory.white_wrapper&populate=tab_horizontal.ourstory.white_wrapper.white_box&populate=tab_horizontal.ourstory.white_wrapper.white_box.image&populate=tab_horizontal.ourstory.display&populate=tab_horizontal.ourstory.display.image&populate=tab_horizontal.ourstory.banner_bottom&populate=tab_horizontal.ourstory.banner_bottom.button&populate=tab_horizontal.how_we_work.tab_vertical&populate=tab_horizontal.how_we_work.tab_vertical.image&populate=tab_horizontal.how_we_work.white_wrapper&populate=tab_horizontal.how_we_work.white_wrapper.white_box&populate=tab_horizontal.how_we_work.white_wrapper.white_box.image&populate=tab_horizontal.how_we_work.brand_section&populate=tab_horizontal.how_we_work.brand_section.brand_logo&populate=tab_horizontal.how_we_work.brand_section.brand_logo.image&populate=tab_horizontal.how_we_work.banner&populate=tab_horizontal.how_we_work.banner.button&populate=tab_horizontal.leadership&populate=tab_horizontal.leadership.placeholder&populate=tab_horizontal.leadership.placeholder.image&populate=tab_horizontal.leadership.placeholder.linkedin_icon&populate=tab_horizontal.leadership.placeholder.twittericon&populate=tab_horizontal.leadership.banner&populate=tab_horizontal.leadership.banner.button&populate=tab_horizontal.partner&populate=tab_horizontal.partner.display&populate=tab_horizontal.partner.brand_section&populate=tab_horizontal.partner.brand_section.brand_logo&populate=tab_horizontal.partner.brand_section.brand_logo.image&populate=tab_horizontal.partner.brand_section_other&populate=tab_horizontal.partner.brand_section_other.brand_logo&populate=tab_horizontal.partner.brand_section_other.brand_logo.image&populate=tab_horizontal.partner.banner&populate=tab_horizontal.partner.banner.button&populate=tab_horizontal.client_success&populate=tab_horizontal.client_success.brand_section&populate=tab_horizontal.client_success.brand_section.brand_logo&populate=tab_horizontal.client_success.brand_section.brand_logo.image&populate=tab_horizontal.client_success.client_testimonial&populate=tab_horizontal.client_success.client_testimonial.vertical_carousel&populate=tab_horizontal.client_success.client_testimonial.vertical_carousel.company_logo&populate=tab_horizontal.client_success.client_testimonial.vertical_carousel.client_image&populate=tab_horizontal.client_success.case_studies&populate=tab_horizontal.client_success.case_studies.case_study_image&populate=tab_horizontal.client_success.case_studies.case_study_image.image&populate=tab_horizontal.client_success.banner&populate=tab_horizontal.client_success.banner.button&populate=tab_horizontal.in_new&populate=tab_horizontal.in_new.case_studies&populate=tab_horizontal.in_new.case_studies.case_study_image&populate=tab_horizontal.in_new.case_studies.case_study_image.image&populate=tab_horizontal.in_new.brand_section&populate=tab_horizontal.in_new.brand_section.brand_logo&populate=tab_horizontal.in_new.brand_section.brand_logo.image&populate=tab_horizontal.in_new.banner&populate=tab_horizontal.in_new.banner.button&populate=seo&populate=seo.image&populate=seo.keywords"
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
      newFooter: newFooterResponse?.data?.attributes,
      sliderData: response?.data?.attributes?.hero_section,
      ourStory:
        response?.data?.attributes?.tab_horizontal?.ourstory?.data.attributes,
      tabHorizontalData: response?.data?.attributes?.tab_horizontal,
      howWeWork:
        response?.data?.attributes?.tab_horizontal?.how_we_work?.data
          .attributes,
      leadership:
        response?.data?.attributes?.tab_horizontal?.leadership?.data
          ?.attributes,
      partner:
        response?.data?.attributes?.tab_horizontal?.partner?.data?.attributes,
      clientSuccess:
        response?.data?.attributes?.tab_horizontal?.client_success?.data
          .attributes,
      inNews:
        response?.data?.attributes?.tab_horizontal?.in_new?.data?.attributes,
      seoData: response?.data?.attributes?.seo,
    },
  };
};
