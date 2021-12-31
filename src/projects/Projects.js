import React from 'react';
import Project from './Project';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div id="projects">
      <div className="sm:container sm:mx-auto">
        <h1 className="text-3xl md:text-4xl text-center">
          My Work & Portfolio
        </h1>
        <div className="mt-8">
          <div className=" flex flex-wrap justify-center">
            {ProjectItems.map((proj) => {
              return (
                <Project
                  key={proj.name}
                  name={proj.name}
                  url={proj.url}
                  src={proj.src}
                  image={proj.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
