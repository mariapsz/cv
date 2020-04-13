import React from 'react';
import '../styles/Project.css';
import {IProject} from '../interfaces/IProject';

export const Project = (props: IProject) => {
    return <div className='project'>
        <a href={props.url} target='_blank' className='name'>
            <div>
                {props.name}
            </div>
        </a>
        <a href={props.url} target='_blank'>
            <img alt='Game screenshots' src={props.imgSrc}/>
        </a>
        <div className='description'>
            {props.description}
        </div>
    </div>
};