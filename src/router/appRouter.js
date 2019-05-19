import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "../components/Header";
import AddUser from "../components/AddUser";
import AddTask from "../components/AddTask";
import AddProject from "../components/AddProject";
import ViewTask from "../components/ViewTask";
import UpdateTask from "../components/UpdateTask";

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/AddUser" component={AddUser} />
        <Route path="/AddProject" component={AddProject} />
        <Route path="/AddTask" component={AddTask} />
        <Route path="/ViewTask" component={ViewTask} />
        <Route path="/UpdateTask" component={UpdateTask} />
        <Route component={() => <Redirect to={"/AddUser"} />} />
      </Switch>
    </div>
  </BrowserRouter>
);
