import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
// import { BiBook } from 'react-icons/bi'
import { BsLinkedin, BsFileCode } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoDiscord, IoLogoGithub } from "react-icons/io5";
import { SiCodeproject } from "react-icons/si";
import Remember_It from "../../assets/calendar-main.png";
import EdTech from "../../assets/edtech.png";
import STUK from "../../assets/stuk.png";
import Zillit from "../../assets/zillit.png";
import KISS from "../../assets/editor.jpg";
import Dev_Assist from "../../assets/chatbot.png";

let diff = (new Date().getTime() - new Date("01/07/2021").getTime()) / 1000;
diff /= 60 * 60 * 24;

const LinkedInSocial = {
  link: "https://www.linkedin.com/in/sachin-choudhary-0174441a0/",
  icon: <BsLinkedin />,
};

export const totalXp = Math.abs(Math.floor(diff / 365.25));

export const GitHubSocial = "https://github.com/sachin9977";

export const headerSocials = [
  LinkedInSocial,
  {
    link: GitHubSocial,
    icon: <FaGithub />,
  },
];

export const navData = [
  {
    section: "header",
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    section: "about",
    title: "About Me",
    icon: <AiOutlineUser />,
  },
  // {
  //     section: 'qualifications',
  //     title: 'Qualifications',
  //     icon: <BiBook />
  // },
  {
    section: "skills",
    title: "Skills",
    icon: <BsFileCode />,
  },
  {
    section: "projects",
    title: "Projects",
    icon: <SiCodeproject />,
  },
  {
    section: "contact",
    title: "Contact Me",
    icon: <BiMessageSquareDetail />,
  },
];

export const projectsData = [
  {
    imgSrc:
      "https://user-images.githubusercontent.com/86112788/201525927-fd99c566-1e52-43f0-b948-50f27f912852.PNG",
    title: "Cult-Fit",
    desc: "An integrated health platform for fitness, food, mental wellness and primary healthcare.    FITIFY.com is a fitness website of daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free. The gyms at cult.fit are the best gyms that come under fitness studios. Tech-Stack :- Html , CSS, JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/63177572/208613068-025c86c3-0a7f-4274-adcd-cc3609fca53c.png",
    title: "Pharm-Buddy",
    desc: "PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs. Tech-Stack :- Html , CSS, JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/101393428/180765477-c20b6d79-dba5-45ad-b4f9-95c568cafab6.png",
    title: "NDTV (Clone)",
    desc: "New Delhi Television is, and has been for more than a quarter century, a pioneer in India's news television and digital journalism. Founded in 1988 by Radhika Roy and Prannoy Roy, NDTV is today the most watched, credible and respected news network in India and a leader in Internet. Tech-Stack :- Html , CSS, JavaScript",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/70993839/206912301-0ac723b8-a2ee-401c-b9bd-1b2861e75be2.png",
    title: "Nordstrom (clone)",
    desc: "This is an American E-commerce website Nordstrom (clone). Nordstrom, Inc. is an American luxury department store chain headquartered in Seattle, Washington and founded by John W. Nordstrom and Carl F. Wallin in 1901.No matter how you shop, expect the joy of discovery—plus the rush that comes from paying less and scoring more. Sound good? Check us out.Tech-Stack :- Html , CSS, JavaScript",
  },
];

