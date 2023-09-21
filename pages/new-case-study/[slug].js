import React, { useRef } from "react";
import axiosInstance from "../../config/axiosConfig";
import FooterNew from "../../components/FooterNew";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import HeroSection from "../../components/Case-studies/HeroSection";
import OurClient from "../../components/Case-studies/OurClient";
import TitleDescription from "../../components/Common/TitleDescription";
import ClientTestimonial from "../../components/Case-studies/ClientTestimonial";
import Form from "../../components/Form";
import ClutchSlider from "../../components/Slider/threeImage";
import CasestudyImages from "../../components/Case-studies/CasestudyImages";
import TitleDescriptionImage from "../../components/Common/TitleDescriptionImage";
import TitleImage from "../../components/Common/TitleImage";
import TitleDescImgButton from "../../components/Common/TitleDescImgButton";
import CasestudyStatistics from "../../components/Case-studies/CasestudyStatistics";
import Timeline from "../../components/Timeline";
import DescVerticalTabs from "../../components/Common/DescVerticalTabs";
import YTVideos from "../../components/Common/YTVideos";
import ClutchReviews from "../../components/Case-studies/ClutchReviews";
import WhiteWrapper from "../../components/WhiteWrapper";
import CompanyStatistics from "../../components/Common/CompanyStatistics";
import Clientele from "../../components/Case-studies/Clientele";

function NewCaseStudy(props) {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView();
  };

  return (
    <>
      <SEO seoData={props?.seoData} />

      {props?.headerData && <Header headerData={props?.headerData} />}

      {props?.heroSectionData && (
        <HeroSection
          sectionData={props?.heroSectionData}
          scrollToForm={scrollToForm}
        />
      )}

      {props?.ourClientData && <OurClient sectionData={props?.ourClientData} />}

      {props?.projectScopeData && (
        <TitleDescription
          sectionData={props?.projectScopeData}
          withBGImage={true}
        />
      )}

      {props?.challengeData && (
        <TitleDescription sectionData={props?.challengeData} />
      )}

      {props?.whyMarutiData && (
        <TitleDescription
          sectionData={props?.whyMarutiData}
          withBGImage={true}
        />
      )}

      {props?.clientTestimonial1 && (
        <ClientTestimonial sectionData={props?.clientTestimonial1} />
      )}

      {props?.solutionData && (
        <TitleDescription sectionData={props?.solutionData} />
      )}

      {props?.clientTestimonial2 && (
        <ClientTestimonial sectionData={props?.clientTestimonial2} />
      )}

      {props?.formData && (
        <Form
          variant="servicepage_form"
          ref={formRef}
          formdata={props?.formData}
        />
      )}

      {props?.clutchWidgetData && (
        <ClutchSlider
          workplace={props?.clutchWidgetData}
          variant="clutch_webwidget"
          color="white"
        />
      )}

      {props?.casestudyImagesData && (
        <CasestudyImages sectionData={props?.casestudyImagesData} />
      )}

      {props?.clientTestimonial3 && (
        <ClientTestimonial sectionData={props?.clientTestimonial3} />
      )}

      {props?.whatChallengesData && (
        <TitleDescription
          sectionData={props?.whatChallengesData}
          withBGImage={true}
        />
      )}

      {props?.commCollabData && (
        <TitleDescriptionImage sectionData={props?.commCollabData} />
      )}
      {props?.techstackData && (
        <TitleImage sectionData={props?.techstackData} />
      )}

      {props?.clientTestimonial4 && (
        <ClientTestimonial sectionData={props?.clientTestimonial4} />
      )}

      {props?.resultsData && (
        <TitleDescImgButton
          sectionData={props?.resultsData}
          withBGImage={true}
          scrollToForm={scrollToForm}
        />
      )}

      {props?.caseStatisticsData && (
        <CasestudyStatistics sectionData={props?.caseStatisticsData} />
      )}

      {props?.developmentData && (
        <TitleDescriptionImage sectionData={props?.developmentData} />
      )}

      {props?.deliveryProcessData && (
        <Timeline timelinedata={props?.deliveryProcessData} />
      )}

      {props?.howWeWorkData && (
        <DescVerticalTabs sectionData={props?.howWeWorkData} />
      )}

      {props?.videosData && <YTVideos sectionData={props?.videosData} />}

      {props?.aiReadinessAuditData && (
        <TitleDescriptionImage sectionData={props?.aiReadinessAuditData} />
      )}

      {props?.clutchReviewsData && (
        <ClutchReviews
          sectionData={props?.clutchReviewsData}
          scrollToForm={scrollToForm}
        />
      )}

      {props?.whyChooseMarutiData && (
        <WhiteWrapper
          variant="services_secondary"
          WhiteWrapperData={props?.whyChooseMarutiData}
          textColor="#383838"
          type="whychoosemaruti"
          marginBottom="80px"
        />
      )}

      {props?.companyStatisticsData && (
        <CompanyStatistics sectionData={props?.companyStatisticsData} />
      )}

      {props?.clienteleData && (
        <Clientele
          sectionData={props?.clienteleData}
          scrollToForm={scrollToForm}
        />
      )}

      {props?.newFooter && <FooterNew newFooter={props?.newFooter} />}
    </>
  );
}
export default NewCaseStudy;

