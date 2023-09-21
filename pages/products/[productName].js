import WhiteWrapper from "../../components/WhiteWrapper";
import InAction from "../../components/InAction";
import OneImageTextSlider from "../../components/Slider/oneImageText";
import VideoModalContainer from "../../components/VideoModalContainer";
import BrandSection from "../../components/BrandSection";
import FooterNew from "../../components/FooterNew";
import Header from "../../components/Header";
import VerticalCardScreen from "../../components/VerticalCardScreen";
import Banner from "../../components/Banner";
import LibrarySection from "../../components/LibrarySection";
import SEO from "../../components/SEO";
import axiosInstance from "../../config/axiosConfig";
import CustomCarousel from "../../components/CustomCarousel";

export default function productName({
  productData,
  productName,
  headerData,
  newFooter,
  seoData,
}) {
  return (
    <>
      <SEO seoData={seoData} />
      <Header headerData={headerData} />

      {/* <OneImageTextSlider
        sliderData={productData?.hero_section}
        variant="primary"
        page="product_page"
        productName={productName}
      /> */}
      <CustomCarousel
        sliderData={productData?.hero_section}
        variant="singlepage"
        page="product_page"
        productName={productName}
      />

      <WhiteWrapper
        variant="secondary"
        whiteWrapperData={productData?.white_wrapper}
        height_wotnot={true}
      />

      <InAction inActionData={productData?.in_action} />

      {productName === "wotnot" ? (
        <VideoModalContainer
          videomodalcontainerData={productData?.how_it_works}
          variant="product_videos"
        />
      ) : (
        ""
      )}

      <BrandSection
        variant="secondary"
        brandData={productData?.brand_section}
      />

      <LibrarySection
        resource_library={productData?.resource_library}
        paddingTop="80px"
        paddingBottom="80px"
      />

      <VerticalCardScreen
        variant="primary_with_navyblue_background"
        botDevelopmentData={productData?.vertical_cards}
      />

      <Banner
        variant="secondary_with_button"
        bannerData={productData?.contact_us_banner}
      />

      <FooterNew newFooter={newFooter} />
    </>
  );
}

export async function getStaticPaths() {
  let product_links = [];
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const data = headerResponse?.data?.attributes?.menu[0].Submenu?.forEach(
    (menu) => {
      let link = menu?.link?.split("/");
      return product_links.push(link[2]);
    }
  );
  const paths = product_links?.map((link) => ({
    params: { productName: String(link) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  let response = await axiosInstance.get(
    `/api/product-pages?filters[slug][$eq]=${params.productName}&populate=hero_section.button&populate=hero_section.image&populate=white_wrapper.white_box.image&populate=in_action.in_action_card.image&populate=how_it_works.how_it_works_card.cover_image&populate=brand_section.brand_logo.image&populate=resource_library.rl_box.image&populate=resource_library.link&populate=vertical_cards.vc_card&populate=vertical_cards.image&populate=contact_us_banner.button&populate=seo.image&populate=seo.metaProperties&populate=keywords`
  );
  const headerResponse = await axiosInstance.get(
    "/api/header?populate=logo&populate=logo.image&populate=menu.Submenu&populate=menu.Submenu.image"
  );
  const newFooterResponse = await axiosInstance.get(
    "/api/new-footer?populate=Sectors.subsectors,SecondRow.image,ThirdRow.ReviewPlatforms.image,ThirdRow.ReviewPlatforms.hoverimage,ThirdRow.SocialPlatforms.image,ThirdRow.SocialPlatforms.mobile_image"
  );

  return {
    props: {
      newFooter: newFooterResponse?.data?.attributes,
      headerData: headerResponse,
      productData: response?.data[0]?.attributes,
      productName: params.productName,
      seoData: response?.data[0]?.attributes?.seo,
    },
  };
};
