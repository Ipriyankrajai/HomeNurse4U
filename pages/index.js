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
  // console.log(props);
  const aaa = {
    "home": {
        "id": 1,
        "createdAt": "2024-05-27T08:56:48.201Z",
        "updatedAt": "2024-05-27T08:57:00.848Z",
        "publishedAt": "2024-05-27T08:57:00.806Z",
        "sitemap_exclude": false,
        "banner": {
            "id": 1,
            "title": "title",
            "description": "desc",
            "countries": [
                {
                    "id": 15,
                    "name": "indiaFlag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "india_Flag_8d7116d9ea",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 3.92,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/india_Flag_8d7116d9ea.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.668Z",
                    "updatedAt": "2024-05-19T12:14:10.668Z",
                    "sitemap_exclude": false
                },
                {
                    "id": 16,
                    "name": "ausFlag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "aus_Flag_1d2d06dccb",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 1.74,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/aus_Flag_1d2d06dccb.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.701Z",
                    "updatedAt": "2024-05-19T12:14:10.701Z",
                    "sitemap_exclude": false
                },
                {
                    "id": 14,
                    "name": "aus1Flag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "aus1_Flag_22769582e9",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 5.18,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/aus1_Flag_22769582e9.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.435Z",
                    "updatedAt": "2024-05-19T12:14:10.435Z",
                    "sitemap_exclude": false
                },
                {
                    "id": 15,
                    "name": "indiaFlag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "india_Flag_8d7116d9ea",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 3.92,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/india_Flag_8d7116d9ea.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.668Z",
                    "updatedAt": "2024-05-19T12:14:10.668Z",
                    "sitemap_exclude": false
                },
                {
                    "id": 16,
                    "name": "ausFlag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "aus_Flag_1d2d06dccb",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 1.74,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/aus_Flag_1d2d06dccb.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.701Z",
                    "updatedAt": "2024-05-19T12:14:10.701Z",
                    "sitemap_exclude": false
                },
                {
                    "id": 14,
                    "name": "aus1Flag.svg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 37,
                    "height": 25,
                    "formats": null,
                    "hash": "aus1_Flag_22769582e9",
                    "ext": ".svg",
                    "mime": "image/svg+xml",
                    "size": 5.18,
                    "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/aus1_Flag_22769582e9.svg",
                    "previewUrl": null,
                    "provider": "aws-s3",
                    "provider_metadata": null,
                    "folderPath": "/",
                    "createdAt": "2024-05-19T12:14:10.435Z",
                    "updatedAt": "2024-05-19T12:14:10.435Z",
                    "sitemap_exclude": false
                }
            ],
            "backgroundMedia": {
                "id": 17,
                "name": "Nursing Home_Woman.svg",
                "alternativeText": null,
                "caption": null,
                "width": 1400,
                "height": 734,
                "formats": null,
                "hash": "Nursing_Home_Woman_c9ec037416",
                "ext": ".svg",
                "mime": "image/svg+xml",
                "size": 4432.6,
                "url": "https://hn4u-development.s3.us-east-1.amazonaws.com/Nursing_Home_Woman_c9ec037416.svg",
                "previewUrl": null,
                "provider": "aws-s3",
                "provider_metadata": null,
                "folderPath": "/",
                "createdAt": "2024-05-19T14:21:13.365Z",
                "updatedAt": "2024-05-19T14:21:13.365Z",
                "sitemap_exclude": false
            }
        }
    },
    "HN4UBanner": {
        "id": 1,
        "label": "Why homenurse4u?",
        "title": "We ensure that you get the best results, every time!",
        "description": "At HomeNurse4U, we offer a comprehensive suite of services specially designed to streamline and optimize clinical trials. Our mobile nursing and site support services provide convenience and flexibility, ensuring that patients receive high-quality care. In addition, our extensive resources for sites empower research teams globally with the tools and knowledge necessary for successful trial execution. When you choose our services, you can expect efficient and quality solutions that accelerate your trials while maintaining the highest standards of quality and compliance.",
        "createdAt": "2024-05-27T08:57:25.662Z",
        "updatedAt": "2024-05-27T08:57:30.403Z",
        "publishedAt": "2024-05-27T08:57:30.390Z",
        "sitemap_exclude": false
    }
}
  return (
    <main className={`${inter.className}`}>
      <Banner home={aaa.home} />
      <SubInquiryForm />
      <VideoDescription />
      <ServiceScroll />
      <FeaturesBanner />
      <MapBaner />
      <TextImage />
      <MainInquiryForm hn4uBanner={aaa.HN4UBanner} />
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
