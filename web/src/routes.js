import React  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/create-movie" component={CreatePage}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;