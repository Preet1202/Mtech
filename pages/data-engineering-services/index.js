import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Awards from "../../components/Awards";
import Banner from "../../components/Banner";
import BrandSection from "../../components/BrandSection";
import ClientSegment from "../../components/ClientSegment";
import Counter from "../../components/Counter";
import ClutchSlider from "../../components/Slider/threeImage";
import DevProcess from "../../components/DevProcess";
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

      <ServiceHeroSection
        variant="longcta"
        longcta={props?.longcta}
        align="leftimage"
      />
      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData}
        textColor="#383838"
      />
      <DevProcess data={props?.development} />
      <Form variant="servicepage_form" ref={formRef} formdata={props?.form} />
      {/* <BrandSection
        variant="services_primary"
        brandData={props?.otherBrand}
        color="violet-white"
      /> */}

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
      <Timeline timelinedata={props?.timeline} parentPage="data_engineering" />

      <Banner
        variant="secondary_with_button"
        bannerData={props?.shortCTA}
        fontWeight="700"
        scrollToForm={scrollToForm}
      />
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
      <DevProcess data={props?.techStack} maxWidth="none" />
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
      />
      <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.ourpeople}
        align="rightimage"
        color="white"
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
      {/* <RoadBlock type="teamsweoffer" variant="white" /> */}

      {/* <RoadBlock type="teamsweoffer" variant="red" />
      <RoadBlock type="teamsweoffer" variant="nocolor" /> */}

      {/* <ClientSegment color="orange" />
      <ClientSegment color="white" /> */}

      {/* <Awards variant="violet" type="clutchreview" /> */}
      {/* <Awards awardData={props.awards} /> */}

      {/* <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.ourpeople}
        align="leftimage"
        color="white"
      /> */}

      {/* <ServiceHeroSection
        variant="dataprotection"
        dataprotection={props?.dataprotection}
        align="leftimage"
        color="orange"
      /> */}

      {/* <Display
        variant="backgroundText"
        title="Expertise of Our ReactJS Developers"
        description={desc}
        color="violet"
      /> */}
      {/* <Display
        variant="backgroundText"
        title="Expertise of Our ReactJS Developers"
        description={desc}
        color="white"
      /> */}
      {/* <Banner variant="banner__yellow" ctabutton={props?.ctabutton} /> */}
      {/* <FAQ color="white" /> */}
      {/* <FAQ color="violet" /> */}
      {/* <Display
        variant="onlytext"
        onlytextData={props?.onlytext}
        color={props?.onlytext?.color}
      /> */}
      {/* <Versus color="orange" /> */}
      {/* <ClientSegment color="orange-white" /> */}

      {/* <ServiceHeroSection
        variant="dataprotection"
        dataprotection={props?.dataprotection}
        align="leftimage"
        color="violet"
      /> */}

      {/* <Footer footerData={props?.footerData} /> */}
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
  // const response = await axiosInstance.get(
  //   "/api/data-engineering-service?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component,counter_component.count,Clientele_BrandSection,Clientele_BrandSection.brand_logo,Clientele_BrandSection.brand_logo.image,LongCTA,LongCTA.image,LongCTA.button,Services,Services.white_box,Services.white_box.image,DevelopmentProcess,DevelopmentProcess.image,Form.leftside_award.images,ClutchWidget,ClutchWidget.image,ClutchWidget.image.image_file,Shortcta.button,TechnologyStack.image,WhyChooseMaruti.white_box.image,,Clutch_Review.image,EngagementModel,EngagementModel.Engagement_Box,Casestudy,Casestudy.image,Awards,Awards.images,OurPeople,OurPeople.image,OurPeople.ourpeople_box,OurPeople.ourpeople_box.image,DataProtection,DataProtection.image,DataProtection.dataprotection_box,DataProtection.dataprotection_box.image,OnlyText,ctabutton"
  // );
  const response = await axiosInstance.get(
    "/api/data-engineering-service?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,LongCTA.image,Services.white_box.image,DevelopmentProcess.image,Form.leftside_award.images,Form.button,ClutchWidget,Shortcta.button,EngagementModel.Engagement_Box,Casestudy.image,TechnologyStack.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.image,Clutch_Review.button,OtherServices.otherservice_box,Timeline.Timeline_box.image,bottom_consult_banner.button,Resource_Library.rl_box.image,Resource_Library.link&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );

  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      // otherBrand: response?.data?.attributes?.Otherbrand,
      longcta: response?.data?.attributes?.LongCTA,
      WhiteWrapperData: response?.data?.attributes?.Services,
      development: response?.data?.attributes?.DevelopmentProcess,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      timeline: response?.data?.attributes?.Timeline,
      shortCTA: response?.data?.attributes?.Shortcta,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      techStack: response?.data?.attributes?.TechnologyStack,
      whyChooseMaruti: response?.data?.attributes?.WhyChooseMaruti,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Awards,
      ourpeople: response?.data?.attributes?.OurPeople,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      resource_library: response?.data?.attributes?.Resource_Library,
      otherservices: response?.data?.attributes?.OtherServices,
      bottombanner: response?.data?.attributes?.bottom_consult_banner,
      // onlytext: response?.data?.attributes?.OnlyText,
      // ctabutton: response?.data?.attributes?.ctabutton,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