export const projectsDataapp = [
  {
    imgSrc:
      "https://play-lh.googleusercontent.com/0IBfiU_TjuAmiAUUZLlud8G2Tl3h0_d8LZVLpzsq92hG-GlSAYQQ_8Mi7bn24eMd58M=w5120-h2880-rw",
    title: "Rentl",
    desc: "Rentl is a user-friendly property rental application that streamlines the process of finding, listing, and managing rental properties. Designed for both property seekers and owners, the app offers a comprehensive platform to effortlessly discover available properties, connect with landlords, and submit inquiries. Property owners can easily list their properties, showcase details, upload images, and manage tenant interactions. ",
  },
  {
    imgSrc:
      "https://play-lh.googleusercontent.com/49-izEdfqqIkHSzl5yn7Zxg-suYzopEYhKiGz8fPZ2FnJp8BWUjGu2Y97-SGmzin_5I=w1052-h592-rw",
    title: "Moemkin",
    desc: "Shop your screenshots with Moemkin, a discovery app to instantly shop worldwide influencer pictures. Whenever you would like to know the product information, simply take a screenshot of an image or influencer on Instagram or Snapchat. You can instantly purchase the products featured in your screenshots directly from your phone in the Moemkin app. Available on Android    ",
  },
  {
    imgSrc:
      "https://play-lh.googleusercontent.com/aNZuJ7F-VcKAcU-DDSe88rMNTKQHwbIVmH5VkZ22r0SzesLUGFLiBW_Y6LH53e6BpVTV=w5120-h2880-rw",
    title: "D Stickerr",
    desc: "The Desi Sticker App is a mobile application developed using Flutter frameworks that offers a collection of stickers for the Malvi language. Users can easily download and use these stickers in their conversations on various social media platforms the Desi Sticker App offers a fun and easy way for Malvi language speakers to express themselves through digital stickers. ",
  },
];

export const skillsData = [
  {
    domain: "Frontend Development",
    skills: [
      {
        name: "HTML",
        lvl: "Experienced",
      },
      {
        name: "CSS",
        lvl: "Experienced",
      },
      {
        name: "Java Script",
        lvl: "Experienced",
      },
      {
        name: "Sass",
        lvl: "Intermediate",
      },
      {
        name: "Bootstrap",
        lvl: "Intermediate",
      },
      {
        name: "React.js",
        lvl: "Experienced",
      },
      {
        name: "Node Js",
        lvl: "Intermediate",
      },
      {
        name: "MongoDB",
        lvl: "Intermediate",
      },
    ],
  },
  {
    domain: "App Development",
    skills: [
      {
        name: "Flutter",
        lvl: "Experienced",
      },
      {
        name: "Dart",
        lvl: "Intermediate",
      },
      {
        name: "Firebase",
        lvl: "Experienced",
      },
    ],
  },
  {
    domain: "Miscellaneous",
    skills: [
      {
        name: "Bitbucket",
        lvl: "Intermediate",
      },
      {
        name: "Git",
        lvl: "Intermediate",
      },
      {
        name: "Jira",
        lvl: "Intermediate",
      },
      {
        name: "Heroku",
        lvl: "Intermediate",
      },
      {
        name: "Vercel",
        lvl: "Intermediate",
      },
    ],
  },
];

export const educationData = [
  {
    major: "Master's in Computer Applications",
    school: "Guru Nanak Dev Univeristy",
    date: "2018 - 2023",
  },
  {
    major: "Class XII",
    school: "Shri Ram Ashram Sen. Sec. School",
    date: "2018",
  },
  {
    major: "Class X",
    school: "Shri Ram Ashram Sen. Sec. School",
    date: "2016",
  },
];

export const xpData = [
  {
    role: "Web Developer",
    company: "Mansa Infotech",
    location: "Punjab, India",
    date: "July 2022 - July 2023",
  },
  {
    role: "Backend Developer",
    company: "Rock IT Solutions",
    location: "Punjab, India",
    date: "Dec 2021 - July 2022",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Widhya",
    location: "Remote",
    date: "Jan 2021 - Feb 2021",
  },
];

export const footerSocials = [
  LinkedInSocial,
  {
    link: GitHubSocial,
    icon: <IoLogoGithub />,
  },
];

export const intro = `A Software Engineer with expertise in FullStack Web Development and Flutter Development.
                        I have rich experience building commerce websites and marketplaces, admin dashboards,
                        assistance app services, websites for small businesses etc.`;

export const totalProjects = projectsData.length;

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight / 3 || rect.bottom <= window.innerHeight / 3
  );
};

export const redirect = (destination) =>
  document
    .getElementById(destination)
    .scrollIntoView({ behavior: "smooth", block: "center" });
