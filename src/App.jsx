/* Copyright (c) 2019 Dinesh Visweswaraiah.  All rights reserved.  This code shall in no way be used by any person for any reason. */
import React from 'react';
import { Route,Redirect,Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./theme";
import Calculater from "./components/Calculater/index";
import './App.css';

class App extends React.Component {
    render(){

        var user_theme   =   theme();
        return <ThemeProvider theme={user_theme}>
                   <Switch>
                      <Route  path={"/house"} component={Calculater} />
                      <Redirect exact path={'/'} to={`/house`}/>
                  </Switch>
                </ThemeProvider>
                
    }
}
export default App