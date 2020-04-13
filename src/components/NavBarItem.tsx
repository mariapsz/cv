import React from 'react';
import '../styles/NavBarItem.css';
import {Link} from 'react-router-dom';

export const NavBarItem = (props: { text: string, routePath: string }) =>
    <div className='navBarItem'>
        <Link to={props.routePath}>
            {props.text}
        </Link>
    </div>;