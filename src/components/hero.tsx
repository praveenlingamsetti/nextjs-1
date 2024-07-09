import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imageData: StaticImageData;
  imageAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imageData} alt={props.imageAlt} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 style={{ color: "white" }} className="text-white text-6xl">
          {props.title}
        </h1>
      </div>
    </div>
  );
}