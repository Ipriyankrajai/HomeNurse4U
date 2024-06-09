/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";

import style from "./BlogScroll.module.css";

const imgs = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ServiceScroll = ({ blog = imgs, bgColor = "" }) => {
  const blogLenght = blog.length;
  const [scroll, setScroll] = useState({
    left: false,
    right: true,
  });

  const fixScrollWidth = 1034;
  useEffect(() => {
    handleParentScroll();
  }, []);

  const scrollLeft = () => {
    const el = document.getElementById(`hscroll-service`);
    if (el) {
      el.scrollLeft -= fixScrollWidth;
    }
  };
  const scrollRight = () => {
    const el = document.getElementById(`hscroll-service`);
    if (el) {
      el.scrollLeft += fixScrollWidth;
    }
  };

  const handleParentScroll = () => {
    const el = document.getElementById(`hscroll-service`);
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
    <div className={`${bgColor} mt-[100px]`}>
      <div className="max-w-[1124px] mx-auto px-[20px]">
        <h2 className="h2 mb-[30px] text-center">
          Weaving a tapestry of health: Your journey, our dedicated support
        </h2>
      </div>
      <div className="mt-[50px]">
        <div
          // className="mt-[20px] flex gap-[20px] flex-wrap"
          className={`${style["service-wrap"]}`}
          id="hscroll-service"
          onScroll={handleParentScroll}
        >
          {/* card */}
          {blog?.map((data, index) => (
            <div key={index}>
              <div
                key={index}
                className="w-[1034px] h-[600px] flex mr-[80px] trending-main-wrap"
              >
                <div className="w-[1034px] relative">
                  <img
                    src={data}
                    alt="service"
                    className="object-cover w-[1034px] h-[600px]"
                  />
                  <div className="absolute w-[350px] h-[400px] bg-[#00856F] top-[20%] left-[-40px] p-[30px] text-white flex flex-col justify-between">
                    <div>
                      <div className="ts uppercase">mobile nursing</div>
                      <h4 className="h4 my-[10px]">
                        Mobile Nursing: Quality care when you need it most
                      </h4>
                      <p className="bs">
                        Our mobile nursing team is composed of experienced and
                        certified professionals ready to provide personalised
                        care wherever you are.
                      </p>
                    </div>
                    <Link href={""} className="underline text-[14px]">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="border-dotted bg-black w-[1px]"></div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1124px] mx-auto px-[20px] mt-[20px] flex justify-start items-center gap-[10px]">
        <button onClick={scrollLeft} disabled={!scroll?.left}>
          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 7C31.5523 7 32 7.44772 32 8C32 8.55228 31.5523 9 31 9L31 7ZM0.292891 8.70711C-0.0976333 8.31659 -0.0976334 7.68342 0.29289 7.2929L6.65685 0.928934C7.04738 0.53841 7.68054 0.53841 8.07107 0.928934C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292891 8.70711ZM31 9L0.999998 9L0.999998 7L31 7L31 9Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>

        <button onClick={scrollRight} disabled={!scroll?.right}>
          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9L31 9L31 7L1 7L1 9Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceScroll;
