import React from "react";
import './ProjectsContainer.css';
import {Project} from "./Project";
import {IProject} from "../interfaces/IProject";


export const ProjectsContainer = () => {

    const projects: IProject[] = [
        {
            name: 'Tic tac toe game',
            description: 'Simple two players game. ',
            url: 'https://chordsviewer.azurewebsites.net/tictactoe.html',
            imgSrc: './ticTacToe.png',
        },
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            url: 'https://chordsviewer.azurewebsites.net/tictactoe.html',
            imgSrc: './ticTacToe.png',
        },
        {
            name: 'Exercitation ullamco',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            url: 'https://chordsviewer.azurewebsites.net/tictactoe.html',
            imgSrc: './ticTacToe.png',
        },

    ];

    const getProjects = () => projects.map((project: IProject) =>
        <Project name={project.name}
                 imgSrc={project.imgSrc}
                 description={project.description}
                 url={project.url}/>
    );

    return <div className='projectsContainer'>
        {getProjects()}
    </div>
};