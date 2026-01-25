import {
  githubFinder,
  redJovenes,
  natours,
  socialLanding,
  restaurant,
  guessNumber,
  rickMorty,
} from "@/assets/projects";

export interface Project {
  id: number;
  name: string;
  description: string;
  techs: string[];
  link: string;
  repository: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Github Finder",
    description:
      "This is a Front-end App which uses the Github API in order to get public data from github profiles",
    techs: ["HTML-CSS", "React", "Hooks", "Rest API"],
    link: "https://githubfinderjarriola.netlify.app/",
    repository: "https://github.com/ing-arriola/githubFinder",
    image: githubFinder,
  },
  {
    id: 2,
    name: "ONG Website",
    description:
      "React Front End App with an Contentful backend which was made for free in order to help to the NGO Red de jovenes para el futuro",
    techs: ["React", "Gatsby", "Contentful", "GraphQL"],
    link: "https://rdjfuturo.netlify.app/",
    repository: "https://github.com/ing-arriola/gatsbyOng",
    image: redJovenes,
  },
  {
    id: 3,
    name: "Natours",
    description: "Landing page for a travel agency",
    techs: ["HTML", "CSS", "SASS"],
    link: "https://ing-arriola.github.io/ToursWebPage/",
    repository: "https://github.com/ing-arriola/ToursWebPage",
    image: natours,
  },
  {
    id: 4,
    name: "Social Page",
    description: "Landing page for a social page",
    techs: ["React", "React-Bootstrap"],
    link: "https://landing-social.netlify.app/",
    repository: "https://github.com/ing-arriola/looplab",
    image: socialLanding,
  },
  {
    id: 5,
    name: "Restaurant JS",
    description: "Website for a restaurant",
    techs: ["React", "React-Bootstrap"],
    link: "https://reactjs-restaurant.netlify.app/",
    repository: "https://github.com/ing-arriola/company-site",
    image: restaurant,
  },
  {
    id: 6,
    name: "Guess the number",
    description: "React Native game application",
    techs: ["React Native"],
    link: "https://www.youtube.com/watch?v=92NVVz6_ikg&t=1s",
    repository: "https://github.com/ing-arriola/rn-guess-number",
    image: guessNumber,
  },
  {
    id: 7,
    name: "Rick&Morty App",
    description:
      "This is a Front-end App which uses the Rick&Morty API to show and manage your favorites characters of the show",
    techs: ["NextJS", "React", "Typescript", "NextUI"],
    link: "https://jarriola-rickmorty.vercel.app",
    repository: "https://github.com/ing-arriola/rick-MortyApp",
    image: rickMorty,
  },
];

