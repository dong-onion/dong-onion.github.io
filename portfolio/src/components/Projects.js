import React from 'react'
import data from '../data.js'
import Project from './Project.js'

const Projects = () => {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        {data.ProjectsData.map((project) => {
          return (
            <div
              className="col-12 d-flex justify-content-center"
              key={project.id}
            >
              <Project
                id={project.id}
                image={project.img}
                name={project.name}
                stack={project.stack}
                link={project.link}
                desc={project.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
