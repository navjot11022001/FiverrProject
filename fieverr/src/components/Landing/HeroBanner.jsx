import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroBanner = () => {
  const router = useRouter();
  const [image, setImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(image === 6 ? 1 : image + 1);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [image]);
  return (
    <div className="h-[680px] relative bg-color">
      <div className="absolute top-0 right-0 w-[118vw] h-full transition-opacity z-0">
        {[...Array(6)].map((_c, index) => (
          <Image
            key={index}
            alt="hero"
            src={`/bg-hero${index + 1}.webp`}
            fill={true}
            className={`${
              image === index + 1 ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
          />
        ))}
      </div>
      <div className="z-1 relative w-[650px] flex justify-center flex-col h-full gap-5  ml-20">
        <h1 className="text-white text-5xl leading-snug">
          Find the perfect &nbsp;<i>Freelance</i>
          <br />
          Services for your buisness
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <input
              type="text"
              className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
              placeholder="Try building mobile app"
            />
          </div>
          <button className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md">
            Search
          </button>
        </div>
        <div className="text-white flex gap-4">
          Popular:{" "}
          <ul className="flex gap-5">
            <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Website desing
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Logo desing
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              All Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
