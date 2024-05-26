import React from "react";
import EnquiryFields from "../EnquiryForm/EnquiryFields";

const MainInquiryForm = (props) => {
  const { tag, title, hn4uBanner } = props;
  return (
    <div className="bg-[#FAFBFB] overflow-hidden mb-[70px]">
      <div className="max-w-[1124px] px-[20px] m-auto">
        <div className="block lg:flex lg:flex-wrap lg:gap-[60px] justify-between">
          <div className="flex-1 relative lg:flex">
            <div className="mt-[70px]">
             <p className="text-[#00856F] text-[14px] leading-[150%] tracking-[2px] font-semibold uppercase">{hn4uBanner?.label}</p>
             <h2 className="mt-[20px] text-[48px] leading-[120%] font-medium font-['Domaine_Display']">{hn4uBanner?.title}</h2>
             <p className="mt-[15px] text-[18px] leading-[150%] text-[#64726F] font-normal">{hn4uBanner?.description}</p>
            </div>
            
          </div>
          <div className="flex-1 pt-[50px] w-[100%] lg:w-[70%] basis-[232px]">
            <p className="pb-[10px] w-max text-[#6D7175] text-[12px] tracking-[2px] uppercase sf-semibold">
              {tag}
            </p>
            <h2 className="heading-2 larsseit-medium mb-[20px]">{title}</h2>
            <div className="mb-[50px] w-[100%]">
              <EnquiryFields
                flex={true}
                buttonFitContent={true}
                fullPlaceHolder={true}
                lableBGColor="bg-[#FAFBFB]"
                textAreaRow={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInquiryForm;
