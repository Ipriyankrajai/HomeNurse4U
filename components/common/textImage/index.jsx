import Image from "next/image";
import React from "react";
import Button from "../button";

function TextImage() {
  return (
    <div className="max-w-[1208px] px-[20px] mx-auto">
      <div className="flex gap-[40px] items-end">
        <div className="max-w-[500px]">
          <div>White paper</div>
          <h3>Implementing home healthcare in your clinical trial</h3>
          <div>
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
  );
}

export default TextImage;
