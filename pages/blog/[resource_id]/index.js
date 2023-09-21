import React, { useState } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import axiosInstance from "../../../config/axiosConfig";
import Banner from "../../../components/Banner";
import { OneImageTextSlider } from "../../../components/Slider";
import { getPageData } from "../../../lib/api";
import BlogHeroSection from "../../../components/BlogHeroSection";
import BlogBody from "../../../components/BlogBody";
import SEO from "../../../components/SEO";
import FooterNew from "../../../components/FooterNew";
import { siteUrl } from "../../../config/variableConfig";
import style from "./resources.module.scss";

function Blog(props) {
  const [isTocVisible, setTocVisible] = useState(false);
  // const router = useRouter();

  // const resource_id = router.query.resource_id;

  // useEffect(() => {
  //   if (resource_id) {
  //   }
  // }, [resource_id]);

  return (
    <>
      {/* Beginning of Section */}
      {props.preview ? (
        <div className={style.previewBannerWrapper}>
          <p className={style.previewText}>
            <span>Preview mode is on, </span>
            <span className={style.previewLink}>
              <Link href={siteUrl} passHref prefetch={false}>
                Click here to turn it off!
              </Link>
            </span>
          </p>
        </div>
      ) : null}
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      <BlogHeroSection
        blogData={props?.blogData}
        isTocVisible={isTocVisible}
        setTocVisible={setTocVisible}
        author={props?.blogData?.authors?.data[0]?.attributes}
      />
      <BlogBody
        blogData={props?.blogData}
        isTocVisible={isTocVisible}
        setTocVisible={setTocVisible}
      />

      <OneImageTextSlider
        suggestions={props?.suggestions}
        variant="blog-detail-slider"
      />
      <Banner variant="blog_detail_page" blogData={props?.blogData} />
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}
export default Blog;

export async function getStaticPaths() {
  let service_links = [];
  const redirecting_url = [
    "what-is-a-citizen-developer",
    "mobile-application-development-trends",
    "heres-need-know-chatbots",
    "trends-chatbot",
    "7-reasons-why-business-needs-chatbot",
    "traits-good-chatbot",
    "design-chatbot-conversation",
    "chatbots-and-service-industry",
    "what-chatbots-can-do-for-e-commerce-industry",
    "chatbot-for-hotels",
    "heres-need-know-chatbots",
    "cognitive-computing-features-scope",
    // "decops-consulting-services",
    // "software-engineering-services",
    "hire-python-developers",
    // "rpa-consultants",
    // "robotic-process-automation-back-office",
    // "cloud-based-application-development-services",
    // "devops-business-services",
    "build-a-chatbot-usingdialogflow",
    // "ways-ai-transforming-finance",
    // "rapid-application-development-tools",
    // "chatbots-in-real-estate",
    // "guide-to-component-based-architecture-can-help-scale",
    "conversational-uibusiness-communication",
    "ai-blockchain-and-iot-inclaims-management-process",
    "cognitive-computing-features-scopelimitation",
    "chatbotswork-guide-chatbot-architecture",
    "heres-need-know-chatbotsl",
    // "nlp-whatsapp-chatbot-dialogflow",
  ];

  let eBoodData = await axiosInstance.get(
    `/api/resources?filters[slug][$eq]=blog&populate=container_box&populate=container_box.image&populate=video&populate=video.how_it_works_card&populate=video.how_it_works_card.cover_image`
  );
  eBoodData?.data[0]?.attributes?.container_box.forEach((menu) => {
    if (menu?.link_url) {
      // console.log(menu?.link_url);
      let link = menu?.link_url.split("/")[1];
      return service_links.push(link);
    }
  });
  const finaldata = service_links.filter((data) => {
    if (!redirecting_url.includes(data)) {
      // console.log(data);
      return data;
    }
  });
  const paths = finaldata?.map((link) => ({
    params: { resource_id: String(link) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { params, preview = null } = context;
  const article = await getPageData(params.slug, preview);

  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );
  const blogData = await axiosInstance.get(
    `/api/blogs?filters[slug][$eq]=${params.resource_id}&populate=content&populate=heroSection_image&populate=suggestions.blogs&populate=suggestions.blogs.content&populate=suggestions.ebooks&populate=suggestions.case_studies&populate=suggestions.white_papers&populate=caseStudy_suggestions.case_study&populate=authors.image&populate=seo&populate=seo.image&populate=content&populate=suggestions.blogs.image&populate=suggestions.blogs.authors.image&populate=suggestions.ebooks.image&populate=suggestions.ebooks.authors&populate=suggestions.case_studies.image&populate=suggestions.case_studies.authors&populate=suggestions.white_papers.image&populate=suggestions.white_papers.authors&populate=caseStudy_suggestions.cover_image&populate=authors.image&populate=image&populate=authors.image&populate=suggestions.ebooks.authors.image&populate=suggestions.case_studies.authors.image&populate=suggestions.white_papers.authors.image`
  );

  return {
    props: {
      article,
      preview,
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,
      blogData: blogData?.data[0]?.attributes,
      seoData: blogData?.data[0]?.attributes?.seo,
      suggestions: [
        ...blogData?.data[0]?.attributes?.suggestions?.blogs?.data,
        // ...blogData?.data[0]?.attributes?.suggestions?.case_studies?.data,
        // ...blogData?.data[0]?.attributes?.suggestions?.ebooks?.data,
        // ...blogData?.data[0]?.attributes?.suggestions?.white_papers?.data,
      ],
    },
  };
};
