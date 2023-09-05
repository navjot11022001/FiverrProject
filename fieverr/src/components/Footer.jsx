import React from "react";
import {
  FOORTER_LINKS,
  FOOTER_CATEGORIES_DATA,
} from "@/constants/Footer.constants";
import Link from "next/link";
import FiverLogo from "./Landing/FiverLogo";

const Footer = () => {
  return (
    <footer className="w-full mx-auto px-32 py-16 h-max border-t border-gray-200 bg-gray-100">
      <ul className="flex justify-between">
        {FOOTER_CATEGORIES_DATA.map(({ headerName, links }) => {
          return (
            <li key={headerName} className="flex flex-col gap-2">
              <span className="font-bold">{headerName}</span>
              <ul className="flex flex-col gap-2">
                {links.map(({ name, link }) => (
                  <li key={name} className="text-[#404145]">
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 flex items-center justify-between">
        <FiverLogo fillColor={"#404145"} />
        <ul className="flex gap-5">
          {FOORTER_LINKS.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-xl text-[#404145] hover:text-[#1DBF73] transition-all"
            >
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
