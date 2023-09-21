import React, { useRef } from "react";
import axiosInstance from "../../config/axiosConfig";
import FooterNew from "../../components/FooterNew";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import HeroSection from "../../components/Podcast/HeroSection";
import LatestEpisode from "../../components/Podcast/LatestEpisode";
import OtherEpisodes from "../../components/Podcast/OtherEpisodes";
import Playlist from "../../components/Podcast/Playlist";
import CompanyStatistics from "../../components/Common/CompanyStatistics";
import AwardsRecognitions from "../../components/Common/AwardsRecognitions";
import BrandSection from "../../components/BrandSection";

function Podcasts(props) {
  return (
    <>
      <SEO seoData={props?.seoData} />
      <Header headerData={props?.headerData} />
      <HeroSection sectionData={props?.heroSectionData} />
      <LatestEpisode sectionData={props?.latestEpisodeData} />
      <OtherEpisodes otherEpisodesData={props?.otherEpisodesData} />
      <Playlist sectionData={props?.playlistData} />
      <CompanyStatistics sectionData={props?.companyStatisticsData} />
      <BrandSection
        variant="primary"
        brandData={props?.clienteleData}
        mt="0px"
        paddingBottom="0px"
        fromPodcast={true}
      />
      <AwardsRecognitions sectionData={props?.awardsData} />

      <FooterNew newFooter={props?.newFooter} />
    </>
  );
}
export default Podcasts;

export async function getStaticProps() {
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  const podcastData = await axiosInstance.get(
    `/api/podcast?populate=hero_section.hero_image,hero_section.button,hero_section.listen_platforms.image,hero_section.top_corner_image,hero_section.variant,latest_podcast.button,latest_podcast.video_link.image,latest_podcast.variant,other_episodes.episodes.image,other_episodes.variant,playlist.playlist_details.image,playlist.variant,company_statistics.statistics,company_statistics.variant,clientele.images,clientele.button,clientele.variant,awards_recognitions.images,awards_recognitions.variant,seo.image`
  );

  return {
    props: {
      headerData: headerResponse,
      newFooter: newFooterResponse?.data?.attributes,

      heroSectionData: podcastData?.data?.attributes?.hero_section,
      latestEpisodeData: podcastData?.data?.attributes?.latest_podcast,
      otherEpisodesData: podcastData?.data?.attributes?.other_episodes,
      playlistData: podcastData?.data?.attributes?.playlist,

      companyStatisticsData: podcastData?.data?.attributes?.company_statistics,
      clienteleData: podcastData?.data?.attributes?.clientele,
      awardsData: podcastData?.data?.attributes?.awards_recognitions,

      seoData: podcastData?.data?.attributes?.seo,
    },
  };
}
