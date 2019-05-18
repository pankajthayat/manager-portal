import React from 'react';
import Demo from "./Demo";
import { Redirect } from 'react-router'

export default class AddUser extends React.Component{
    render(){
        return(
            <div>
                Add user
                <Demo />
                </div>
        )
        
    }
}