import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import BrandSection from "../../components/BrandSection";
import LatestEpisode from "../../components/Podcast/LatestEpisode";
import SEO from "../../components/SEO";
import dynamic from "next/dynamic";
import CustomCarousel from "../../components/CustomCarousel";
import ClientTestimonial from "../../components/ClientTestimonial";
import NewService from "../../components/NewService";
import Awards from "../../components/Awards";
import HomePublications from "../../components/HomePublications";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import FooterNew from "../../components/FooterNew";

function Home(props) {
  const drawRef = useRef(null);
  const ref = useRef(null);
  const scrollref = useRef(null);
  const [draw, setDraw] = useState(false);
  const [scriptLoadingState, setScriptLoadingState] = useState("IDLE");
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
  }
  const DynamicCounter = dynamic(() => import("../../components/Counter"))
  return (
    <>
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      <CustomCarousel
        sliderData={props?.sliderData}
        reference={ref}
        mobileref={scrollref}
        variant="homepage_single"
      />
      <NewService serviceListData={props?.serviceListData} />
      <LatestEpisode
        sectionData={props?.client_testimonial_video}
        usedAt={"homePage"}
      />
      <BrandSection
        variant="primary"
        brandData={props?.newbrandData}
        mt="0px"
        addExtraPadding={true}
      />
      <DynamicCounter
        draw={draw}
        counterData={props?.companyStatistics}
        variant="companystat"
      />
      <ClientTestimonial newCTData={props?.newCTData} />
      <Banner variant="homepage__cta" bannerData={props?.newCTA} />
      <Awards
        type="award_certification"
        variant="primary"
        awardData={props?.awardAndCertification}
      />
      <ServiceHeroSection
        variant="case-study"
        casestudy={props?.caseStudy}
        addExtraPadding={true}
      />
      <HomePublications
        publication={props?.publication}
        recentPublications={props?.recentPublications}
      />
      <Banner variant="homepage__banner" bannerData={props?.contactCTA} />
      <FooterNew newFooter={props?.newFooter} addExtraPadding={true} />
    </>
  )
}
export default Home
