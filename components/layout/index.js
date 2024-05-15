import { useRouter } from "next/router";
import React from "react";
import Footer from "../common/footer";
import HomePage from "../homePage";
// import Navbar from "../common/navbar/Navbar";

const Layout = (props) => {
  const { children, footer, header, showFooter = true } = props;
  const router = useRouter();
  const newHomePage =
    router.asPath === "/" || router.asPath === "/blog" ? true : false;
  return (
    <>
      {/*<Navbar header={header} />*/}
      {children}
      {showFooter ? <Footer footer={footer} /> : null}
    </>
  );
};

export default Layout;
