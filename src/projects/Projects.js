import React from 'react';
import Project from './Project';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div id="projects" className="border-b">
      <div className="pt-5 pb-12 sm:container sm:mx-auto">
        <h1 className="text-3xl md:text-4xl text-center">
          My Work & Portfolio
        </h1>
        <div className="pt-10 flex flex-wrap x-lg:flex-nowrap justify-center">
          {ProjectItems.map((proj) => {
            console.log(proj);
            return <Project key={proj.name} data={proj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
