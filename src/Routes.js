import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}