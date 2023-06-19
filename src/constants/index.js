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
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Founder",
      company_name: "Luminous Tutors",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Current",
      points: [
        "Developed multi-page website using HTML, CSS, React, AWS",
        "Implemented payment processors and adaptive hosting using AWS",
        "Made use of other JavaScript frameworks and tools such as jQuery, Bootstrap, Figma, etc.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "AmpX Consulting",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Current",
      points: [
        "Collaborated with cross-functional teams to develop and implement software solutions using technologies such as AWS, Svelte, Vite, MongoDB, and more.",
        "Led the development of a multiple scalable and robust web applications, resulting in 30% increases in user engagement and 15% decreases in page load time.",
        "Seamlessly integrated legacy systems via Kubernetes and AWS Lambda"
      ],
    },
    {
      title: "Roblox Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "TBA",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Nathan proved me wrong.",
      name: "Hossein “Hoss” Taher",
      designation: "Owner",
      company: "Del's Charcoal Burger",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Nathan does.",
      name: "Rishi Vemparala",
      designation: "Developer",
      company: "AmpX Consulting",
      image: "https://randomuser.me/api/portraits/man/6.jpg",
    },
    {
      testimonial:
        "After Nathan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lorien Romero",
      designation: "Admin",
      company: "Dallas Pet Sitters",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Toyota Trips",
      description:
        "Web-based platform that allows users to search, book, and manage car conveys with various users, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "UTDgg",
      description:
        "Web application that enables students to search for highly rated professors, estimate grade ranges based on previous performance, and notify students when classes became available.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "AutoSAX",
      description:
        "A fully autonomous robot saxophone controlled over serial via MIDI. Can modulate tone and stylistic preferences based on ML from various saxophone recordings.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "electronics",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };