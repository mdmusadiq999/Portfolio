import {
  mobile,
  backend,

  web,
 
  javascript,
  springboot,
  html,
  css,
  reactjs,
  java,
  excler,
  tailwind,

  sql,
  git,



  threejs,
  project1,
  project2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "SpringBoot",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "springboot",
    icon: springboot,

  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "java",
    icon: java
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Three JS-Learning",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Full stack develpoer intern ",
    company_name: "Ai-variant(Excelr)",
    icon: excler,
    iconBg: "#383E56",
    date: "March -15 - septmer -10",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers,  and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Real-Estate",
    description:
      "Web-based platform that allows users to search, properties flats houses, and manage car rental, Own a property from various providers, providing a convenient and efficient solution for housing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "tailwind, bootstrap ",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/mdmusadiq999?tab=repositories",
  },
  {
    name: "shoeStore",
    description:
      "Web application that enables users to search for shoes, price ranges for shoes, and locate available shoes based on their current catagory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Springboot frame work",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/mdmusadiq999?tab=repositories",
  },
   
];

export { services, technologies, experiences, projects }; //testimonials,
