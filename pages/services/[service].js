import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import WhiteWrapper from "../../components/WhiteWrapper";
import TabComponent from "../../components/TabComponent";
import BrandSection from "../../components/BrandSection";
import { TwoImageSlider, OneImageTextSlider } from "../../components/Slider";
import VerticalCardScreen from "../../components/VerticalCardScreen";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import FooterNew from "../../components/FooterNew";
import axiosInstance from "../../config/axiosConfig";
import SEO from "../../components/SEO";

function Service(props) {
  const router = useRouter();
  const service = router.query.service;
  const [service_id, setServiceId] = useState("");
  useEffect(() => {
    if (service) {
      setServiceId(service);
    }
  }, [service]);

  return (
    <div>
      <Container fluid>
        <div>
          <SEO seoData={props?.seoData} />
          <Header headerData={props?.headerData} />
          <ServiceHeroSection
            variant="primary"
            serviceData={props?.serviceData}
          />

          <WhiteWrapper
            variant="services_secondary"
            WhiteWrapperData={props?.WhiteWrapperData}
          />

          <TabComponent
            variant="primary"
            tabVerticalData={props?.tabVerticalData}
            displayData={props?.displayData}
            descTextWidth="930px"
          />

          <BrandSection
            variant="services_primary"
            service={props?.serviceData?.title}
            brandData={props?.brandData}
          />

          <TwoImageSlider
            images={props?.twoImageSliderData}
            slidesToShow="2"
            variant="services__imageslider"
          />

          {props?.useCasesData && (
            <OneImageTextSlider
              variant="secondary"
              sliderData={props?.useCasesData}
            />
          )}

          <VerticalCardScreen
            variant="primary"
            botDevelopmentData={props?.botDevelopmentData}
            mt="5rem"
          />

          <Banner
            variant="primary_with_button"
            mt="3rem"
            bannerData={props?.bannerButtonData}
          />

          <FooterNew newFooter={props?.newFooter} />
        </div>
      </Container>
    </div>
  );
}
export default Service;
export async function getStaticPaths() {
  let service_links = [];
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const data = headerResponse?.data?.attributes?.menu[1]?.Submenu?.forEach(
    (menu) => {
      menu?.subMenu?.map((submenu) => {
        let link = submenu?.link?.split("/");
        if (submenu?.link_url_type != "third_party_url") {
          return service_links.push(link[1]);
        }
      });
    }
  );
  const paths = service_links?.map((link) => ({
    params: { service: String(link) },
  }));
  return {
    //array of objects
    //contains route parameter -which statically generated at build time
    // paths: [
    //   {
    //     params: {
    //       service: "bot-development-services",
    //     },
    //   },
    // ],
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  let response;
  const { params } = context;
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  if (params.service) {
    response = await axiosInstance.get(
      `/api/service-pages?filters[slug][$eq]=${params.service}&populate=hero_section,hero_section.image,hero_section.button&
        populate=white_wrapper&populate=white_wrapper.white_box&populate=white_wrapper.white_box.image&
        populate=tab_vertical&populate=tab_vertical.image&
        populate=brand_section&populate=brand_section.brand_logo&populate=brand_section.brand_logo.image&
        populate=case_studies&populate=case_studies.case_study_image&populate=case_studies.case_study_image.image&
        populate=use_cases&populate=use_cases.use_cases_image&populate=use_cases.use_cases_image.image&
        populate=vertical_cards&populate=vertical_cards.image&populate=vertical_cards.vc_card&
        populate=banner&populate=banner.button&
        populate=seo&populate=seo.image&populate=seo.metaProperties&populate=seo.keywords&populate=display
        `
    );

    return {
      props: {
        seoData: response?.data[0]?.attributes?.seo,
        headerData: headerResponse,
        newFooter: newFooterResponse?.data?.attributes,
        serviceData: response?.data[0]?.attributes?.hero_section,
        twoImageSliderData: response?.data[0]?.attributes?.case_studies,
        botDevelopmentData: response?.data[0]?.attributes?.vertical_cards,
        bannerButtonData: response?.data[0]?.attributes?.banner,
        brandData: response?.data[0]?.attributes?.brand_section,
        tabVerticalData: response?.data[0]?.attributes?.tab_vertical,
        displayData: response?.data[0]?.attributes?.display,
        WhiteWrapperData: response?.data[0]?.attributes?.white_wrapper,
        useCasesData: response?.data[0]?.attributes?.use_cases,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
