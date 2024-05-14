import "@/styles/globals.css";

import App from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/layout/index";
// import SEOMeta from "../components/seoMeta/SEOMeta";
// import StickyInquiry from "../components/stickyInquiry/StickyInquiry";
import { cmsAxiosClient } from "../components/utils";
// import { storeWrapper } from "../store";
// import "../styles/globals.css";

export const MyApp = ({ Component, pageProps, footer, header, showLayout }) => {
  const router = useRouter();
  const showFooter = router.asPath === "/book-a-demo" ? false : true;
  const newHomePage = router.asPath === "/" ? true : false;
  return (
    <>
      <ToastContainer />
      {/* <SEOMeta /> */}
      <NextNProgress color={"#007B5C"} options={{ showSpinner: false }} />
      <div className="relative">
        <Layout footer={footer} header={header} showFooter={showFooter}>
          <Component {...pageProps} />
        </Layout>
        {/* <StickyInquiry /> */}
      </div>
    </>
  );
};

MyApp.getInitialProps = async (context) => {
  var footer = { data: { footerData: {} } },
    header = { data: { header: {} } };
  try {
    footer = await cmsAxiosClient.get("/footer");
    header = await cmsAxiosClient.get("/header");
  } catch (e) {
    console.log("app cms error", e);
  }
  const ctx = await App.getInitialProps(context);

  return {
    ...ctx,
    footer: footer.data?.footerData,
    header: header?.data?.header,
    showLayout: !context.router.query.header,
  };
};

export default MyApp;
// export default storeWrapper.withRedux(MyApp);
