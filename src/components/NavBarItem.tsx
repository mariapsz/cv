import React from "react";
import './NavBarItem.css';
import {Link} from "react-router-dom";

export const NavBarItem = (props: { text: string, routePath: string }) => {

    return <div className='navBarItem'>
        <Link to={props.routePath}>
            {props.text}
        </Link>
    </div>
};