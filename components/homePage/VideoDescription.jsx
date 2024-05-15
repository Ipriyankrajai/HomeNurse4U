import React from "react";

function VideoDescription() {
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
      <div className="flex-1">Video</div>
    </div>
  );
}

export default VideoDescription;
