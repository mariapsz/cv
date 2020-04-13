import React from 'react';
import '../styles/AppContainer.css';
import {Project} from './Project';
import {IProject} from '../interfaces/IProject';
import {projects} from '../projects';

export const ProjectsContainer = () => {

    const getProjects = () => projects.map((project: IProject) =>
        <Project name={project.name}
                 imgSrc={project.imgSrc}
                 description={project.description}
                 url={project.url}/>
    );

    return <div className='pageContentContainer'>
        {getProjects()}
    </div>

};