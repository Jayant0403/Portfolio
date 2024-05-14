import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    exercise,
    inventory,
    carrent,
    jobit,
    tripguide,
    threejs,
    diabetes,
    Credentials,
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
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },

    {
      title: "Content Creator",
      icon: creator,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - Present",
      points: [
        "Developing and deployed web applications using HTML, CSS and Javascript and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learning different technolgies and increasing problem solving ability",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed different front-end responsive designs and  web applications using HTML, CSS and Javascript and other related technologies.",
        "Created some front-end designs for Nike's inventory, Restaurant's page and Exercise Applications",
        
      ],
    },
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Started learning different frameworks and expertising in React",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "MERN stack Developer",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        
        "Heading towards MERN STACK DEVELOPMENT",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "He makes websites very responsive and well optimized",
      name: "",
      designation: "Professor at BVP",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Wonderful responsive project has been delivered by Jayant and his team , a fully functional website for Inventory Management System",
      name: "Nusrat Parveen",
      designation: "Professor at BVP",
      company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He always helps me wherever i am stucked in projects ,a sharp problem solver and debugger !",
      name: "",
      designation: "Developer",
      company: "",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Inventory Management System",
      description:
        "Web-based platform that allows users to add, delete and update the products and suppliers in inventory , providing a convenient and efficient solution for Inventory needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/Jayant0403/InventoryMS",
    },
    {
      name: "Exercise Application",
      description:
        "Web application that enables users to search for different exercise with respect to different body parts and also suggests related youtube videos using youtube API",
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
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: exercise,
      source_code_link: "https://jayant-gym.netlify.app/",
    },
    {
      name: "Credentials Manager App",
      description:
        "This web application manages your password and other credentials ,it is used to save the data in local storage.  Technologies used:React,Tailwind CSS,JavaScript",
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
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: Credentials,
      source_code_link: "https://github.com/Jayant0403/Credentials_Manager_ReactApp",
    },
    {
      name: "Diabetes Prediction System",
      description:
        "AI-powered diabetes prediction system utilizes advanced machine learning algorithms to analyze patient data and predict the likelihood of developing diabetes. By leveraging a comprehensive dataset and sophisticated modeling techniques , system provides accurate predictions",
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
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: diabetes,
      source_code_link: "https://github.com/Jayant0403/Diabetes-predictor/blob/main/README.md",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };