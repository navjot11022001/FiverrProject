import React from "react";
import { POPULAR_SERVICES_DATA } from "@/constants/PopularServices.constants";
import { useRouter } from "next/router";
import Image from "next/image";

const PopularService = () => {
  const router = useRouter();
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        Popular services
      </h2>

      <ul className="flex flex-wrap gap-16">
        {POPULAR_SERVICES_DATA?.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => {
                router.push(`/search?q-${name.toLowerCase()}`);
              }}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72">
                <Image alt={"serivce"} src={image} fill />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularService;
