import Home from "./home";

// import { HOME_PAGE } from "../services/API";
import axiosInstance from "../config/axiosConfig";

export default function Index(props) {
  return (
    <>
      <Home
        headerData={props.headerData}
        sliderData={props.sliderData}
        serviceListData={props.servicesList}
        client_testimonial_video={props?.client_testimonial_video}
        newbrandData={props.newbrandData}
        newCTA={props.newCTA}
        awardAndCertification={props.AwardandCertification}
        companyStatistics={props.companyStatistics}
        newCTData={props.newCTData}
        caseStudy={props.caseStudy}
        publication={props.publication}
        recentPublications={props.recentPublications}
        newFooter={props.newFooter}
        contactCTA={props.contactCTA}
        bannerData={props.bannerData}
        analyticsData={props.analyticsData}
        botDevelopmentData={props.botDevelopmentData}
        artificialIntelligenceData={props.artificialIntelligenceData}
        brandData={props.brandData}
        alertyData={props.alertyData}
        wotnotData={props.wotnotData}
        productEngineeringData={props.productEngineeringData}
        twoImageSliderData={props.twoImageSliderData}
        counterData={props.counterData}
        bannerButtonData={props.bannerButtonData}
        seoData={props.seoData}
        resource_library={props?.resource_library}
        gartnerData={props?.gartnerData}
      />
    </>
  );
}

// export const getStaticProps = async () => {
//   return {
//     props: {
//       headerData: header,
//       bannerData: banner_data,
//       analyticsData: home_analyticsdata,
//       brandData: home_brand,
//       botDevelopmentData: bot_development,
//       sliderData: home_slider,
//       artificialIntelligenceData: artificial_intelligence,
//       footerData: footer,
//       productEngineeringData: product_engineering,
//       alertyData: alerty,
//       wotnotData: wotnot,
//       twoImageSliderData: case_study,
//       counterData: counter,
//       clientTestimonialData: client_testimonial,
//       bannerButtonData: banner_with_button,
//     },
//   };
// };

export async function getStaticProps() {
  let newHomePageQuery =
    "herosection.button,herosection.image,ServicesList.servicelist_box,ClientTestimonial.button,ClientTestimonial.ClientBox.logo,ClientTestimonial.ClientBox.reviewer_img,BrandSection.brand_logo.image,CompanyStatistics.statistics,CompanyStatistics.members,CTA.button,CTA.image,AwardandCerti.AwardandCertiBox.image,AwardandCerti.showinmobile,CaseStudy.image,Publications.button,ContactCTA.image,ContactCTA.button,client_testimonial_video.button,client_testimonial_video.video_link.image,client_testimonial_video.variant";

  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const response = await axiosInstance.get(
    "/api/homepage?populate=hero_section&populate=hero_section.image&populate=hero_section.button&populate=banner&populate=banner.button&populate=vertical_cards&populate=vertical_cards.image&populate=vertical_cards.vc_card&populate=white_wrapper&populate=white_wrapper.image&populate=white_wrapper.white_box&populate=white_wrapper.white_box.image&populate=ai_vertical_cards&populate=ai_vertical_cards.image&populate=ai_vertical_cards.vc_card&populate=card_box&populate=card_box.image&populate=card_box.cb_box&populate=case_studies&populate=case_studies.case_study_image&populate=case_studies.case_study_image.image&populate=service_detail_wotnot&populate=service_detail_wotnot.image&populate=service_detail_wotnot.advantages&populate=service_detail_wotnot.advantages.image&populate=service_detail_wotnot.button&populate=service_detail_alertly&populate=service_detail_alertly.image&populate=service_detail_alertly.advantages&populate=service_detail_alertly.advantages.image&populate=service_detail_alertly.button&populate=counter_component&populate=counter_component.count&populate=brand_section&populate=brand_section.brand_logo&populate=brand_section.brand_logo.image&populate=client_testimonial&populate=client_testimonial.vertical_carousel&populate=client_testimonial.vertical_carousel.company_logo&populate=client_testimonial.vertical_carousel.client_image&populate=resource_library&populate=resource_library.link&populate=resource_library.rl_box&populate=resource_library.rl_box.image&populate=contact_us_banner&populate=contact_us_banner.button&populate=seo&populate=seo.image&populate=seo.metaProperties&populate=seo.keywords,Gartner_banner,Gartner_banner.image"
  );

  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const homepage = await axiosInstance.get(
    `/api/new-home-page?populate=${newHomePageQuery}`
  );

  const recentBlogs = await axiosInstance.get(
    `/api/blogs?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=4&populate=heroSection_image&populate=authors`
  );

  return {
    props: {
      headerData: headerResponse,
      sliderData: homepage?.data?.attributes?.herosection,
      servicesList: homepage?.data?.attributes?.ServicesList,
      newCTData: homepage?.data?.attributes?.ClientTestimonial,
      newbrandData: homepage?.data?.attributes?.BrandSection,
      newCTA: homepage?.data?.attributes?.CTA,
      AwardandCertification: homepage?.data?.attributes?.AwardandCerti,
      companyStatistics: homepage?.data?.attributes?.CompanyStatistics,
      client_testimonial_video:
        homepage?.data?.attributes?.client_testimonial_video,
      caseStudy: homepage?.data?.attributes?.CaseStudy,
      publication: homepage?.data?.attributes?.Publications,
      recentPublications: recentBlogs?.data,
      contactCTA: homepage?.data?.attributes?.ContactCTA,
      newFooter: newFooterResponse?.data?.attributes,
      bannerData: response?.data?.attributes?.banner,
      botDevelopmentData: response?.data?.attributes?.vertical_cards,
      analyticsData: response?.data?.attributes?.white_wrapper,
      artificialIntelligenceData: response?.data?.attributes?.ai_vertical_cards,
      productEngineeringData: response?.data?.attributes?.card_box,
      twoImageSliderData: response?.data?.attributes?.case_studies,
      wotnotData: response?.data?.attributes?.service_detail_wotnot,
      alertyData: response?.data?.attributes?.service_detail_alertly,
      counterData: response?.data?.attributes?.counter_component,
      brandData: response?.data?.attributes?.brand_section,
      gartnerData: response?.data?.attributes?.Gartner_banner,
      clientTestimonialData: response?.data?.attributes?.client_testimonial,
      bannerButtonData: response?.data?.attributes?.contact_us_banner,
      resource_library: response?.data?.attributes?.resource_library,
      seoData: response?.data?.attributes.seo,
    },
  };
}
