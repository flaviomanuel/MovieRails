import React  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import HomePage from "./pages/HomePage";
import DirectorMoviesPage from "./pages/DirectorMoviesPage";
import SynopsisPage from "./pages/SynopsisPage";

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/director-movie/:directorName" component={DirectorMoviesPage}/>
            <Route path="/create-movie" component={CreatePage}/>
            <Route path="/update-movie/:id" component={UpdatePage}/>
            <Route path="/synopsis-movie/:id" component={SynopsisPage}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;