import React from "react";
import Title from "../Components/Title";
import allCourses from "../Components/allCourses";

function CoursesPage() {
  return (
    <div>
      <div className="c-title">
        <Title title={"Completed Courses"} span={"Completed Courses"} />
      </div>
      <div className="CoursesPage">
        {allCourses.map((x) => {
          return (
            <div className="course" key={x.id}>
              <div className="course-content">
                <img src={x.image} alt="" />
                <a
                  href={x.link}
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  {x.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPage;
