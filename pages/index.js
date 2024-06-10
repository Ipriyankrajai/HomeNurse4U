import { Inter } from "next/font/google";
import TextImage from "@/components/homePage/TextImage";

import HomePage from "../components/homePage/index";
import { cmsAxiosClient } from "@/components/utils";
import FeaturesBanner from "@/components/common/FeaturesBanner";
import MapBaner from "@/components/common/MapBanner";
import VideoDescription from "@/components/homePage/VideoDescription";
import ServiceScroll from "@/components/homePage/ServiceScroll";
import Banner from "@/components/homePage/banner";
import SubInquiryForm from "@/components/common/SubInquiryForm";
import MainInquiryForm from "@/components/common/MainInquiryForm/MainInquiryForm";
const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <main className={`${inter.className}`}>
      <Banner home={props.home} />
      {/* <SubInquiryForm /> */}
      <VideoDescription />
      <ServiceScroll />
      <FeaturesBanner />
      <MapBaner />
      <TextImage />
      <MainInquiryForm hn4uBanner={props.HN4UBanner} />
    </main>
  );
};

export async function getStaticProps() {
  var home = {},
    HN4UBanner = {};
  try {
    const homeAPI = cmsAxiosClient.get("/home");
    const HN4UBannerAPI = cmsAxiosClient.get("/why-hn4u");

    await Promise.all([homeAPI, HN4UBannerAPI]).then(async (values) => {
      home = values[0];
      HN4UBanner = values[1];
    });
  } catch (e) {
    console.log(e, "home cms error");
  }

  return {
    // data added inside props will be
    // received by page component as `props`
    props: {
      home: home?.data?.homeData || {},
      HN4UBanner: HN4UBanner?.data?.bannerData || {},
    },
  };
}

export default Home;
