import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FooterNew from "../../components/FooterNew";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { TwoImageSlider } from "../../components/Slider";
import Form from "../../components/Form";
import ResourceDescription from "../../components/ResourceDescription";
import axiosInstance from "../../config/axiosConfig";
import SEO from "../../components/SEO";

function Blog(props) {
  const router = useRouter();
  const white_paper_id = router.query.white_paper_id;
  const [whitePaperID, setwhitePaperID] = useState("");

  useEffect(() => {
    if (white_paper_id) {
      setwhitePaperID(white_paper_id);
    }
  }, [white_paper_id]);
  return (
    <>
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      <Banner
        variant="blog_primary"
        bannerData={props?.banner}
        linkBackTo="/white-paper/"
      />
      <ResourceDescription data={props?.description} />
      <Form
        variant="resources__primary"
        admin_template_id={props.admin_template_id}
        user_template_id={props.user_template_id}
      />
      <TwoImageSlider
        images={props?.twoImageSliderData}
        slidesToShow="2"
        variant="resources_slider_primary"
      />
      <Banner
        variant="blog_primary_with_button"
        bannerData={props.banner_with_button}
      />
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}
export default Blog;

export async function getStaticPaths() {
  let service_links = [];
  let eBoodData = await axiosInstance.get(
    `/api/resources?filters[slug][$eq]=white-paper&populate=container_box&populate=container_box.image&populate=video&populate=video.how_it_works_card&populate=video.how_it_works_card.cover_image`
  );
  eBoodData?.data[0]?.attributes?.container_box.forEach((menu) => {
    let link = menu?.link_url?.split("/");
    return service_links.push(link[2]);
  });
  const paths = service_links?.map((link) => ({
    params: { white_paper_id: String(link) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const whitePaperData = await axiosInstance.get(
    `/api/white-papers?filters[slug][$eq]=${params.white_paper_id}&populate=content&populate=form&populate=continue_reading.blogs,continue_reading.ebooks,continue_reading.case_studies,continue_reading.white_papers&populate=author&populate=continue_reading.blogs.image,continue_reading.ebooks.image,continue_reading.case_studies.image,continue_reading.white_papers.image&populate=banner.button&populate=seo&populate=seo.image`
  );

  return {
    props: {
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: whitePaperData?.data[0]?.attributes?.seo,
      banner: { title: whitePaperData?.data[0]?.attributes?.title },
      banner_with_button: whitePaperData?.data[0]?.attributes?.banner,
      twoImageSliderData: {
        title: whitePaperData?.data[0]?.attributes?.continue_reading?.title,
        case_study_image: [
          ...whitePaperData?.data[0]?.attributes?.continue_reading?.blogs?.data,
          ...whitePaperData?.data[0]?.attributes?.continue_reading?.case_studies
            ?.data,
          ...whitePaperData?.data[0]?.attributes?.continue_reading?.ebooks
            ?.data,
          ...whitePaperData?.data[0]?.attributes?.continue_reading?.white_papers
            ?.data,
        ],
      },
      description: {
        description: [whitePaperData?.data[0]?.attributes?.description],
      },
      admin_template_id: whitePaperData?.data[0]?.attributes?.admin_template_id,
      user_template_id: whitePaperData?.data[0]?.attributes?.user_template_id,
    },
  };
};
