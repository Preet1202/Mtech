import React from "react";
import Header from "../../components/Header";
import OneImageText from "../../components/Slider/oneImageText";
import WhiteWrapper from "../../components/WhiteWrapper";
import axiosInstance from "../../config/axiosConfig";
import { ThreeImageSlider } from "../../components/Slider/";
import Counter from "../../components/Counter";
import { Container } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import Display from "../../components/Display/";
import Banner from "../../components/Banner";
import RectangleCards from "../../components/RectangleCards";
import FooterNew from "../../components/FooterNew";
import SEO from "../../components/SEO";
import CustomCarousel from "../../components/CustomCarousel";
import ReadReview from "../../components/ReadReview";
import RoadBlock from "../../components/RoadBlock";
import TabComponent from "../../components/TabComponent";
import Awards from "../../components/Awards";

const Careers = (props) => {
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
  return (
    <>
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      {/* <OneImageText
        sliderData={props?.careersDetails}
        textAlign="center"
        variant="primary"
      /> */}
      <CustomCarousel
        sliderData={props?.careersDetails}
        textAlign="center"
        variant="careerpage"
        richtext={true}
        descColor="#383838"
      />
      {/* <ReadReview readreview={props.readreview} color="violettop" />
      <ReadReview readreview={props.readreview} color="redtop" /> */}
      <ReadReview
        readreview={props?.readreview}
        color={props?.readreview?.background_position}
      />

      <RoadBlock
        roadblock={props?.roadblock}
        variant={props?.roadblock?.Variant}
        mb="80px"
      />

      <ThreeImageSlider
        workplace={props?.workplace}
        variant="clutch-widget"
        color="orange"
        type="threeimage"
      />

      <TabComponent
        variant="primary"
        tabVerticalData={props?.tabVerticalData}
        displayData={props?.displayData}
        descTextWidth="930px"
        richtext={true}
        descColor="#383838"
        titleColor="#262531"
        mb="80px"
      />
      <Counter
        draw={draw}
        counterData={props?.CounterData}
        // variant="noimage"
        backgroundColor="darkblue"
        mb="80px"
      />

      <RectangleCards
        variant="workbenefit"
        workbenefitdata={props?.workbenefit}
        type="imgandtext"
      />

      <Awards
        awardData={props?.awards}
        variant="primary"
        height="417px"
        mb="60px"
        type="awards"
        title={true}
        // desc={true}
        marginbottom={true}
      />

      <ThreeImageSlider
        testimonial={props?.testimonial}
        variant="text"
        color="violet"
        type="textandimage"
        mb="80px"
      />
      {/* <ThreeImageSlider
        testimonial={props?.testimonial}
        variant="text"
        color="violet"
        type="textnoimage"
      /> */}

      <Banner
        variant="banner__white"
        bannerData={props?.CurrentOpeningBannerData}
        position="center"
        mb="80px"
      />

      {/* <WhiteWrapper
        WhiteWrapperData={props?.WhiteWrapperData}
        backgroundColor="darkblue"
        variant="primary"
        borderradius="4px"
      /> */}
      {/* <ThreeImageSlider imageData={props?.threeImageData} background="red" /> */}
      {/* <Display variant="primary_one" data={props?.DisplayData} /> */}
      {/* <Container as="span" ref={drawRef} className="home-counter pb-5"> */}
      {/* </Container> */}
      {/* <RectangleCards RectanglecardData={props?.ReactAngleCardData} /> */}
      {/* <Banner
        variant="banner__red"
        bannerData={props?.JobOpeningBannerData}
        backgroundColor="darkblue"
      /> */}
      {/* <Banner
        variant="primary_with_button"
        bannerData={props?.ContactUsBannerData}
      /> */}
      <FooterNew newFooter={props?.newFooter} />
      {/* <Banner
        variant="primary_with_button"
        bannerButtonData={props.ContactUsBannerData}
      /> */}
    </>
  );
};

export default Careers;

export async function getStaticProps() {
  let result;

  // const response = await axiosInstance.get(
  //   "/api/career?populate=hero_section&populate=hero_section.image&populate=white_wrapper&populate=white_wrapper.image&populate=white_wrapper.white_box&populate=white_wrapper.white_box.image&populate=three_image&populate=three_image.image&populate=three_image.image.image_file&populate=display&populate=display.white_box&populate=display.white_box.image&populate=counter_component&populate=counter_component.count&populate=rectangle_card&&populate=rectangle_card.rc_card&populate=rectangle_card.rc_card.image&popolate=job_opening_banner&populate=job_opening_banner&populate=current_opening_banner.button&populate=contact_us_banner.button&populate=seo&populate=seo.image&populate=seo.metaProperties&populate=seo.keywords"
  // );

  const response = await axiosInstance.get(
    "/api/career?populate=hero_section,hero_section.image,hero_section.button,ReadReviews,ReadReviews.ReviewStar,ReadReviews.ReviewStar.images,Roadblock_prob,Roadblock_prob.RoadBox,GreatPlaceToWork,GreatPlaceToWork.image,,Workplace,Workplace.image,Workplace.image.image_file,Display,HowWeWork,HowWeWork.image,Awards,Awards.images,WorkBenefit,WorkBenefit.BenefitBox,WorkBenefit.BenefitBox.image,Testimonial,Testimonial.image,current_opening_banner,current_opening_banner.button,counter_component,counter_component.count,seo,seo.image,seo.metaProperties,seo.keywords"
  );

  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  return {
    props: {
      headerData: headerResponse,
      careersDetails: response?.data?.attributes?.hero_section,
      readreview: response?.data?.attributes?.ReadReviews,
      roadblock: response?.data?.attributes?.Roadblock_prob,
      // gptw: response?.data?.attributes?.GreatPlaceToWork,
      workplace: response?.data?.attributes?.Workplace,
      displayData: response?.data?.attributes?.Display,
      tabVerticalData: response?.data?.attributes?.HowWeWork,
      workbenefit: response?.data?.attributes?.WorkBenefit,
      awards: response?.data?.attributes?.Awards,
      testimonial: response?.data?.attributes?.Testimonial,
      CurrentOpeningBannerData:
        response?.data?.attributes?.current_opening_banner,
      CounterData: response?.data?.attributes?.counter_component,
      // WhiteWrapperData: response?.data?.attributes?.white_wrapper,
      // threeImageData: response?.data?.attributes?.three_image,
      // DisplayData: response?.data?.attributes?.display,
      // JobOpeningBannerData: response?.data?.attributes?.job_opening_banner,
      // ContactUsBannerData: response?.data?.attributes?.contact_us_banner,
      // ReactAngleCardData: response?.data?.attributes?.rectangle_card,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.seo,
    },
  };
}
