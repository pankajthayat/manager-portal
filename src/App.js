import React from 'react';
import { withRouter } from 'react-router';
import './App.css';
import AppRouter from "./router/appRouter";

class App extends React.Component{
  render(){
    return ( <AppRouter />)
  }
}

export default App;
