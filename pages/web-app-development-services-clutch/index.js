import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import Head from "next/head";
import Header from "../../components/Header";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import Counter from "../../components/Counter";
import LatestEpisode from "../../components/Podcast/LatestEpisode";
import BrandSection from "../../components/BrandSection";
import RoadBlock from "../../components/RoadBlock";
import WhiteWrapper from "../../components/WhiteWrapper";
import Form from "../../components/Form";
import ClutchSlider from "../../components/Slider/threeImage";
import DevProcess from "../../components/DevProcess";
import Banner from "../../components/Banner";
import Awards from "../../components/Awards";
import LibrarySection from "../../components/LibrarySection";
import FAQ from "../../components/FAQ";
import FooterNew from "../../components/FooterNew";

const WebAppDevelopmentServicesClutch = (props) => {
  const drawRef = useRef(null);
  const [draw, setDraw] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const onScroll = () => {
    if (
      window.scrollY - window.outerHeight < drawRef?.current?.offsetTop &&
      window.scrollY + window.outerHeight > drawRef?.current?.offsetTop
    ) {
      setDraw(true);
    } else {
      setDraw(false);
    }
  };

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>{props?.pageTitle_header}</title>
      </Head>

      <Header headerData={props?.headerData} />

      <ServiceHeroSection
        variant="secondary"
        serviceData={props?.herosection}
        scrollToForm={scrollToForm}
        type="newpages"
      />

      <Counter
        draw={draw}
        counterData={props?.counterData}
        backgroundColor="white"
      />

      <LatestEpisode
        sectionData={props?.client_testimonial_video}
        usedAt={"homePage"}
        pad_tb_80
      />

      <BrandSection
        variant="primary"
        brandData={props?.brandData}
        mt="0px"
        paddingBottom="0px"
      />

      <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.long_cta}
        align="leftimage"
        color="white"
      />

      <RoadBlock
        type="roadblock"
        variant={props?.roadBlock?.Variant}
        roadblock={props?.roadBlock}
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData}
        textColor="#383838"
        height_web_app={true}
      />

      <ServiceHeroSection
        variant="case-study"
        casestudy={props.casestudy}
        align="leftimage"
      />

      <Form
        variant="servicepage_form"
        ref={formRef}
        formdata={props?.form}
        marginTop="80px"
      />

      <ClutchSlider
        workplace={props?.clutchwidget}
        variant="clutch_webwidget"
        color="white"
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData_other}
        textColor="#383838"
        color="violet"
      />

      <LibrarySection
        resource_library={props?.resource_library}
        paddingTop="80px"
        paddingBottom="80px"
      />

      <Banner
        variant="secondary_with_button"
        mt="3rem"
        bannerData={props?.shortCTA}
        fontWeight="700"
        scrollToForm={scrollToForm}
      />

      <DevProcess data={props?.techstack} height="auto" />

      <Awards
        awardData={props?.awards}
        variant={props?.awards?.variant}
        title={true}
        desc={true}
        type="awards"
      />

      <FAQ color="white" faqdata={props?.FAQ} scrollToForm={scrollToForm} />

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};
export default WebAppDevelopmentServicesClutch;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/paid-campaigns?filters[slug][$eq]=web-app-development-services-clutch&populate=hero_section.button,hero_section.image,counter_component.count,form.leftside_award.images,form.button,clutch_widget,clientele_brand_section.brand_logo.image,long_cta.image,problem_solution.RoadBox,services.white_box.image,short_cta.button,services_another.white_box.image,case_study.image,technology_stack.image,awards_recognitions.images,resource_library.rl_box.image,resource_library.link ,faq.button,faq.faqitems,client_testimonial_video.button,client_testimonial_video.video_link.image,client_testimonial_video.variant"
  );
  return {
    props: {
      pageTitle_header: response?.data[0]?.attributes?.pageTitle_titlebar,
      headerData: headerResponse,
      herosection: response?.data[0]?.attributes?.hero_section,
      counterData: response?.data[0]?.attributes?.counter_component,
      brandData: response?.data[0]?.attributes?.clientele_brand_section,
      client_testimonial_video:
        response?.data[0]?.attributes?.client_testimonial_video,
      long_cta: response?.data[0]?.attributes?.long_cta,
      roadBlock: response?.data[0]?.attributes?.problem_solution,
      WhiteWrapperData: response?.data[0]?.attributes?.services,
      casestudy: response?.data[0]?.attributes?.case_study,
      form: response?.data[0]?.attributes?.form,
      clutchwidget: response?.data[0]?.attributes?.clutch_widget,
      WhiteWrapperData_other: response?.data[0]?.attributes?.services_another,
      resource_library: response?.data[0]?.attributes?.resource_library,
      shortCTA: response?.data[0]?.attributes?.short_cta,
      techstack: response?.data[0]?.attributes?.technology_stack,
      awards: response?.data[0]?.attributes?.awards_recognitions,
      FAQ: response?.data[0]?.attributes?.faq,
      newFooter: newFooterResponse?.data?.attributes,
    },
  };
}
