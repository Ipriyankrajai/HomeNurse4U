import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "../components/homePage/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`justify-between m-auto ${inter.className}`}
    >
      <HomePage />
    </main>
  );
}
