import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "../components/header/Header";
import AddUser from "../components/user/AddUser";
import AddTask from "../components/task/AddTask";
import AddProject from "../components/project/AddProject";
import ViewTask from "../components/task/ViewTask";
import UpdateTask from "../components/task/UpdateTask";

export default () => (
  <BrowserRouter>
     <div className="container">
                 <div className="row">
                 <div className="col-sm-1"></div>
                 <div className="col-sm-10">
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
    <div className="col-sm-1"></div>
    </div>
    </div>
  </BrowserRouter>
);
