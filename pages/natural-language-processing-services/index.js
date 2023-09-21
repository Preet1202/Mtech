import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import axiosInstance from "../../config/axiosConfig";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import Counter from "../../components/Counter";
import BrandSection from "../../components/BrandSection";
import RoadBlock from "../../components/RoadBlock";
import WhiteWrapper from "../../components/WhiteWrapper";
import ClutchSlider from "../../components/Slider/threeImage";
import Form from "../../components/Form";
import DevProcess from "../../components/DevProcess";
import TabComponent from "../../components/TabComponent";
import Awards from "../../components/Awards";
import ClientSegment from "../../components/ClientSegment";
import LibrarySection from "../../components/LibrarySection";
import FAQ from "../../components/FAQ";
import Banner from "../../components/Banner";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";

const NaturalLanguageProcessingSolutions = (props) => {
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
        WhiteWrapperData={props?.WhiteWrapperData}
        textColor="#383838"
        marginBottom="80px"
        height_nlp={true}
      />

      <Banner
        variant="banner__bottom"
        bannerData={props?.bannercta}
        color="white"
        del="AI"
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
        marginBottom="80px"
      />

      <ServiceHeroSection
        variant="case-study"
        casestudy={props.casestudy}
        align="rightimage"
      />

      <DevProcess data={props?.Techstackbrand} height="auto" />

      <Banner
        variant="banner__bottom"
        bannerData={props?.bannercta_onlytext}
        color="orange"
        del="AI"
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.whyChooseMaruti}
        textColor="#383838"
        marginBottom="80px"
        color="violet"
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
export default NaturalLanguageProcessingSolutions;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/natural-language-processing?populate=HeroSection,HeroSection.button,HeroSection.image,counter_component.count,Clientele_BrandSection.brand_logo.image,Roadblock_prob.RoadBox,Service.white_box.image,TeamsweOffer,Form.leftside_award.images,Form.button,ClutchWidget,DevelopmentProcess.image,Display,HowWeWork.image,Clientsegment.ClientSegment_box,EngagementModel.Engagement_Box,Collaborationmodel,Casestudy.image,TechStack.image,Onlytext,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.image,Clutch_Review.button,ResourceLibrary.rl_box.image,ResourceLibrary.link,OtherServices.otherservice_box,FAQ.button,FAQ.faqitems&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      roadBlock: response?.data?.attributes?.Roadblock_prob,
      WhiteWrapperData: response?.data?.attributes?.Service,
      bannercta: response?.data?.attributes?.TeamsweOffer,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      development: response?.data?.attributes?.DevelopmentProcess,
      displayData: response?.data?.attributes?.Display,
      tabVerticalData: response?.data?.attributes?.HowWeWork,
      clientSegment: response?.data?.attributes?.Clientsegment,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      Techstackbrand: response?.data?.attributes?.TechStack,
      bannercta_onlytext: response?.data?.attributes?.Onlytext,
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
