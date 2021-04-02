import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { Layout } from '../Layout';
import { NotFound } from '../NotFound';
import { Profile } from '../Profile';

import './Router.css';

class Router extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/'><Redirect to="/chat/WowChat" /></Route> */}
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/:chatname' component={Layout} />
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/new">{'К сожалению не успел ф.нового чата ('}</Route>
                <Route component={NotFound} />
            </Switch >
        )
    }
}

export { Router };