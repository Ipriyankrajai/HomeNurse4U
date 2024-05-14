import React from "react";
import EnquiryFields from "./EnquiryFields";

const EnquiryForm = (props) => {
  const { title = "Need help in finding talent?" } = props;
  return (
    <div className="border border-[#008060] rounded-[10px] p-[20px]">
      <div className="mb-[20px]">
        <h3 className="larsseit-medium text-[24px] leading-[120%] tracking-[-0.5px]">
          {title}
        </h3>
        <div className="mt-[5px] text-[13px] tracking-[0.3px] leading-[123%] ">
          No-Risk Trial, Pay Only If Satisfied.
        </div>
      </div>
      <div>
        <EnquiryFields />
      </div>
    </div>
  );
};

export default EnquiryForm;