export async function getStaticPaths() {
  // TODO - MAKE THIS DYNAMIC-Read from resources just like blogs
  const paths = [
    "/new-case-study/media-management-saas-product-development/",
    "/new-case-study/medical-record-processing-using-nlp/",
    "/new-case-study/automated-invoice-processing/",
    "/new-case-study/hr-process-automation/",
    "/new-case-study/appointment-booking-chatbot-for-hospital/",
    "/new-case-study/covid-awareness-whatsapp-chatbot/",
    "/new-case-study/build-an-image-search-engine-using-python/",
    "/new-case-study/workflow-orchestration-using-airflow/",
    "/new-case-study/ecommerce-mvp-development/",
    "/new-case-study/frontend-development-for-weather-forecasting-app/",
    "/new-case-study/frontend-development-of-manufacturing-analytics-tool/",
    "/new-case-study/mental-health-chatbot-using-nlp/",
    "/new-case-study/product-development-of-bi-platform",
    "/new-case-study/revamping-real-estate-platform-using-agile-development/",
    "/new-case-study/predictive-analytics-in-the-auto-industry/",
    "/new-case-study/machine-learning-for-audio-classification/",
    "/new-case-study/restaurant-chatbot/",
    "/new-case-study/finance-chatbot/",
    "/new-case-study/sms-chatbot/",
    "/new-case-study/scheduling-chatbot/",
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentSlug = params.slug;
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const caseStudyData = await axiosInstance.get(
    `/api/new-case-studies?filters[slug][$eq]=${currentSlug}&populate=hero_section.background_img,hero_section.cta_button,hero_section.expertise_delivered_items,hero_section.industry_items,hero_section.hero_statistics,our_client.expertise_delivered_items,our_client.industry_items,our_client.variant,project_scope.variant,challenge.variant,why_maruti_techlabs.variant,client_testimonial_1.client_img,client_testimonial_1.variant,solution.variant,client_testimonial_2.client_img,client_testimonial_2.variant,form.leftside_award.images,form.button,clutch_widget.variant,casestudy_images.image,client_testimonial_3.client_img,client_testimonial_3.variant,what_challenges.variant,communication_collab.image,communication_collab.variant,communication_collab.variant_imgalign,technology_stack.image,client_testimonial_4.client_img,client_testimonial_4.variant,results.image,results.button,results.variant,results.variant_imgalign,casestudy_statistics.statistics_items,casestudy_statistics.variant,casestudy_statistics.variant_textalign,development_process.image,development_process.variant,development_process.variant_imgalign,delivery_process.Timeline_box.image,how_we_work.title_description,how_we_work.tabs.image,how_we_work.button,yt_snippets.video_items.cover_image,ai_readiness_audit.image,ai_readiness_audit.variant,ai_readiness_audit.variant_imgalign,clutch_reviews.image,clutch_reviews.button,clutch_reviews.variant,WhyChooseMaruti.white_box.image,company_statistics.statistics,company_statistics.variant,clientele.images,clientele.button,clientele.variant,seo.image`
  );

  const itemBaseDetails = {
    title: caseStudyData?.data[0]?.attributes?.title,
    slug: caseStudyData?.data[0]?.attributes?.slug,
    type: caseStudyData?.data[0]?.attributes?.type,
    type: caseStudyData?.data[0]?.attributes?.type,
    publishedAt: caseStudyData?.data[0]?.attributes?.publishedAt,
    updatedAt: caseStudyData?.data[0]?.attributes?.updatedAt,
    createdAt: caseStudyData?.data[0]?.attributes?.createdAt,
  };

  return {
    props: {
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,
      itemBaseDetails: itemBaseDetails,
      heroSectionData: caseStudyData?.data[0]?.attributes?.hero_section,
      ourClientData: caseStudyData?.data[0]?.attributes?.our_client,
      projectScopeData: caseStudyData?.data[0]?.attributes?.project_scope,
      challengeData: caseStudyData?.data[0]?.attributes?.challenge,
      whyMarutiData: caseStudyData?.data[0]?.attributes?.why_maruti_techlabs,
      clientTestimonial1:
        caseStudyData?.data[0]?.attributes?.client_testimonial_1,
      solutionData: caseStudyData?.data[0]?.attributes?.solution,
      clientTestimonial2:
        caseStudyData?.data[0]?.attributes?.client_testimonial_2,
      formData: caseStudyData?.data[0]?.attributes?.form,
      clutchWidgetData: caseStudyData?.data[0]?.attributes?.clutch_widget,
      casestudyImagesData: caseStudyData?.data[0]?.attributes?.casestudy_images,
      clientTestimonial3:
        caseStudyData?.data[0]?.attributes?.client_testimonial_3,
      whatChallengesData: caseStudyData?.data[0]?.attributes?.what_challenges,
      commCollabData: caseStudyData?.data[0]?.attributes?.communication_collab,
      techstackData: caseStudyData?.data[0]?.attributes?.technology_stack,
      clientTestimonial4:
        caseStudyData?.data[0]?.attributes?.client_testimonial_4,
      resultsData: caseStudyData?.data[0]?.attributes?.results,
      caseStatisticsData:
        caseStudyData?.data[0]?.attributes?.casestudy_statistics,
      developmentData: caseStudyData?.data[0]?.attributes?.development_process,
      deliveryProcessData: caseStudyData?.data[0]?.attributes?.delivery_process,
      howWeWorkData: caseStudyData?.data[0]?.attributes?.how_we_work,
      videosData: caseStudyData?.data[0]?.attributes?.yt_snippets,
      aiReadinessAuditData:
        caseStudyData?.data[0]?.attributes?.ai_readiness_audit,
      clutchReviewsData: caseStudyData?.data[0]?.attributes?.clutch_reviews,
      whyChooseMarutiData: caseStudyData?.data[0]?.attributes?.WhyChooseMaruti,
      companyStatisticsData:
        caseStudyData?.data[0]?.attributes?.company_statistics,
      clienteleData: caseStudyData?.data[0]?.attributes?.clientele,
      seoData: caseStudyData?.data[0]?.attributes?.seo,
    },
  };
}
