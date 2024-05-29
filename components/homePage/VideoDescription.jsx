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
    <div className="flex flex-wrap gap-x-[30px] gap-y-[15px] h-full mt-[80px]">
      <div className="max-w-[330px] calc-l-m">
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

      <div className="flex-1 relative calc-r-p self-start">
        <div>
          <div className="relative">
            <video ref={videRef} width={734} height={423} controls={play}>
              <source src="https://hn4u-development.s3.us-east-1.amazonaws.com/Drone_Freestyle_Mountain_Landscape_With_Snow_Free_Stock_Footage_Creative_Common_Video_95235d3a8a.mp4" />
            </video>
            {!play ? (
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
            ) : null}
          </div>
          <div className="border-l-2 border-[#D9D9D9] relative">
            <div className="pt-5 pl-5 pb-[30px]">
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
          </div>
        </div>
        <div className="line-heart absolute bottom-0 w-full"></div>
      </div>
    </div>
  );
}

export default VideoDescription;
