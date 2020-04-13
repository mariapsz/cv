import React, {useState} from 'react';
import {NavBarItem} from './NavBarItem';
import {PopupMenu} from './PopupMenu';
import '../styles/NavBar.css';
import {
    ROUTE_PATH_CONTACT,
    ROUTE_PATH_PROJECTS,
    ROUTE_PATH_TECH_STACK
} from '../config';

export const NavBar = () => {
    const [showPopupMenu, setShowPopupMenu] = useState(false);

    return (
        <div>
            {window.matchMedia('(max-width: 640px)').matches ?
                <div>
                    <div className='fas fa-bars navBarContainer'
                         onClick={() => setShowPopupMenu(!showPopupMenu)}/>
                    {showPopupMenu && <PopupMenu handleClose={() => setShowPopupMenu(!showPopupMenu)}/>}
                </div>
                :
                <div className='navBarContainer'>
                    <NavBarItem
                        routePath={ROUTE_PATH_PROJECTS}
                        text='PROJECTS'/>
                    <NavBarItem
                        routePath={ROUTE_PATH_TECH_STACK}
                        text='TECH STACK'/>
                    <NavBarItem
                        routePath={ROUTE_PATH_CONTACT}
                        text='CONTACT'/>
                </div>
            }
        </div>
    );
};