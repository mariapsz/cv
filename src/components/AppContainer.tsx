import React from 'react';
import '../styles/AppContainer.css';
import {NavBar} from "./NavBar";

export const AppContainer = (props: any) => {
    return <div>
        <NavBar/>
        <div>
            {props.children}
        </div>
    </div>
};