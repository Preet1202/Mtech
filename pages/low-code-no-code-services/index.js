import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import axiosInstance from "../../config/axiosConfig";
import DevProcess from "../../components/DevProcess";
import LibrarySection from "../../components/LibrarySection";
import ClientSegment from "../../components/ClientSegment";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import ClutchSlider from "../../components/Slider/threeImage";
import Counter from "../../components/Counter";
import BrandSection from "../../components/BrandSection";
import RoadBlock from "../../components/RoadBlock";
import Awards from "../../components/Awards";
import Banner from "../../components/Banner";
import WhiteWrapper from "../../components/WhiteWrapper";
import VideoModalContainer from "../../components/VideoModalContainer";
import Form from "../../components/Form";
import TabComponent from "../../components/TabComponent";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";

const LowCodeNoCode = (props) => {
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
      <SEO seoData={props?.seoData} />

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
        // variant="noimage"
        backgroundColor="white"
      />

      <BrandSection
        variant="primary"
        brandData={props?.brandData}
        mt="0px"
        paddingBottom="0px"
      />

      <RoadBlock
        type="roadblock"
        variant={props?.roadBlock?.Variant}
        roadblock={props?.roadBlock}
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData_Services}
        textColor="#383838"
        height_low_code={true}
      />
      <RoadBlock
        type="teamsweoffer"
        variant="white"
        roadblock={props?.teamsweOffer}
        mt="80px"
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

      <DevProcess data={props?.development} />

      <TabComponent
        variant="primary"
        tabVerticalData={props?.tabVerticalData}
        displayData={props?.displayData}
        descTextWidth="930px"
        richtext={true}
        descColor="#383838"
        titleColor="#262531"
      />

      <ClientSegment color="orange-white" csData={props?.clientSegment} />

      <WhiteWrapper
        variant="engagement_model"
        engagementmodel={props.engagementmodel}
        color="secondary"
        marginBottom="0px"
      />

      <ServiceHeroSection
        variant="case-study"
        casestudy={props.casestudy}
        align="leftimage"
      />

      <VideoModalContainer
        variant="resource_videos"
        removeExtraSpacing={true}
        videomodalcontainerData={props?.videosection}
        for_mobile_low_code={true}
      />

      <DevProcess data={props?.techstack} height="auto" color="violet" />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.whyChooseMaruti}
        textColor="#383838"
        type="whychoosemaruti"
        marginBottom="80px"
      />

      <ServiceHeroSection
        variant="dataprotection"
        dataprotection={props?.dataprotection}
        align="leftimage"
        color="white"
      />

      <Awards
        awardData={props?.awards}
        variant={props?.awards?.variant}
        title={true}
        desc={true}
        type="awards"
        paddingTop="100px"
      />

      <Awards
        variant="yellow"
        type="clutchreview"
        clutchreviewData={props?.clutchreview}
        scrollToForm={scrollToForm}
      />

      <LibrarySection
        resource_library={props?.resource_library}
        paddingTop="80px"
        paddingBottom="80px"
      />

      <ServiceHeroSection
        variant="otherservices"
        otherservicesData={props?.otherservices}
      />

      <Banner
        variant="banner__bottom"
        bannerData={props?.bottombanner}
        scrollToForm={scrollToForm}
        buttonType="nonanimated"
        ForBottomBannerButon={true}
        RemovePaddingTop={true}
      />

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};

export default LowCodeNoCode;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );

  const response = await axiosInstance.get(
    "/api/low-code-no-code?populate=HeroSection,HeroSection.button,HeroSection.image,counter_component.count,Clientele_BrandSection.brand_logo.image,Roadblock_prob.RoadBox,Services.white_box.image,Teamsweoffer.RoadBox,Form.leftside_award.images,Form.button,ClutchWidget,DevelopmentProcess.image,Display,OurProcess.image,Clientsegment.ClientSegment_box,EngagementModel.Engagement_Box,Casestudy.image,Video.how_it_works_card.cover_image,Toolset.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,Clutch_Review.image,Clutch_Review.button,FeaturedSection.rl_box.image,FeaturedSection.link,OtherServices.otherservice_box,bottom_consult_banner.button&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );

  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      roadBlock: response?.data?.attributes?.Roadblock_prob,
      WhiteWrapperData_Services: response?.data?.attributes?.Services,
      teamsweOffer: response?.data?.attributes?.Teamsweoffer,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      development: response?.data?.attributes?.DevelopmentProcess,
      tabVerticalData: response?.data?.attributes?.OurProcess,
      timeline: response?.data?.attributes?.OurProcess,
      displayData: response?.data?.attributes?.Display,
      clientSegment: response?.data?.attributes?.Clientsegment,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      videosection: response?.data?.attributes?.Video,
      techstack: response?.data?.attributes?.Toolset,
      whyChooseMaruti: response?.data?.attributes?.WhyChooseMaruti,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Awards,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      otherservices: response?.data?.attributes?.OtherServices,
      resource_library: response?.data?.attributes?.FeaturedSection,
      bottombanner: response?.data?.attributes?.bottom_consult_banner,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
