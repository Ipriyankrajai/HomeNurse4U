import { Inter } from "next/font/google";
import TextImage from "@/components/common/textImage";

import HomePage from "../components/homePage/index";
import VideoDescription from "@/components/homePage/VideoDescription";
import Carousel from "@/components/homePage/Carousal";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`justify-between m-auto ${inter.className}`}>
      <VideoDescription />
      <TextImage />
      <Carousel />
      <HomePage />
    </main>
  );
}
