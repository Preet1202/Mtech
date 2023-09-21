import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Awards from "../../components/Awards";
import Banner from "../../components/Banner";
import BrandSection from "../../components/BrandSection";
import ClientSegment from "../../components/ClientSegment";
import Counter from "../../components/Counter";
import dynamic from "next/dynamic";
import DevProcess from "../../components/DevProcess";
import ClutchSlider from "../../components/Slider/threeImage";
import Display from "../../components/Display";
import FAQ from "../../components/FAQ";
import { ThreeImageSlider } from "../../components/Slider/";
import FooterNew from "../../components/FooterNew";
import Form from "../../components/Form";
import Header from "../../components/Header";
import RoadBlock from "../../components/RoadBlock";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import Timeline from "../../components/Timeline";
import Versus from "../../components/Versus";
import WhiteWrapper from "../../components/WhiteWrapper";
import axiosInstance from "../../config/axiosConfig";
import TabComponent from "../../components/TabComponent";
import LibrarySection from "../../components/LibrarySection";
import SEO from "../../components/SEO";

const index = (props) => {
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
        height={true}
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
      {/* <ThreeImageSlider
        workplace={props?.clutchwidget}
        variant="clutch_webwidget"
        color="white"
      /> */}
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
      {/* <DevProcess data={props?.collaboration} /> */}
      <ServiceHeroSection variant="case-study" casestudy={props.casestudy} />

      <Banner variant="banner__yellow" ctabutton={props?.testimonialBanner} />

      <DevProcess data={props?.techstack} height="auto" />
      <ServiceHeroSection
        variant="case-study"
        casestudy={props.casestudyOther}
      />
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
        // paddingTop="100px"
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

      {/* <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.ourpeople}
        align="leftimage"
        color="white"
      /> */}

      {/* <Display
        variant="backgroundText"
        title="Expertise of Our ReactJS Developers"
        description={desc}
        color="violet"
      /> */}

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/software-product-development-service?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,Roadblock_prob.RoadBox,Services.white_box.image,Teamsweoffer.RoadBox,Form.leftside_award.images,Form.button,ClutchWidget,DevelopmentProcess.image,Display,HowWeWork.image,Clientsegment.ClientSegment_box,EngagementModel.Engagement_Box,Casestudy.image,testimonial_banner,Techstack.image,Casestudy_other.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.image,Clutch_Review.button,OtherServices.otherservice_box,ResourceLibrary.rl_box.image,ResourceLibrary.link,FAQ.button,FAQ.faqitems,bottom_consult_banner.button&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      roadBlock: response?.data?.attributes?.Roadblock_prob,
      WhiteWrapperData: response?.data?.attributes?.Services,
      teamsweOffer: response?.data?.attributes?.Teamsweoffer,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      development: response?.data?.attributes?.DevelopmentProcess,
      displayData: response?.data?.attributes?.Display,
      tabVerticalData: response?.data?.attributes?.HowWeWork,
      clientSegment: response?.data?.attributes?.Clientsegment,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      testimonialBanner: response?.data?.attributes?.testimonial_banner,
      techstack: response?.data?.attributes?.Techstack,
      casestudyOther: response?.data?.attributes?.Casestudy_other,
      whyChooseMaruti: response?.data?.attributes?.WhyChooseMaruti,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Awards,
      ourpeople: response?.data?.attributes?.OurPeople,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      otherservices: response?.data?.attributes?.OtherServices,
      resource_library: response?.data?.attributes?.ResourceLibrary,
      FAQ: response?.data?.attributes?.FAQ,

      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
