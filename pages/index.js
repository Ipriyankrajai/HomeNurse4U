import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "../components/homePage/index";
import FeaturesBanner from "@/components/common/FeaturesBanner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`justify-between m-auto ${inter.className}`}>
      <FeaturesBanner />
      <HomePage />
    </main>
  );
}
