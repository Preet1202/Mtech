import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import axiosInstance from "../../config/axiosConfig";
import Header from "../../components/Header";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import Counter from "../../components/Counter";
import BrandSection from "../../components/BrandSection";
import WhiteWrapper from "../../components/WhiteWrapper";
import ClutchSlider from "../../components/Slider/threeImage";
import RoadBlock from "../../components/RoadBlock";
import Form from "../../components/Form";
import TabComponent from "../../components/TabComponent";
import Versus from "../../components/Versus";
import DevProcess from "../../components/DevProcess";
import Banner from "../../components/Banner";
import ClientSegment from "../../components/ClientSegment";
import Awards from "../../components/Awards";
import LibrarySection from "../../components/LibrarySection";
import FAQ from "../../components/FAQ";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";

const ItOutsourcingServices = (props) => {
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

      <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.longcta}
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
        height_it_outsourcing={true}
      />
      <RoadBlock
        type="teamsweoffer"
        variant="white"
        roadblock={props?.TeamsWeOffer}
      />

      <Form variant="servicepage_form" ref={formRef} formdata={props?.form} />

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

      <Versus color="violet" versusData={props?.versus} variant="triple" />

      <Banner
        variant="secondary_with_button"
        mt="3rem"
        bannerData={props?.shortCTA}
        fontWeight="700"
        scrollToForm={scrollToForm}
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
        align="rightimage"
      />

      <DevProcess data={props?.techStack} height="auto" />

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

      <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.ourpeople}
        align="leftimage"
        color="violet"
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

      <FAQ color="white" faqdata={props?.FAQ} scrollToForm={scrollToForm} />

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};
export default ItOutsourcingServices;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/it-outsourcing-service?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,CTA.image,Roadblock_prob.RoadBox,Services.white_box.image,Teamsweoffer.RoadBox,Form.leftside_award.images,Form.button,ClutchWidget,DevelopmentProcess.image,Display,HowWeWork.image,Versus.versus_box,testimonial_banner.button,Clientsegment.ClientSegment_box,EngagementModel.Engagement_Box,Casestudy.image,Techstack.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.button,Clutch_Review.image,ResourceLibrary.rl_box.image,ResourceLibrary.link,OtherServices.otherservice_box,FAQ.button,FAQ.faqitems&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      longcta: response?.data?.attributes?.CTA,
      WhiteWrapperData: response?.data?.attributes?.Services,
      roadBlock: response?.data?.attributes?.Roadblock_prob,
      TeamsWeOffer: response?.data?.attributes?.Teamsweoffer,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      displayData: response?.data?.attributes?.Display,
      tabVerticalData: response?.data?.attributes?.HowWeWork,
      versus: response?.data?.attributes?.Versus,
      development: response?.data?.attributes?.DevelopmentProcess,
      shortCTA: response?.data?.attributes?.testimonial_banner,
      clientSegment: response?.data?.attributes?.Clientsegment,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      techStack: response?.data?.attributes?.Techstack,
      whyChooseMaruti: response?.data?.attributes?.WhyChooseMaruti,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Awards,
      ourpeople: response?.data?.attributes?.OurPeople,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      resource_library: response?.data?.attributes?.ResourceLibrary,
      otherservices: response?.data?.attributes?.OtherServices,
      FAQ: response?.data?.attributes?.FAQ,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
