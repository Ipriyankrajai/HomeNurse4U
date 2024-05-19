import { Inter } from "next/font/google";
import TextImage from "@/components/common/textImage";

import HomePage from "../components/homePage/index";
import VideoDescription from "@/components/homePage/VideoDescription";
import Carousel from "@/components/homePage/Carousal";
import ImageSlider from "@/components/homePage/ImageSlider";
import SwipeCarousel from "@/components/homePage/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`justify-between m-auto ${inter.className}`}>
      <VideoDescription />
      <TextImage />
      <Carousel />
      <ImageSlider />
      <SwipeCarousel />
      <HomePage />
    </main>
  );
}
