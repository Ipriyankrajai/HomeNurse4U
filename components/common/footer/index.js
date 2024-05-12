import React from "react";
import Image from "next/image";
import Card from "../card/Card";
// import Menu from "./menu";
// import ssl from "../../../asset/SVGs/SSL.svg";
// import gdrp from "../../../asset/SVGs/GDRP.svg";
import linkedinWhite from "../../../asset/SVGs/LinkedinWhite.svg";
// import twitterWhite from "../../../asset/SVGs/TwitterWhite.svg";
// import { ImageType } from "../../interfaceTypes/commonTypes";


const Footer = (props) => {
//   const { footer } = props;
//   console.log("footer", footer);
  return (
    <footer className="mb-[20px]">
      <Card
        bgColor={
          "bg-[#F1F8F5] carousel:rounded-t-[30px] esm:p-[20px] lg:pt-[50px] lg:pb-[40px] pt-[50px]"
        }
      >
        <div className="block m-auto max-w-[1185px] justify-between gap-[20px] flex-wrap md:flex">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 lg:flex">
            <div className=" flex flex-col justify-between items-start col-span-1 md:col-span-2">
              
            </div>
          </div>
          <div className="md:flex flex-wrap gap-5 md:justify-end md:text-right">
            {/* footer?.subMenu?.map((item, index) => {
              return <Menu key={index} data={item} />;
            }) */}
            {/* <div className=" flex flex-col justify-between items-start col-span-1 md:col-span-2 md:block lg:hidden">
              <div className="m-auto items-center md:mb-[30px] esm:my-[20px] sm:my-[20px] md:my-[20px] w-full flex space-x-[10px] ">
                <SocialMedia socialMedia={footer?.socialMedia} />
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex gap-5 justify-end mt-[40px]">
          {/* footer?.securityBadges
            ? footer?.securityBadges?.map((badge, index) => (
                <div key={index}>
                  <Image
                    src={badge?.url}
                    height={badge?.height}
                    width={badge?.width}
                    alt={badge?.alternativeText}
                  />
                </div>
              ))
            : null */}
        </div>
      </Card>
      <div className="bg-[#008060] text-[white] carousel:rounded-b-[30px] py-[15.5px] px-[20px] lg:px-[50px]">
        <div className="flex max-w-[1185px] m-auto justify-between items-center flex-wrap gap-[10px]">
          <p className="text-[white] text-[14px] leading-[21px] tracking-[2px] sf-reg uppercase font-semibold">
            {
                `HomeNurse4U Pvt. Ltd. © ${new Date().toISOString().slice(0, 4)} All Rights Reserved.`}
          </p>
          <div className="flex gap-5 justify-center items-center">
            {/* footer?.socialMedia
              ? footer?.socialMedia.map((icon, index) => (
                  <a
                    key={icon?.id}
                    href={icon?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[15px] max-w-[15px]"
                  >
                    <Image
                      src={icon?.icon?.url}
                      height={icon?.icon?.height}
                      width={icon?.icon?.width}
                      alt={icon?.icon?.alternativeText}
                      />
                      </a>
                    ))
                : null */}
                <Image
                  src={linkedinWhite}
                  height={20}
                  width={20}
                  alt={"linkedIn"}
                  />
          </div>
        </div>
      </div>
    </footer>
  );
};

// const Logo = ({
//   src,
//   altText,
//   width,
// }) => (
//   <Image
//     src={src}
//     alt={altText}
//     onContextMenu={(e) => {
//       e.preventDefault();
//       return false;
//     }}
//     height="70"
//     width={width}
//   />
// );

export default Footer;
