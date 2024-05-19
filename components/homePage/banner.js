import Image from "next/image";

const Banner = (props) => {
  console.log(props.home);
  const banner = props?.home?.banner || {};

  return (
      <div className="m-auto">
        <Image
          src={banner?.backgroundMedia?.url}
          height={banner?.backgroundMedia?.height}
          width={banner?.backgroundMedia?.width}
          alt={banner?.backgroundMedia?.alternativeText}
          objectFit="cover"
          layout="responsive"
          style={{borderRadius: "20px",  backgroundColor: "rgba(248, 247, 216, 0.7)"}}
        />
        <div className="max-w-[1084px] m-auto bg-[#ffffff]">
          <div style={{ height: `${banner?.backgroundMedia?.height - (banner?.backgroundMedia?.height || 0 )*0.5}px` || "400px", marginTop: `-${banner?.backgroundMedia?.height-(banner?.backgroundMedia?.height || 0 )*0.5}px` || "50px" }}>
            <h1 className="ml-[20px] text-[64px] font-medium leading-[110%] text-white font-['Domaine_Display'] max-w-[700px]">
            Providing visiting nurses for clinical trials to your patients
            </h1>
            <p className="ml-[20px] text-[18px] leading-[150%] font-normal text-white mt-[10px] max-w-[700px]">
            An ISO 9001:2015 certified clinical trial company that provides the best care and support to patients while staying where they feel most comfortable, at their own home.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Banner;
