import { Inter } from "next/font/google";
import TextImage from "@/components/homePage/TextImage";

import HomePage from "../components/homePage/index";
import VideoDescription from "@/components/homePage/VideoDescription";
import ServiceScroll from "@/components/homePage/ServiceScroll";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`justify-between m-auto ${inter.className}`}>
      <VideoDescription />
      <TextImage />
      <ServiceScroll />
      <HomePage />
    </main>
  );
}
