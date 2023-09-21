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
import TabComponent from "../../components/TabComponent";
import CardBox from "../../components/CardBox";
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

      <Banner
        variant="banner__bottom"
        bannerData={props?.bannercta}
        scrollToForm={scrollToForm}
        color="white"
        buttonType="nonanimated"
        ForBottomBannerButon={true}
        ForpythonCTA={true}
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.WhiteWrapperData}
        textColor="#383838"
        marginBottom="80px"
      />

      <WhiteWrapper
        variant="services_secondary"
        WhiteWrapperData={props?.serviceOtherWhiteWrapper}
        textColor="#383838"
        color="violet"
        marginBottom="80px"
      />

      <CardBox
        variant="devs"
        productEngineeringData={props?.cardBox}
        expertiseData={props?.expertiseBlock}
        color="white"
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
      {/* <DevProcess
        data={props?.reactTech}
        height="auto"
    
      /> */}
      <BrandSection
        variant="services_primary"
        brandData={props?.Techstackbrand}
        color="violet-orange"
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

      {/* <Banner
        variant="banner__bottom"
        bannerData={props?.bottombanner}
        scrollToForm={scrollToForm}
      /> */}
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

  const response = await axiosInstance.get(
    "/api/hire-react-dev?populate=HeroSection,HeroSection.image,HeroSection.button,counter_component.count,Clientele_BrandSection.brand_logo.image,LongCTA.button,Services.white_box.image,Serviceother.white_box.image,card_box.cb_box,Expertise.expertise_box.image,ServicesOther.white_box.image,Form.leftside_award.images,Form.button,ClutchWidget,Devprocess.image,Hiredev.image,Clientsegment.ClientSegment_box,Versus.versus_box,testimonial_banner.button,EngagementModel.Engagement_Box,Casestudy.image,testimonial_banner,ReactTech.image,WhyChooseMaruti.white_box.image,DataProtection.image,DataProtection.dataprotection_box.image,Award_other.images,OurPeople.image,OurPeople.ourpeople_box.image,Clutch_Review.image,Clutch_Review.button,OtherServices.otherservice_box,FAQ.button,FAQ.faqitems,brand_tech.brand_logo.image,ResourceLibrary.rl_box.image,ResourceLibrary.link&populate=SEO.image&populate=SEO.metaProperties&populate=SEO.keywords"
  );
  return {
    props: {
      headerData: headerResponse,
      herosection: response?.data?.attributes?.HeroSection,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.Clientele_BrandSection,
      bannercta: response?.data?.attributes?.LongCTA,

      WhiteWrapperData: response?.data?.attributes?.Services,
      serviceOtherWhiteWrapper: response?.data?.attributes?.Serviceother,
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
      reactTech: response?.data?.attributes?.ReactTech,
      Techstackbrand: response?.data?.attributes?.brand_tech,
      whyChooseMaruti: response?.data?.attributes?.WhyChooseMaruti,
      dataprotection: response?.data?.attributes?.DataProtection,
      awards: response?.data?.attributes?.Award_other,
      clutchreview: response?.data?.attributes?.Clutch_Review,
      resource_library: response?.data?.attributes?.ResourceLibrary,
      otherservices: response?.data?.attributes?.OtherServices,
      FAQ: response?.data?.attributes?.FAQ,
      //   bottombanner: response?.data?.attributes?.bottom_consult_banner,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.SEO,
    },
  };
}
