import {
  FaHome,
  FaCamera,
  FaHeadset,
  FaPersonBooth,
  FaTrophy, 
  FaFacebookMessenger
} from "react-icons/fa";

export const navListItems = {
  quickLinks: [
    { name: "home", link: "" },
    { name: "about us", link: "" },
    { name: "features", link: "" },
    { name: "contact us", link: "" },
  ],
  company: [
    { name: "Terms of user", link: "" },
    { name: "FAQ", link: "" },
    { name: "license", link: "" },
  ],
};

export const howtos = [
  {
    title: "Get gifts from your users",
    description:
      "Live streaming has transformed the way content creators and their audiences interact, bringing a new level of engagement and connection. In this digital age, creators from various platforms engage with their viewers in real time, fostering a ",
  },
  {
    title: "Get paid for your followers",
    description:
      "Live streaming has transformed the way content creators and their audiences interact, bringing a new level of engagement and connection. In this digital age, creators from various platforms engage with their viewers in real time, fostering a ",
  },
  {
    title: " Invite 20 users to get $100",
    description:
      "Live streaming has transformed the way content creators and their audiences interact, bringing a new level of engagement and connection. In this digital age, creators from various platforms engage with their viewers in real time, fostering a ",
  },
];

export const about = [
  {
    title: "live stream",
    description: "You live stream and give interesting content to th world",
  },
  { title: "challenges", description: "Challenge with other users " },
  {
    title: "make money",
    description: "Make money bt recieving gifts and coins from your followers",
  },
];

export const homeSideMenu = [
  { name: "Home page", link: "/home", icon: FaHome },
  { name: "Streams", link: "/streams", icon: FaCamera },
  { name: "Streamers", link: "/streamers", icon: FaHeadset },
  { name: "Friends", link: "/friends", icon: FaPersonBooth },
  { name: "challenges", link: "/challenges", icon: FaTrophy },
  { name: "chat", link: "/chat", icon: FaFacebookMessenger },
];
