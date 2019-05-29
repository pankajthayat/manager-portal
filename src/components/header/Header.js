import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-expand-sm bg-light">
    <ul className="navbar-nav">
      <li class="nav-item">
        <NavLink to="/AddUser" className="nav-link">
          Add User
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/AddProject" className="nav-link">
          Add Project
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/AddTask" className="nav-link">
          Add task
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/ViewTask" className="nav-link">
          view Task
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/UpdateTask" className="nav-link">
          Update Task
        </NavLink>
      </li>
    </ul>
  </nav>
);
