import React, { useRef, useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import Header from "../../components/Header";
import Head from "next/head";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import Counter from "../../components/Counter";
import LatestEpisode from "../../components/Podcast/LatestEpisode";
import BrandSection from "../../components/BrandSection";
import WhiteWrapper from "../../components/WhiteWrapper";
import Form from "../../components/Form";
import ClutchSlider from "../../components/Slider/threeImage";
import DevProcess from "../../components/DevProcess";
import ClientSegment from "../../components/ClientSegment";
import Awards from "../../components/Awards";
import LibrarySection from "../../components/LibrarySection";
import FooterNew from "../../components/FooterNew";

const ProductDevServicesDesignrush = (props) => {
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

      <ServiceHeroSection
        variant="ourpeople"
        ourpeople={props?.teamsweOffer}
        color="white"
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

      <ClientSegment color="orange-white" csData={props?.clientSegment} />

      <WhiteWrapper
        variant="engagement_model"
        engagementmodel={props.engagementmodel}
        color="secondary"
        marginBottom="80px"
      />

      <ServiceHeroSection
        variant="case-study"
        casestudy={props.casestudy_other}
        align="leftimage"
      />

      <DevProcess data={props?.techstack} height="auto" />

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

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
};

export default ProductDevServicesDesignrush;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const response = await axiosInstance.get(
    "/api/paid-campaigns?filters[slug][$eq]=product-dev-services-designrush&populate=hero_section.button,hero_section.image,counter_component.count,teams_we_offer_ai_clutch.image,form.leftside_award.images,form.button,clutch_widget,development_process.image,clientele_brand_section.brand_logo.image,long_cta.image,services.white_box.image,client_segment.ClientSegment_box,engagement_model.Engagement_Box,case_study.image,case_study_other.image,technology_stack.image,why_choose_maruti_techlabs.white_box.image,data_protection.image,data_protection.dataprotection_box.image,awards_recognitions.images,our_people_our_strength.image,our_people_our_strength.ourpeople_box.image,clutch_review.image,clutch_review.button,resource_library.rl_box.image,resource_library.link,other_services.otherservice_box,client_testimonial_video.button,client_testimonial_video.video_link.image,client_testimonial_video.variant"
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
      WhiteWrapperData: response?.data[0]?.attributes?.services,
      teamsweOffer: response?.data[0]?.attributes?.teams_we_offer_ai_clutch,
      form: response?.data[0]?.attributes?.form,
      clutchwidget: response?.data[0]?.attributes?.clutch_widget,
      development: response?.data[0]?.attributes?.development_process,
      clientSegment: response?.data[0]?.attributes?.client_segment,
      engagementmodel: response?.data[0]?.attributes?.engagement_model,
      casestudy: response?.data[0]?.attributes?.case_study,
      techstack: response?.data[0]?.attributes?.technology_stack,
      casestudy_other: response?.data[0]?.attributes?.case_study_other,
      whyChooseMaruti:
        response?.data[0]?.attributes?.why_choose_maruti_techlabs,
      dataprotection: response?.data[0]?.attributes?.data_protection,
      awards: response?.data[0]?.attributes?.awards_recognitions,
      ourpeople: response?.data[0]?.attributes?.our_people_our_strength,
      clutchreview: response?.data[0]?.attributes?.clutch_review,
      otherservices: response?.data[0]?.attributes?.other_services,
      resource_library: response?.data[0]?.attributes?.resource_library,
      newFooter: newFooterResponse?.data?.attributes,
    },
  };
}
