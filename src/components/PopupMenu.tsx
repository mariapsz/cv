import React from "react";
import './PopupMenu.css';
import {NavBarItem} from "./NavBarItem";
import {ROUTE_PATH_CONTACT, ROUTE_PATH_PROJECTS, ROUTE_PATH_TECH_STACK} from "../config";

export const PopupMenu = (props: { handleClose: any }) => {

    return <div className='popupMenuContainer'>
        <div onClick={() => props.handleClose()}>
            <NavBarItem text='PROJECTS' routePath={ROUTE_PATH_PROJECTS}/>
            <NavBarItem text='TECH STACK' routePath={ROUTE_PATH_TECH_STACK}/>
            <NavBarItem text='CONTACT' routePath={ROUTE_PATH_CONTACT}/>
        </div>
    </div>
};