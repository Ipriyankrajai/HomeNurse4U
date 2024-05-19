import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "../components/homePage/index";
import { cmsAxiosClient } from "@/components/utils";
const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  
  return (
    <main className={`justify-between m-auto ${inter.className}`}>
      <HomePage HN4UBanner={props.HN4UBanner} home={props.home} />
    </main>
  );
}

export async function getStaticProps() {
  var home = {}, HN4UBanner = {};
  try {
        const homeAPI = cmsAxiosClient.get("/home");
        const HN4UBannerAPI = cmsAxiosClient.get("/why-hn4u");
    
        await Promise.all([homeAPI, HN4UBannerAPI]).then(
          async (values) => {
            home = values[0];
            HN4UBanner = values[1];
          }
        );
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

export default Home