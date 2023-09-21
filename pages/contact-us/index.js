import Header from "../../components/Header";
import FooterNew from "../../components/FooterNew";
import Banner from "../../components/Banner";
import Form from "../../components/Form";
import TabComponent from "../../components/TabComponent";
import style from "../../components/TabComponent/tabs.module.scss";
import SEO from "../../components/SEO";
import axiosInstance from "../../config/axiosConfig";

export default function contact_us({
  headerData,
  addressData,
  newFooter,
  bannerData,
  seoData,
}) {
  return (
    <>
      <SEO seoData={seoData} />
      <Header headerData={headerData} />

      <Banner variant="contactUs_page" bannerData={bannerData} />

      <Form variant="secondary" />

      <div className={style.address_component_wrapper}>
        <TabComponent variant="address" addressData={addressData} />
      </div>

      <FooterNew newFooter={newFooter} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axiosInstance.get(
    "/api/contact-us?populate=banner,%20form,%20address.country,address.local_address,%20address.email,%20address.ph_no&populate=seo.image&populate=seo.metaProperties&populate=keywords"
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
      bannerData: response?.data?.attributes?.banner,
      addressData: response?.data?.attributes?.address,
      newFooter: newFooterResponse?.data?.attributes,
      seoData: response?.data?.attributes?.seo,
    },
  };
}
