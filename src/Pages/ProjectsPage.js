import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import petProjects from "../Components/allProjects";
import { useState } from "react";

const allCategories = [
  "All",
  ...new Set(petProjects.map((item) => item.category)),
];

function ProjectsPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(petProjects);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(petProjects);
      return;
    }
    const filteredData = petProjects.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Pet Projects"} span={"PET PROJECTS"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default ProjectsPage;
