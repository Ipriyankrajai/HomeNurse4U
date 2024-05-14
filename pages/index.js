import Image from "next/image";
import { Inter } from "next/font/google";
import TextImage from "@/components/common/textImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      eius itaque nulla, ab animi earum quia sint? Minus, quisquam quas! Ducimus
      eveniet asperiores molestias quam cum praesentium modi optio ut.
      <TextImage />
    </main>
  );
}
