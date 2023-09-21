import React from "react";
import { useRouter } from "next/router";
import FooterNew from "../../components/FooterNew";
import Header from "../../components/Header";
import Blog from "../../components/Blog";
import style from "./resources.module.scss";
import YoutubeVideos from "../../components/YoutubeVideos";
import SEO from "../../components/SEO";
import axiosInstance from "../../config/axiosConfig";

function Resource(props) {
  const router = useRouter();
  const resource = router.query.resource;
  return (
    <>
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      {resource !== "videos" ? (
        <>
          <div className={style.blog_title}>
            <h1 className={style.h1_tag}>{props?.resourceData?.title}</h1>
          </div>
          <Blog
            resourceData={props?.resourceData?.container_box}
            resource={resource}
          />
        </>
      ) : (
        <YoutubeVideos sectionData={props?.resourceData} />
      )}
      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}
export default Resource;
export async function getStaticPaths() {
  let service_links = [];
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const data = headerResponse?.data?.attributes?.menu[3]?.Submenu?.forEach(
    (menu) => {
      let link = menu?.link?.split("/");
      if (menu?.link_url_type != "third_party_url") {
        return service_links.push(link[1]);
      }
    }
  );
  const paths = service_links?.map((link) => ({
    params: { resource: String(link) },
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
  const resoureResponse = await axiosInstance.get(
    `/api/resources?filters[slug][$eq]=${params.resource}&populate=container_box&populate=container_box.image&populate=video&populate=video.how_it_works_card&populate=video.how_it_works_card.cover_image&populate=seo&populate=seo.image`
  );
  return {
    props: {
      resource: params.resource.toUpperCase(),
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,
      resourceData: resoureResponse?.data[0]?.attributes,
      seoData: resoureResponse?.data[0]?.attributes.seo,
    },
  };
};
