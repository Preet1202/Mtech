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
import Display from "../../components/Display";
import FAQ from "../../components/FAQ";
import { ThreeImageSlider } from "../../components/Slider/";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ClutchSlider from "../../components/Slider/threeImage";
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
import FooterNew from "../../components/FooterNew";
import OutcomesWeDeliver from "../../components/OutcomesWeDeliver";

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
        variant="ourpeople"
        ourpeople={props?.CTA}
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
        height_agile={true}
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
      <TabComponent
        variant="primary"
        tabVerticalData={props?.tabVerticalData}
        displayData={props?.displayData}
        descTextWidth="930px"
        richtext={true}
        descColor="#383838"
        titleColor="#262531"
      />

      <OutcomesWeDeliver
        outcomesdata={props?.deliverablesData}
        variant={props?.deliverablesData.variant}
      />

      <Banner
        variant="secondary_with_button"
        mt="3rem"
        bannerData={props?.testimonial_banner}
        fontWeight="700"
        scrollToForm={scrollToForm}
      />
      <ClientSegment color="orange-white" csData={props?.clientSegment} />
      <WhiteWrapper
        variant="engagement_model"
        engagementmodel={props?.engagementmodel}
        color="secondary"
        marginBottom="0px"
      />
      <ServiceHeroSection
        variant="case-study"
        casestudy={props?.casestudy}
        // align="leftimage"
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

  const response = await axiosInstance.get(
    "/api/agile-software-development-service?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,CTA.image,Roadblock_prob.RoadBox,Services.white_box.image,Teamsweoffer.RoadBox,Form.leftside_award.images,Form.button,ClutchWidget,Display,HowWeWork.image,testimonial_banner.button,Clientsegment.ClientSegment_box,EngagementModel.Engagement_Box,Casestudy.image,outcomes_we_deliver.outcomes_we_deliver_box.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.image,Clutch_Review.button,OtherServices.otherservice_box,ResourceLibrary.rl_box.image,ResourceLibrary.link,FAQ.button,FAQ.faqitems,bottom_consult_banner.button&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      CTA: response?.data?.attributes?.CTA,
      roadBlock: response?.data?.attributes?.Roadblock_prob,
      WhiteWrapperData: response?.data?.attributes?.Services,
      teamsweOffer: response?.data?.attributes?.Teamsweoffer,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      displayData: response?.data?.attributes?.Display,
      tabVerticalData: response?.data?.attributes?.HowWeWork,
      testimonial_banner: response?.data?.attributes?.testimonial_banner,
      clientSegment: response?.data?.attributes?.Clientsegment,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      deliverablesData: response?.data?.attributes?.outcomes_we_deliver,
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
