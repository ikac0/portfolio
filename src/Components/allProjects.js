import eCom from "../img/portImages/eCom.png";
import netflix from "../img/portImages/netflix.png";
import todoist from "../img/portImages/todoist.png";
import amazon from "../img/portImages/amazon.png";
import landing from "../img/portImages/landing.png";
import meal from "../img/portImages/meal.png";

const petProjects = [
  {
    id: 1,
    category: "React.js",
    link1: "https://krsteski-e-com.herokuapp.com",
    link2: "https://github.com/ikac0/e-com",
    icon1: "VIEW",
    icon2: "CODE",
    image: eCom,
    title: "E-commerce",
    description: "Fully functional e-commerce site",
  },
  {
    id: 2,
    category: "React.js",
    link1: "http://krsteski-netflix.herokuapp.com/",
    link2: "https://github.com/ikac0/netflix",
    icon1: "VIEW",
    icon2: "CODE",
    image: netflix,
    title: "Netflix Clone",
    description: "Cloned version of Netflix, with styled components",
  },
  {
    id: 3,
    category: "React.js",
    link1: "https://krsteski-todoist.herokuapp.com/",
    link2: "https://github.com/ikac0/todoist",
    icon1: "VIEW",
    icon2: "CODE",
    image: todoist,
    title: "Todoist App Clone",
    description: "Cloned version of the popular Todoist App",
  },
  {
    id: 4,
    category: "React.js",
    link1: "http://krsteski-amazon.herokuapp.com/",
    link2: "https://github.com/ikac0/amazon-clone",
    icon1: "VIEW",
    icon2: "CODE",
    image: amazon,
    title: "Amazon Clone",
    description: "Functional amazon based, e-commerce platform",
  },
  {
    id: 5,
    category: "JavaScript",
    link1: "https://ikac0.github.io/landing/",
    link2: "https://github.com/ikac0/landing",
    icon1: "VIEW",
    icon2: "CODE",
    image: landing,
    title: "JavaScript LandingPage",
    description: "Clone of the popular chrome extention Momentum",
  },
  {
    id: 6,
    category: "JavaScript",
    link1: "https://ikac0.github.io/meal-finder-vanilla-js/",
    link2: "https://github.com/ikac0/meal-finder-vanilla-js",
    icon1: "VIEW",
    icon2: "CODE",
    image: meal,
    title: "JavaScript Meal finder",
    description: "Vanilla JavaScript Meal finder using themealdb API",
  },
];

export default petProjects;
