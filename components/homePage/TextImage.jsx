import Image from "next/image";
import React from "react";
import Button from "../common/button";
import BlogScroll from "@/components/homePage/BlogScroll";

function TextImage() {
  return (
    <div className="mt-[30px] pb-[70px]">
      <div className="max-w-[1124px] px-[20px] mx-auto">
        <div className="flex gap-[40px] items-end">
          <div className="max-w-[500px]">
            <div className="tb text-[#00856f]">White paper</div>
            <h3 className="mt-5 h2">
              Implementing home healthcare in your clinical trial
            </h3>
            <div className="mt-[15px] text-[#64726F] bt">
              In this white paper, we have explained the importance of home
              healthcare in clinical trials, its advantages, and the steps for
              implementation....
            </div>
            <Button className="mt-[15px]" size="supper_small">
              DOWNLOAD WHITE PAPER
            </Button>
          </div>
          <div>
            <Image
              src="https://hn4u-development.s3.us-east-1.amazonaws.com/111_2_88c5a180f3.svg"
              width={524}
              height={500}
              alt="paper"
            />
          </div>
        </div>
      </div>
      <BlogScroll />
    </div>
  );
}

export default TextImage;
