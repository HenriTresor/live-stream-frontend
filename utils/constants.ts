import {
  FaHome,
  FaCamera,
  FaHeadset,
  FaPersonBooth,
  FaTrophy,
  FaFacebookMessenger,
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
  { name: "Home page", link: "/home", LinkIcon: FaHome },
  { name: "Streams", link: "/streams", LinkIcon: FaCamera },
  { name: "Streamers", link: "/streamers", LinkIcon: FaHeadset },
  { name: "Friends", link: "/friends", LinkIcon: FaPersonBooth },
  { name: "challenges", link: "/challenges", LinkIcon: FaTrophy },
  { name: "chat", link: "/chat", LinkIcon: FaFacebookMessenger },
];

export const settings = [
  {
    title: "Your Account",
    items: [
      {
        title: "Account information",
        body: "See your account information like your phone number and email.",
        link: "/main/settings/account-info",
        // icon: account,
      },
      {
        title: "Change your password",
        body: "Change your password at any time.",
        link: "/main/settings/change-password",
        // icon: chPw,
      },
    ],
  },
  {
    title: "Security and account access",
    items: [
      {
        title: "Security manage",
        body: "Manage your account’s security.",
        link: "/main/settings/security-manage",
        // icon: security,
      },
      {
        title: "Connected accounts",
        body: "Manage Google accounts connected to logo to log in.",
        link: "/main/settings/connected-accounts",
        // icon: connected,
      },
    ],
  },
  {
    title: "Privacy and safety",
    items: [
      {
        title: "Privacy and safety",
        body: "Manage what information you allow other people on logo to see.",
        // icon: privacy,
        link: "/main/settings/privacy-and-safety",
      },
      {
        title: "Mute and block",
        body: "the accounts, words, and notifications that you’ve muted or blocked.",
        // icon: mute,
        link: "/main/settings/mute-block",
      },
    ],
  },
  {
    title: "Notifications",
    items: [
      {
        title: "Filters",
        body: "Choose the notifications you’d like to see — and those you don’t.",
        link: "/main/settings/notifications",
        // icon: filters,
      },
    ],
  },
  {
    title: "Accessibility, display, and languages",
    items: [
      {
        title: "Accessibility",
        body: "Manage aspects of your Logo experience color contrast and motion.",
        link: "/main/settings/accessibility",
        // icon: acessiblity,
      },
      {
        title: "Languages",
        body: "Which languages are used to personalize your Videbucks experience.",
        link: "/main/settings/languages",
        // icon: languages,
      },
    ],
  },
];
