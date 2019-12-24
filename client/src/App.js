import React, {Component} from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Register from './components/Register';
import Start from './components/Start';
import './style/css/bootstrap.min.css';
import {sendInputValue} from "./api/InputValues";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isLoggedIn: false
        };
    }

    clickHandler() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        sendInputValue(name, surname, email, password);
    }   

    render() {
        return (    
          <BrowserRouter>
            <div>
              <Navigation />
                <Switch>
                <Route
                    path='/'
                    exact
                  />
                  <Route
                    path='/Auth'
                    component={Auth}
                    exact
                  />
                   <Route
                    path='/Register'
                    component={Register}
                    exact
                  />
                  <Route
                    path='/Start'
                    component={Start}
                  />
                </Switch>
            </div>
         </BrowserRouter>
        );
    }    

}

export default App;

