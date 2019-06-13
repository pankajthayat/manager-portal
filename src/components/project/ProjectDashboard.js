import React from 'react';
import ProjectForm from "./ProjectForm";
import ViewProject from "./ViewProject";

export default class AddProject extends React.Component{
    render(){
        return <div>
            <ProjectForm />
            <ViewProject />
        </div>
    }
}