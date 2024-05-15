import React from "react";
import EnquiryFields from "../EnquiryForm/EnquiryFields";
import Image from "next/image";

const MainInquiryForm = (props) => {
  const { tag, title } = props;
  return (
    <div className="bg-[#FAFBFB] overflow-hidden">
      <div className="max-w-[1124px] px-[20px] m-auto">
        <div className="flex flex-wrap gap-[50px] justify-between">
          <div className="flex-1 pt-[40px]">
            <p className="pb-[10px] w-max text-[#6D7175] text-[12px] tracking-[2px] uppercase sf-semibold">
              {tag}
            </p>
            <h2 className="heading-2 larsseit-medium mb-[20px]">{title}</h2>
            <div className="mb-[40px]">
              <EnquiryFields
                flex={true}
                buttonFitContent={true}
                fullPlaceHolder={true}
                lableBGColor="bg-[#FAFBFB]"
                textAreaRow={5}
              />
            </div>
          </div>
          <div className="flex-1 relative lg:flex items-end hidden">
            <div className="absolute z-10 carousel:bottom-[26%] bottom-[19%] h-[238px] w-[296px]">
              {/*<Image src={resource} alt="resource details" />*/}
            </div>
            <div className="absolute w-[130%] flex">
              <Image src="https://hn4u-development.s3.us-east-1.amazonaws.com/logo_0652c83218.svg" alt="gfd" width={263} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInquiryForm;
