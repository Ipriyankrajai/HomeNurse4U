import MainInquiryForm from "../common/MainInquiryForm/MainInquiryForm";
import SubInquiryForm from "../common/SubInquiryForm";
import Banner from "./banner";

const HomePage = (props) => {
  return (
    <div className="m-auto">
      <Banner home={props.home} />
      <SubInquiryForm />
      <MainInquiryForm hn4uBanner={props.HN4UBanner} />
    </div>
  );
};

export default HomePage;
