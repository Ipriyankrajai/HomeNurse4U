import React, { useEffect, useRef, useState } from "react";

const data = [
  { title: "500+", description: "NURSES" },
  { title: "3200+", description: "VISITS" },
  { title: "500+", description: "COUNTRIES" },
];
function VideoDescription() {
  const [play, setPlay] = useState(false);
  const videRef = useRef();

  useEffect(() => {
    if (play) videRef.current.play();
    else videRef.current.pause();
  }, [play]);

  return (
    <div className="max-w-[1204px] px-[20px] mx-auto flex flex-wrap gap-x-[30px] gap-y-[15px]">
      <div className="max-w-[330px]">
        <div className="tb text-[#00856F]">
          VISITING NURSE FOR CLINICAL TRIALS
        </div>
        <h2 className="h2">We bring clinical trials to the patients’ home</h2>
        <p className="bt mt-[15px] text-[#64726F]">
          Decentralization is an effective way to make clinical trials more
          patient-focused, providing numerous advantages for sponsors,
          clinicians, and most importantly, patients.
        </p>
        <p className="bt mt-[15px] text-[#64726F]">
          By introducing decentralized components, such as home healthcare
          services, into clinical trials, clinical researchers can create a more
          efficient, streamlined process for all stakeholders involved. Not only
          does this offer a more personalized experience for patients, but it
          also ultimately allows for better-quality results from clinical
          trials.
        </p>
      </div>
      <div className="flex-1">
        <div>
          <div className="relative">
            <video ref={videRef} width={734} height={423}>
              <source src="https://hn4u-development.s3.us-east-1.amazonaws.com/Drone_Freestyle_Mountain_Landscape_With_Snow_Free_Stock_Footage_Creative_Common_Video_95235d3a8a.mp4" />
            </video>
            <div className="absolute bottom-5 left-5">
              <button onClick={() => setPlay(!play)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                >
                  <rect
                    x="14.3999"
                    y="14.5894"
                    width="31.8"
                    height="31.8"
                    fill="white"
                  />
                  <path
                    d="M30 0.189453C24.0666 0.189453 18.2664 1.94892 13.3329 5.24536C8.39943 8.54181 4.55426 13.2272 2.28363 18.7089C0.0129985 24.1907 -0.581101 30.2227 0.576455 36.0422C1.73401 41.8616 4.59123 47.2071 8.78681 51.4026C12.9824 55.5982 18.3279 58.4554 24.1473 59.613C29.9667 60.7706 35.9987 60.1765 41.4805 57.9058C46.9623 55.6352 51.6476 51.79 54.9441 46.8565C58.2405 41.9231 60 36.1229 60 30.1894C59.9916 22.2355 56.8282 14.6098 51.2039 8.98552C45.5797 3.36125 37.9539 0.197853 30 0.189453ZM41.6971 32.0875L26.6971 42.4721C26.3508 42.7116 25.9456 42.8517 25.5254 42.8774C25.1052 42.9031 24.6859 42.8133 24.313 42.6178C23.9402 42.4223 23.6279 42.1286 23.41 41.7683C23.1921 41.4081 23.0769 40.9951 23.0769 40.5741V19.8048C23.0769 19.3838 23.1921 18.9708 23.41 18.6106C23.6279 18.2503 23.9402 17.9565 24.313 17.761C24.6859 17.5655 25.1052 17.4758 25.5254 17.5015C25.9456 17.5271 26.3508 17.6673 26.6971 17.9068L41.6971 28.2914C42.0041 28.5037 42.2551 28.7873 42.4284 29.1179C42.6017 29.4485 42.6923 29.8162 42.6923 30.1894C42.6923 30.5627 42.6017 30.9304 42.4284 31.261C42.2551 31.5916 42.0041 31.8752 41.6971 32.0875Z"
                    fill="#FF752C"
                  />
                </svg>
              </button>
              <div className="mt-4 p-5 bg-white rounded-lg flex flex-wrap">
                {data.map((d, index) => (
                  <div key={index} className="flex">
                    <div>
                      <h4 className="h4 text-[#00856F]">{d.title}</h4>
                      <p className="ts text-[#00856F] mt-[5px]">
                        {d.description}
                      </p>
                    </div>
                    {data.length - 1 > index ? (
                      <div className="mx-[30px] w-[1px] bg-black" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-l-2 border-[#D9D9D9] relative">
            <div className="pt-5 pl-5 pb-[70px]">
              <h3 className="h3">
                HomeNurse4U makes the participation of patients in clinical
                trials simpler and more comfortable reducing the burden on
                patients and their families.
              </h3>
              <p className="mt-[15px] text-[#64726F] bt">
                This has become the “need of the hour” when several study visits
                required as per the study protocol are missed due to the
                patients unavailability or inability and/or concerns to visit
                the sites.
              </p>
            </div>
            <div className="absolute bottom-[-50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="902"
                height="118"
                viewBox="0 0 902 118"
                fill="none"
              >
                <path
                  d="M791.563 117.96H791.543C791.032 117.95 790.612 117.557 790.562 117.045L781.057 10.1216L769.13 85.1648C769.05 85.6576 768.63 86.0096 768.14 86.0096C767.649 86.0096 767.229 85.6375 767.159 85.1447L762.736 54.5723L758.774 77.4614C758.694 77.9441 758.274 78.2961 757.784 78.2961C757.293 78.2961 756.883 77.9441 756.803 77.4614L753.361 57.0764L749.549 63.6133C749.369 63.925 749.029 63.9799 748.679 63.9799H4.57168e-05L0 62.9799V61.9799H748.11L753.031 53.6772C753.241 53.3152 753.661 53.1241 754.072 53.1945C754.482 53.275 754.812 53.5968 754.882 54.0192L757.814 71.3569L761.856 48.0254C761.936 47.5426 762.356 47.1907 762.846 47.1907H762.856C763.347 47.1907 763.757 47.5628 763.837 48.0555L768.22 78.3363L780.386 1.82483C780.466 1.32199 780.907 0.970012 781.407 0.980068C781.907 1.00018 782.328 1.3924 782.368 1.89523L791.773 107.702L800.248 41.8003C800.308 41.2974 800.738 40.9253 801.238 40.9253C801.739 40.9253 802.169 41.3075 802.229 41.8103L806.671 78.0346L813.035 51.9676C813.145 51.505 813.575 51.1832 814.046 51.2033C814.516 51.2234 814.916 51.5653 814.996 52.038L818.048 70.12L821 60.4756C821.12 60.0934 821.45 59.8118 821.85 59.7716C822.24 59.7314 822.63 59.9325 822.831 60.2845L826.803 67.4851L830.155 62.5573C830.345 62.2858 830.67 61.9799 831 61.9799H1462V62.9799V63.9799H831.5L827.543 69.9691C827.343 70.2608 827.023 70.4116 826.673 70.4016C826.323 70.3814 826.012 70.1904 825.842 69.8887L822.23 63.3317L818.738 74.7662C818.598 75.2087 818.188 75.5104 817.718 75.4701C817.257 75.44 816.877 75.098 816.797 74.6354L813.845 57.1669L807.332 83.8373C807.212 84.31 806.791 84.6318 806.301 84.6016C805.821 84.5715 805.431 84.1994 805.371 83.7166L801.228 49.9663L792.593 117.105C792.533 117.608 792.103 117.98 791.603 117.98L791.563 117.96Z"
                  fill="url(#paint0_linear_349_6851)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_349_6851"
                    x1="0.000122072"
                    y1="59"
                    x2="1462"
                    y2="59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.615" stop-color="#00856F" />
                    <stop offset="1" stop-color="#D9D9D9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDescription;
