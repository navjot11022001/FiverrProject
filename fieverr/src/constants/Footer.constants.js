import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { CATEGORIES } from "./Categories.constants";

const FOORTER_LINKS = [
  { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
  {
    name: "Youtube",
    icon: <FiYoutube />,
    link: "https://www.youtube.com/KishanSheth21/",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/koolkishan/",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    link: "https://instagram.com/koolkishansheth",
  },
  {
    name: "Twitter",
    icon: <FiTwitter />,
    link: "https://twitter.com/koolkishansheth",
  },
];
const ABOUT_DATA = [
  "Careers",
  "Press & News",
  "Partnership",
  "Privacy Policy",
  "Terms of Service",
  "Intellectual Property Claims",
  "Investor Relations",
];
const COMMUNITY_DATA = [
  "Community Success Stories",
  "Community Hub",
  "Forum",
  "Events",
  "Blog",
  "Influencers",
  "Affiliates",
  "Podcast",
  "Invite a Friend",
  "Become a Seller",
  "Community Standards",
];
const MORE_SECTION = [
  "Fiverr Business",
  "Fiverr Pro",
  "Fiverr Logo Maker",
  "Fiverr Guides",
  "Get Inspired",
  "Fiverr Select",
  "ClearVoice",
  "Fiverr Workspace",
  "Learn",
  "Working Not Working",
];

const FOOTER_CATEGORIES_DATA = [
  {
    headerName: "Categories",
    links: CATEGORIES.map(({ name }) => ({
      name,
      link: `/search?category=${name}`,
    })),
  },
  {
    headerName: "ABOUT",
    links: ABOUT_DATA.map((curr) => ({ name: curr, link: "#" })),
  },
  {
    headerName: "Community",
    links: COMMUNITY_DATA.map((curr) => ({ name: curr, link: "#" })),
  },
  {
    headerName: "Community",
    links: MORE_SECTION.map((curr) => ({ name: curr, link: "#" })),
  },
];
export { FOORTER_LINKS, FOOTER_CATEGORIES_DATA };
