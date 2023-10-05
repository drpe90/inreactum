import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectOne from "../assets/1.avif";
import ProjectTwo from "../assets/2.avif";
import ProjectThree from "../assets/3.avif";
import ProjectFour from "../assets/4.avif";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-green-700">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        beatae quas minima id nulla alias impedit suscipit laboriosam deserunt
        omnis dolor nobis commodi atque blanditiis iste, adipisci at? Unde,
        quos.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ProjectOne} title="Crypt0" />
        <ProjectItem img={ProjectTwo} title="Weather App" />
        <ProjectItem img={ProjectThree} title="Bored API" />
        <ProjectItem img={ProjectFour} title="Dating Service" />
      </div>
    </div>
  );
}

export default Projects;
