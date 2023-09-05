import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { EVERYTHING_DATA } from "@/constants/Everything.constants";
import Image from "next/image";

const Everything = () => {
  return (
    <div className="bg-[#f1fdf7] flex px-20 py-20 justify-between">
      <div>
        <h2 className="text-4xl mb-4 text-[#404145] font-bold">
          The best part? Everything.
        </h2>
        <ul className="flex flex-col gap-10">
          {EVERYTHING_DATA?.map(({ title, subtitle }) => (
            <li key={title}>
              <div className="flex gap-2 items-center text-xl">
                <BsCheckCircle className="text-[#62646a]" />
                <h4>{title}</h4>
              </div>
              <p className="text-[#62646a]">{subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-96 w-2/4">
        <Image src="/everything.webp" fill alt="everything" />
      </div>
    </div>
  );
};

export default Everything;
