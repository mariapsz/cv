import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {ProjectsContainer} from "./components/ProjectsContainer";
import {TechStack} from "./components/TechStack";
import {Contact} from "./components/Contact";
import {
    ROUTE_PATH_CONTACT,
    ROUTE_PATH_PROJECTS,
    ROUTE_PATH_TECH_STACK
} from "./config";
import {AppContainer} from "./components/AppContainer";


function App() {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <Route exact path='/'>
                        <ProjectsContainer/>
                    </Route>
                    <Route path={ROUTE_PATH_PROJECTS}>
                        <ProjectsContainer/>
                    </Route>
                    <Route path={ROUTE_PATH_TECH_STACK}>
                        <TechStack/>
                    </Route>
                    <Route path={ROUTE_PATH_CONTACT}>
                        <Contact/>
                    </Route>
                </Switch>
            </AppContainer>
        </Router>
    );
}

export default App;
