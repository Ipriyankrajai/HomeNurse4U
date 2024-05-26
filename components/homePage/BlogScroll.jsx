/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";

import style from "./BlogScroll.module.css";

const temp = [
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "1",
  },
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "2",
  },
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "3",
  },
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "4",
  },
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "5",
  },
  {
    title: "HomeNurse4U successfully kick-starts a new project in Australia",
    description:
      "Australia has always been an important region for conducting clinical trials. Being a specialized home healthcare service provider for clinical trials, HomeNurse4U is already running three studies in Australia...",
    catagory: "nursing",
    _id: "6",
  },
];
const BlogScroll = ({ blog = temp, bgColor = "" }) => {
  const blogLenght = blog.length;
  const [scroll, setScroll] = useState({
    left: false,
    right: true,
  });

  const fixScrollWidth = 550;
  useEffect(() => {
    handleParentScroll();
  }, []);

  const scrollLeft = () => {
    const el = document.getElementById(`hscroll`);
    if (el) {
      el.scrollLeft -= fixScrollWidth;
    }
  };
  const scrollRight = () => {
    const el = document.getElementById(`hscroll`);
    if (el) {
      el.scrollLeft += fixScrollWidth;
    }
  };

  const handleParentScroll = () => {
    const el = document.getElementById(`hscroll`);
    const tempScroll = scroll;
    if (el) {
      if (el?.scrollWidth - el?.clientWidth - el?.scrollLeft < 1) {
        tempScroll.right = false;
      } else {
        tempScroll.right = true;
      }
      if (el?.scrollLeft <= 0) {
        tempScroll.left = false;
      } else {
        tempScroll.left = true;
      }
    }
    setScroll({ ...tempScroll });
  };
  return (
    <div className={`${bgColor}`}>
      <div className="max-w-[1084px] mx-auto"></div>
      <div className="mt-[50px]">
        <div
          // className="mt-[20px] flex gap-[20px] flex-wrap"
          className={`${style["service-wrap"]}`}
          id="hscroll"
          onScroll={handleParentScroll}
        >
          {/* card */}
          {blog?.map((data, index) => (
            <>
              <Link
                href={`/blog/${data?._id}`}
                key={index}
                className="w-[500px] flex mr-[50px] trending-main-wrap"
              >
                <div className="w-[500px]">
                  <div className="ts text-[#00856F] uppercase">
                    {data.catagory}
                  </div>
                  <h4 className="mt-5 h4">{data.title}</h4>
                  <div className="mt-[10px] bs text-[#64726F]">
                    {data.description}
                  </div>
                </div>
              </Link>
              {/* <div className="border-dotted bg-black w-[1px]"></div> */}
            </>
          ))}
        </div>
      </div>
      <div className="max-w-[1124px] mx-auto px-[20px] mt-[20px] flex justify-start items-center gap-[10px]">
        <button
          onClick={scrollLeft}
          disabled={!scroll?.left}
          className={`border ${
            !scroll?.left ? "#BABFC3" : "#8C9196"
          } w-[35px] h-[35px] rounded-[10px] flex justify-center items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="25"
            height="25"
            fill={scroll?.left ? "#5C5F62" : "#BABEC3"}
          >
            <rect width="256" height="256" fill="none" />
            <path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          disabled={!scroll?.right}
          className={`border ${
            !scroll?.right ? "#BABFC3" : "#8C9196"
          } w-[35px] h-[35px] rounded-[10px] flex justify-center items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill={scroll?.right ? "#5C5F62" : "#BABEC3"}
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogScroll;
