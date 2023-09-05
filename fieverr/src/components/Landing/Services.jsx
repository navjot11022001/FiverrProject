import React from "react";
import { CATEGORIES } from "@/constants/Categories.constants";
import Image from "next/image";
import { useRouter } from "next/router";
const Services = () => {
  const Router = useRouter();
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-10 font-bold text-[#404145]">
        You need it, we&apos;ve got it
      </h2>
      <ul className="grid grid-cols-5 gap-10">
        {CATEGORIES.map(({ name, logo }, index) => {
          return (
            <li
              key={`${name}-${index}`}
              className="flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl hover:border-[#1DBF73] border-2 border-transparent p-5 transition-all duration-300"
              onClick={() => Router.push(`/search?category=${name}`)}
            >
              <Image src={logo} alt="category" height={50} width={50} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
