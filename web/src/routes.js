import React  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import HomePage from "./pages/HomePage";

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/create-movie" component={CreatePage}/>
            <Route path="/update-movie" component={UpdatePage}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;