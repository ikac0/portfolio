import React from "react";
import Title from "../Components/Title";
import SkillsSection from "../Components/SkillsSection";
import FamiliarWith from "../Components/FamiliarWith";

function SkillsPage() {
  return (
    <div className="SkillsPage">
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML"} width={"90%"} />
        <SkillsSection skill={"CSS"} width={"60%"} />
        <SkillsSection skill={"JavaScript"} width={"90%"} />
        <SkillsSection skill={"React.js"} width={"90%"} />
        <SkillsSection skill={"Redux"} width={"60%"} />
        <SkillsSection skill={"Firebase"} width={"90%"} />
        <SkillsSection skill={"Node/Express.js/MongoDB"} width={"40%"} />
        <SkillsSection skill={"SCSS/SASS"} width={"60%"} />
      </div>
      <Title title={"TOOLS/TECHNOLOGIES"} />
      <div className="skillsContainer">
        <SkillsSection skill={"GIT / Version Control"} width={"60%"} />
        <SkillsSection skill={"React Custom Hooks"} width={"70%"} />
        <SkillsSection skill={"Styled Components"} width={"90%"} />
        <SkillsSection skill={"Stripe"} width={"70%"} />
        <SkillsSection skill={"ES5"} width={"70%"} />
        <SkillsSection skill={"Authentication"} width={"70%"} />
      </div>
      <Title title={"FAMILIAR WITH"} />
      <FamiliarWith />
    </div>
  );
}

export default SkillsPage;
