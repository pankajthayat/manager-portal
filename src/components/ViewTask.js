import React from 'react';

export default class ViewTask extends React.Component{
    render(){
        console.log("propes : ", this.props)
        console.log("propes : ", this.props.name)
       return <div>View
           <button onClick = {()=>{this.props.location.name.demo("pankaj")}}> click me</button>
       </div>
    }
}