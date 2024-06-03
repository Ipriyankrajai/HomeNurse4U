import React, { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const DownCaretIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-black group-hover:fill-[#00856f]"
        d="M14.8041 6.57442C14.7635 6.47773 14.6952 6.39523 14.6077 6.33733C14.5203 6.27942 14.4176 6.2487 14.3127 6.24903H3.68774C3.58286 6.2487 3.48023 6.27942 3.39278 6.33733C3.30533 6.39523 3.23698 6.47773 3.19634 6.57442C3.15806 6.67254 3.14835 6.7795 3.16833 6.88292C3.18831 6.98633 3.23716 7.08198 3.30923 7.15879L8.62173 12.4713C8.72327 12.5695 8.85899 12.6244 9.00024 12.6244C9.14149 12.6244 9.27721 12.5695 9.37876 12.4713L14.6913 7.15879C14.7633 7.08198 14.8122 6.98633 14.8322 6.88292C14.8521 6.7795 14.8424 6.67254 14.8041 6.57442Z"
      />
    </svg>
  );

  const SendIcon = (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_397_6735)">
        <path
          d="M18.0781 4.36935C18.0781 4.36935 18.0781 4.37716 18.0781 4.38106L13.5312 19.3764C13.4624 19.6199 13.3207 19.8366 13.1252 19.9973C12.9297 20.1581 12.6897 20.2552 12.4374 20.2756C12.4015 20.2787 12.3656 20.2803 12.3296 20.2803C12.0932 20.281 11.8615 20.2141 11.6619 20.0874C11.4623 19.9608 11.3031 19.7797 11.2031 19.5654L8.35931 13.7295C8.33086 13.671 8.32136 13.6051 8.33214 13.541C8.34293 13.4768 8.37345 13.4177 8.41947 13.3717L12.9445 8.84669C13.0567 8.72853 13.1184 8.57118 13.1163 8.40821C13.1142 8.24523 13.0485 8.08952 12.9333 7.97427C12.818 7.85901 12.6623 7.79334 12.4994 7.79126C12.3364 7.78917 12.179 7.85083 12.0609 7.9631L7.53353 12.4881C7.48757 12.5341 7.42839 12.5646 7.36425 12.5754C7.30011 12.5862 7.2342 12.5767 7.17572 12.5483L1.33431 9.70528C1.10589 9.5957 0.916158 9.41929 0.790262 9.19943C0.664365 8.97958 0.608246 8.72666 0.629342 8.47419C0.650437 8.22172 0.747752 7.98162 0.908388 7.78571C1.06903 7.58979 1.2854 7.44732 1.52884 7.37716L16.5242 2.83028H16.5359C16.7494 2.7703 16.975 2.7682 17.1896 2.82419C17.4042 2.88018 17.6 2.99226 17.757 3.14891C17.9139 3.30557 18.0264 3.50116 18.0828 3.71563C18.1393 3.9301 18.1376 4.15572 18.0781 4.36935Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_397_6735">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.905273)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const menu = {
    logo: { url: "/HomeNurse4U.svg", alt: "HomeNurse4U" },
    menu: [
      { title: "About Us", url: "/fg" },
      {
        title: "Our Services",
        subMenu: [
          { title: "Mobile Nursing", url: "/fg" },
          { title: "Phlebotomy", url: "/fg" },
          { title: "Clinical Site Support", url: "/fg" },
          { title: "Clinical Supplies", url: "/fg" },
        ],
      },
      { title: "Our Values" },
      { title: "Careers" },
      {
        title: "Resources",
        subMenu: [
          { title: "Case Studies", url: "/fg" },
          { title: "White Paper Articles", url: "/fg" },
        ],
      },
      { title: "Contact Us" },
    ],
    cta: [{ title: "Submit rfi/rfp", icon: SendIcon, url: "/ffg" }],
  };

  return (
    <div className="fixed top-0 w-full z-40">
      <div className="bg-[#fff]  mt-[10px] max-w-[1114px] w-full mx-auto p-[15px] flex justify-between items-center rounded-[6px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.06);]">
        <div className="flex w-fit">
          <img src={menu.logo.url} alt={menu.logo.alt} />
        </div>
        <div className="flex items-center gap-[30px]">
          {menu.menu.map((item, index) => {
            return (
              <Popover className={"bg-white relative"} key={index}>
                <div
                  onMouseEnter={() => item?.subMenu && setMenuOpen(index)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <PopoverButton>
                    <Link
                      className="flex items-center gap-[6px] group"
                      href={item?.url || {}}
                    >
                      <div className="text-[14px] font-medium group-hover:text-[#00856f]">
                        {item.title}
                      </div>
                      {item?.subMenu ? (
                        <div className="flex w-fit">{DownCaretIcon}</div>
                      ) : null}
                    </Link>
                  </PopoverButton>
                  <AnimatePresence>
                    {menuOpen === index && (
                      <PopoverPanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        anchor="bottom"
                        className="shadow-xl border px-[20px] border-gray-600 z-50 flex origin-top flex-col p-[10px] gap-[7px] bg-white rounded-[20px]"
                      >
                        {item?.subMenu?.map((subMenuItem, subMenuIndex) => {
                          return (
                            <Link
                              key={subMenuIndex}
                              href={item?.url || {}}
                              className="hover:text-[#00856f] "
                            >
                              {subMenuItem?.title}
                            </Link>
                          );
                        })}
                      </PopoverPanel>
                    )}
                  </AnimatePresence>
                </div>
              </Popover>
            );
          })}
        </div>
        <div>
          {menu.cta?.map((item, index) => (
            <div
              key={index}
              className="px-[20px] py-[12px] rounded-[6px] bg-[#00856F] hover:bg-[#006C50] active:bg-[#005C44] transition-colors duration-100 text-white flex gap-[5px] items-center cursor-pointer"
            >
              <div className="flex w-fit">{item.icon}</div>
              <div className="text-[15px] leading-[0.15px] font-semibold uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
