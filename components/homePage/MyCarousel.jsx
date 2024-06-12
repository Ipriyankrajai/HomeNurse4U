import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MyCarousel = () => {
  const slides = [
    {
      imgSrc:
        "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/63cec78993a260fccf136a03_fertility_and_family_building-slider.webp",
      title: "Fertility and Family Building",
      description:
        "Every path to parenthood is unique. From preconception support to fertility preservation and IVF, adoption, and surrogacy, members receive personalized guidance to help them achieve their family goals.",
      link: "https://www.mavenclinic.com/programs/fertility-and-family-building",
    },
    {
      imgSrc:
        "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/63cec7a240fd566aa6fd0301_maternity_newborncare-slider.webp",
      title: "Maternity and Newborn Care",
      description:
        "Pregnancy and the transition to new parenthood can be both joyful and overwhelming. Birthing parents and their partners receive holistic support through pregnancy, postpartum, and return to work.",
      link: "https://www.mavenclinic.com/programs/maternity-and-newborn-care",
    },
    {
      imgSrc:
        "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/63ced66a05a49e7d8349e078_parenting_pediatrics-slider.webp",
      title: "Parenting and Pediatrics",
      description:
        "Parents and children need a village of support to thrive. Families receive on-demand, specialized parent coaching, pediatric care, special needs support, and more, through every stage of development.",
      link: "https://www.mavenclinic.com/programs/parenting-and-pediatrics",
    },
    {
      imgSrc:
        "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ea8c0867dbd22f0613940c_Maven-solutions-menopause.webp",
      title: "Menopause and Ongoing Care",
      description:
        "Aging and hormonal changes impact physical and mental health. Members can tap into virtual providers specializing in menopause, clinically-approved education, and referrals to trustworthy in-person care.",
      link: "https://www.mavenclinic.com/programs/menopause",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      style={{ maxWidth: "1000px" }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="home-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="home-slide-block">
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className="home-slide-image"
            />
            <div className="home-slide-side">
              <div className="home-slide-info">
                <h3 className="home-slide-info-title">{slide.title}</h3>
                <p className="home-slide-info-par">
                  {slide.description}
                  <br />
                  <br />
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    <strong>Learn more</strong>
                  </a>
                </p>
                <div className="home-slide-num">
                  {index + 1} of {slides.length}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;
