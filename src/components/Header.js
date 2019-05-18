import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Manger portal</h1>
                <NavLink to = "/">Add task</NavLink>
                <NavLink to = "/AddUser">Add User</NavLink>
                <NavLink to = "/AddProject">Add Project</NavLink>
                <NavLink to = "/AddTask">Add task</NavLink>
                <NavLink to = "/ViewTask">view Task</NavLink>
                <NavLink to = "/UpdateTask">Update Task</NavLink>
            </div>
        )
        
    }
}

export default Header;