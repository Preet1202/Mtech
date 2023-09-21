import React from "react";
import AboutAuthor from "../../components/AboutAuthor";

import Blog from "../../components/Blog";
import CaseStudy from "../../components/CaseStudy";
import Header from "../../components/Header";
import FooterNew from "../../components/FooterNew";
import axiosInstance from "../../config/axiosConfig";
import SEO from "../../components/SEO";

function Author(props) {
  return (
    <>
      <SEO seoData={props.seoData} />
      <Header headerData={props?.headerData} />

      <AboutAuthor
        variant="secondary"
        blogsAuthorData={props?.blogsAuthorData}
      />
      <Blog
        variant="secondary"
        blogs={props.blogs}
        blogsAuthorData={props?.blogsAuthorData}
      />
      <CaseStudy />
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}

export default Author;

export async function getStaticPaths() {
  const authors = await axiosInstance.get(
    `/api/authors?populate=image&populate=relations`
  );
  const paths = authors.data?.map((data) => ({
    params: { author_id: String(data?.attributes?.slug) },
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
  const blogsByAuthor = await axiosInstance.get(
    `api/authors?filters[slug][$eq]=${params.author_id}&populate=image&populate=blogs&populate=blogs.content&populate=blogs.image&populate=case_studies.image&populate=seo`
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  return {
    props: {
      params: params?.author_id,
      headerData: headerResponse,
      blogsAuthorData: blogsByAuthor,
      blogs: blogsByAuthor?.data[0]?.attributes?.blogs?.data,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: blogsByAuthor?.data[0]?.attributes?.seo,
    },
  };
};
