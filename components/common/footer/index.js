import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../card/Card";
import linkedinWhite from "../../../asset/SVGs/LinkedinWhite.svg";
import Link from "next/link";

const Footer = (props) => {
  const { footer } = props;
  const [selectedAddress, setSelectedAddress] = useState();

  useEffect(() => {
    if (footer?.locations?.item?.length) {
      const findIndex = footer.locations.item.findIndex((x) => x.default_show);
      setSelectedAddress(footer.locations.item[findIndex > -1 ? findIndex : 0]);
    }
  }, []);

  const checkTopMargin = () => {
    return `mt-[-${selectedAddress?.mapImage?.height}px]`;
  }

  return (
    <footer className="">
      <Card
        bgColor={
          "bg-[#F1F8F5] carousel:rounded-t-[30px] esm:p-[20px] lg:pt-[50px] lg:pb-[40px] pt-[50px]"
        }
      >
        <div className="m-auto max-w-[1084px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] justify-between px-[20px]">
          <div className="block md:flex md:flex-col justify-between gap-[20px] ">
            <div className="block justify-between gap-[20px] ">
              <div class="grid grid-cols-2 gap-2">
                <div className="col-span-2 mb-[50px]">
                  <Image
                    src={footer?.logo?.url}
                    height={footer?.logo?.height}
                    width={footer?.logo?.width}
                    alt={footer?.logo?.alternativeText}
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="min-w-[160px]">
                      <div className="pb-[15px] text-[#00856F] leading-[18px] tracking-[2px] text-[12px] sf-med font-semibold uppercase">
                        <h4>{footer?.menu?.label}</h4>
                      </div>
                      <hr className="text-[#EDEEEF] mb-[15px]" />
                      {footer?.menu?.item?.map((item, index) => {
                        return (
                          <Link
                            href={`/${item?.link}`}
                            key={index}
                            className="flex"
                          >
                            <p className="mb-[10px] text-[14px] leading-[24px] ">
                              {item.label}
                            </p>
                            {item?.subLabel ? (
                              <p className="text-[12px] leading-[24px] font-semibold text-[#00856F] ml-[7px] uppercase ">
                                {item.subLabel}
                              </p>
                            ) : (
                              ""
                            )}
                          </Link>
                        );
                      })}
                    </div>
                    <div>
                      {footer?.contact?.value ? (
                        <p className="flex mb-[10px]">
                          <span className="mr-[15px] text-[14px] leading-[24px] mt-[3px]">
                            <Image
                              src={footer?.contact?.icon?.url}
                              height={footer?.contact?.icon?.height}
                              width={footer?.contact?.icon?.width}
                              alt={footer?.contact?.icon?.alternativeText}
                            />
                          </span>
                          {footer?.contact?.value}
                        </p>
                      ) : (
                        ""
                      )}
                      {footer?.email?.value ? (
                        <p className="flex">
                          <span className="mr-[15px] text-[14px] leading-[24px] mt-[3px]">
                            <Image
                              src={footer?.email?.icon?.url}
                              height={footer?.email?.icon?.height}
                              width={footer?.email?.icon?.width}
                              alt={footer?.email?.icon?.alternativeText}
                            />
                          </span>
                          {footer?.email?.value}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-[]">
              {footer?.locations?.item?.length
                ? footer.locations.item.map((item, index) => {
                    return item?.shortLocation !==
                      selectedAddress?.shortLocation ? (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => setSelectedAddress(item)}
                      >
                        <p className="text-[14px] tracking-[2px] font-semibold leading-[21px] uppercase mb-[7px] ">
                          {item?.name}
                        </p>
                        <Image
                          src={item?.displayImage?.url}
                          height={item?.displayImage?.height}
                          width={item?.displayImage?.width}
                          alt={item?.displayImage?.alternativeText}
                        />
                      </div>
                    ) : (
                      ""
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="" style={{
            backgroundImage: `url(${selectedAddress?.mapImage?.url})`, backgroundRepeat: "no-repeat"
          }}>
            
            <div className={`bg-[white] my-[10px] rounded-[8px] ${checkTopMargin()} w-[50%] float-end mr-[10px]`}
            style= {{
              height: `${selectedAddress?.mapImage?.height - 20}px`
            }}>
            <div className="flex flex-col justify-between  h-[100%]">
            <Image src={selectedAddress?.infoImage?.url}
            height={selectedAddress?.infoImage?.height}
            width={selectedAddress?.infoImage?.width}
            alt={selectedAddress?.infoImage?.alternativeText}
            objectFit="cover" />
            <div className="m-[20px]">
              <p className="font-medium leading-[120%] text-[22px] font-['Domaine_Display']">{selectedAddress?.name}</p>
              <p className="mt-[10px] text-[#64726F] text-[16px] font-normal leading-[150%] ">{selectedAddress?.address}</p>
              <p className="mt-[10px] text-[14px] font-semibold leading-[150%] tracking-[2px] uppercase ">{selectedAddress?.shortLocation}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="bg-[#008060] text-[white] py-[15.5px] px-[20px] ">
        <div className="flex max-w-[1084px] m-auto justify-between items-center flex-wrap gap-[10px]">
          <p className="text-[white] text-[14px] leading-[21px] tracking-[2px] sf-reg uppercase font-semibold">
            {`HomeNurse4U Pvt. Ltd. © ${new Date()
              .toISOString()
              .slice(0, 4)} All Rights Reserved.`}
          </p>
          <div className="flex gap-5 justify-center items-center">
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

export default Footer;
