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
import CardBox from "../../components/CardBox";
import Form from "../../components/Form";
import DevProcess from "../../components/DevProcess";
import ClientSegment from "../../components/ClientSegment";
import Versus from "../../components/Versus";
import Banner from "../../components/Banner";
import Awards from "../../components/Awards";
import LibrarySection from "../../components/LibrarySection";
import FAQ from "../../components/FAQ";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";

const HireNodejsDevelopers = (props) => {
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

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData}
        textColor="#383838"
        height_hire_nodejs={true}
      />
      <CardBox
        variant="devs"
        productEngineeringData={props?.cardBox}
        expertiseData={props?.expertiseBlock}
        color="white"
      />

      <Form variant="servicepage_form" ref={formRef} formdata={props?.form} />

      <ClutchSlider
        workplace={props?.clutchwidget}
        variant="clutch_webwidget"
        color="white"
      />

      <DevProcess data={props?.development} />

      <DevProcess
        data={props?.hireDev}
        color="violet"
        height="auto"
        // paddingTop="80px"
        // paddingBottom="80px"
        maxWidth="fit-content"
      />

      <ClientSegment color="orange-white" csData={props?.clientSegment} />

      <Versus color="violet" versusData={props?.versus} />

      <Banner
        variant="secondary_with_button"
        mt="3rem"
        bannerData={props?.testimonial_banner}
        fontWeight="700"
        scrollToForm={scrollToForm}
      />
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

      <DevProcess data={props?.techStack} height="auto" />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.service_other}
        textColor="#383838"
        height_hire_nodejs_other={true}
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
export default HireNodejsDevelopers;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/hire-dedicated-node-js-developer?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,CTA.image,Service.white_box.image,card_box.cb_box,Expertise.expertise_box.image,Form.leftside_award.images,Form.button,ClutchWidget,Devprocess.image,Hiredev.image,Clientsegment.ClientSegment_box,Versus.versus_box,testimonial_banner.button,EngagementModel.Engagement_Box,Casestudy.image,Techstack.image,ServiceWCM.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Awards.images,Clutch_Review.image,Clutch_Review.button,ResourceLibrary.rl_box.image,ResourceLibrary.link,OtherServices.otherservice_box,FAQ.button,FAQ.faqitems&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      longcta: response?.data?.attributes?.CTA,
      WhiteWrapperData: response?.data?.attributes?.Service,
      cardBox: response?.data?.attributes?.card_box,
      expertiseBlock: response?.data?.attributes?.Expertise,
      form: response?.data?.attributes?.Form,
      clutchwidget: response?.data?.attributes?.ClutchWidget,
      development: response?.data?.attributes?.Devprocess,
      hireDev: response?.data?.attributes?.Hiredev,
      clientSegment: response?.data?.attributes?.Clientsegment,
      versus: response?.data?.attributes?.Versus,
      testimonial_banner: response?.data?.attributes?.testimonial_banner,
      engagementmodel: response?.data?.attributes?.EngagementModel,
      casestudy: response?.data?.attributes?.Casestudy,
      techStack: response?.data?.attributes?.Techstack,
      service_other: response?.data?.attributes?.ServiceWCM,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Awards,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      resource_library: response?.data?.attributes?.ResourceLibrary,
      otherservices: response?.data?.attributes?.OtherServices,
      FAQ: response?.data?.attributes?.FAQ,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
