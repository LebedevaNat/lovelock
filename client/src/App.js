import React, {Component} from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Register from './components/Register';
import Start from './components/Start';
import './style/css/bootstrap.min.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isLoggedIn: false
        };
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

