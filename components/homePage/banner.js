import Image from "next/image";
import { useEffect, useRef } from "react";

const Banner = (props) => {
  // console.log(props.home);
  const banner = props?.home?.banner || {};
  const videRef = useRef();

  useEffect(() => {
    videRef.current.play();
  });

  return (
    <div
      className="m-auto"
      style={{ borderRadius: "20px", overflow: "hidden" }}
    >
      <video
        loop
        muted
        autoPlay
        src="https://hn4u-development.s3.us-east-1.amazonaws.com/7088510_uhd_3840_2160_25fps_7f9f4e3696.mp4"
        preload={"auto"}
        type={"video/mp4"}
        style={{
          borderRadius: "20px",
          width: "100%",
          height: "auto",
        }}
        ref={videRef}
      ></video>

      <div className="max-w-[1084px] m-auto bg-[#ffffff]">
        <div
          style={{
            height:
              `${
                banner?.backgroundMedia?.height -
                (banner?.backgroundMedia?.height || 0) * 0.5
              }px` || "400px",
            marginTop:
              `-${
                banner?.backgroundMedia?.height -
                (banner?.backgroundMedia?.height || 0) * 0.5
              }px` || "50px",
          }}
        >
          <h1 className="ml-[20px] text-[64px] font-medium leading-[110%] text-white font-['Domaine_Display'] max-w-[700px]">
            Providing visiting nurses for clinical trials to your patients
          </h1>
          <p className="ml-[20px] text-[18px] leading-[150%] font-normal text-white mt-[10px] max-w-[700px]">
            An ISO 9001:2015 certified clinical trial company that provides the
            best care and support to patients while staying where they feel most
            comfortable, at their own home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
