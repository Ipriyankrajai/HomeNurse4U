import Image from "next/image";
import React from "react";
import Button from "../button";

function TextImage() {
  return (
    <div>
      <div>
        <div>White paper</div>
        <h3>Implementing home healthcare in your clinical trial</h3>
        <div>
          In this white paper, we have explained the importance of home
          healthcare in clinical trials, its advantages, and the steps for
          implementation....
        </div>
        <Button>DOWNLOAD WHITE PAPER</Button>
      </div>
      <div>{/* <Image src="a" width={100} alt="paper" /> */}</div>
    </div>
  );
}

export default TextImage;
