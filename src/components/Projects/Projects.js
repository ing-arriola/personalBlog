import React, { useState } from "react";
import Project from "./SingleProject";
import { motion } from "framer-motion";
import Select from "react-select"
import * as projectsPictures from "../../images/projects/projectsPictures";
import { FaLaptop } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "Github Finder",
      description:
        "This is a Front-end App which uses the Github API in order to get public data from github profiles",
      picture: projectsPictures.gitFinder,
      techs: ["HTML-CSS", "React", "Hooks","Rest API"],
      link: "https://githubfinderjarriola.netlify.app/",
      repository: "https://github.com/ing-arriola/githubFinder",
    },
    {
      id: 2,
      name: "Bug Tracker",
      description:
        "This is a fullstack App made with MERN STACK and this allow to different users follow a flow of work ",
      picture: projectsPictures.tracker,
      techs: ["Mongo", "Express", "React", "Node"],
      link: "https://desolate-fortress-08367.herokuapp.com/login",
      repository: "https://github.com/ing-arriola/bugTrackerApp",
    },
    {
      id: 3,
      name: "Burger Builder",
      description:
        "This is a Front-end React App to build a hamburger, make an order and send a order with user's data to the backend (Firebase)",
      picture: projectsPictures.burger,
      techs: ["HTML-CSS", "React", "Rest", "Firebase"],
      link: "https://jdevburgerbuilder.netlify.app/",
      repository: "https://github.com/ing-arriola/BurgerBuilderApp",
    },
    {
      id: 4,
      name: "ONG Website",
      description:
        "React Front End App with an Contentful backend which was made for free in order to help to the NGO Red de jovenes para el futuro ",
      picture: projectsPictures.redJovenes,
      techs: ["React", "Gatsby", "Contenful", "GraphQL"],
      link: "https://rdjfuturo.netlify.app/",
      repository: "https://github.com/ing-arriola/gatsbyOng",
    },
    {
      id: 5,
      name: "Natours",
      description: " Landing page for a travel agency ",
      picture: projectsPictures.natours,
      techs: ["HTML", "CSS", "SASS"],
      link: "https://ing-arriola.github.io/ToursWebPage/",
      repository: "https://github.com/ing-arriola/ToursWebPage",
    },
    {
      id: 6,
      name: "Social Page",
      description: " Lanfing page for a social page ",
      picture: projectsPictures.landing,
      techs: ["React", "React-Bootstrap"],
      link: "https://landing-social.netlify.app/",
      repository: "https://github.com/ing-arriola/looplab",
    },
    {
      id: 7,
      name: "Restaurant JS",
      description: " Website for a restaturant ",
      picture: projectsPictures.restaurant,
      techs: ["React", "React-Bootstrap"],
      link: "https://reactjs-restaurant.netlify.app/",
      repository: "https://github.com/ing-arriola/company-site",
    },
    {
      id: 8,
      name: "Bitcoin Ticker",
      description: " Mobile application to get value of cryptocurrencies ",
      picture: projectsPictures.CoinTicker,
      techs: ["Flutter","Dart"],
      link: "https://www.youtube.com/watch?v=qIGBm68wR20",
      repository: "https://github.com/ing-arriola/BitcoinFlutter",
    },
    {
      id: 9,
      name: "Vending machine",
      description: "Send me a message to share with you a test user",
      picture: projectsPictures.Vending,
      techs: ["React","Auth0","Firebase","Rest API"],
      link: "https://jarriola-vending-machine.netlify.app",
      repository: "https://github.com/ing-arriola/vending-marchine",
    },
    {
      id: 10,
      name: "Guess the number",
      description: " Project Description ",
      picture: projectsPictures.GuessNumber,
      techs: ["React Native"],
      link: "https://www.youtube.com/watch?v=92NVVz6_ikg&t=1s",
      repository: "https://github.com/ing-arriola/rn-guess-number",
    },
  ];

  const [selectedOption, setSelectedOption] = useState({ value: 'All', label: 'All' });

  const options = [
    { value: 'All', label: 'All' },
    { value: 'SASS', label: 'Static' },
    { value: 'React', label: 'React' },
    { value: 'React Native', label: 'React Native' },
    { value: 'Flutter', label: 'Flutter' },
  ];

  const filterProjects = () => {
     const check = selectedOption.value !== "All" ? true : false
     const projects =  check ? projectsData.filter(item => item.techs.includes(selectedOption.value)) : projectsData
     const projectsToShow = projects.map(project => (
      <Project
      key={project.id}
      projectName={project.name}
      projectDescription={project.description}
      projectTechs={project.techs}
      projectPicture={project.picture}
      projectLink={project.link}
      projectRepository={project.repository}
    />
     ))

      return projectsToShow
    }
  
  return (
    <motion.div>
      <div className="projects-title">
        <h1>
          Check my best projects <FaLaptop />
        </h1>
        <div className="projects-filter" >
          <label className="projects-filter-label" >Select Technology:</label>
          <Select 
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        
      </div>
      


      <motion.div className="projects-container">
        
        {filterProjects() }
      </motion.div>
    </motion.div>
  );
};

export default Projects;
