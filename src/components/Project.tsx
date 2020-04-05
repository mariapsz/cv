import React from "react";
import './Project.css';
import {IProject} from "../interfaces/IProject";

export const Project = (props: IProject) => {
    return <div className='projectContainer'>
        <div className='name'>
            {props.name}
        </div>
        <a href={props.url}>
            <img src={require('./ticTacToe.png')}/>
        </a>
        <div className='description'>
            {props.description}
        </div>
    </div>
};