import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { Layout } from '../Layout';
import { NotFound } from '../NotFound';

import './Router.css';

class Router extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/'><Redirect to="/chat/WowChat" /></Route> */}
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/:chatname' component={Layout} />
                {/* <Route exact path="/profile">{'Здесь сделаю форму настроек имени и загрузки фото как аватара, но потом :) иначе не успею сделать все дз :)'}</Route> */}
                <Route exact path="/new">{'К сожалению не успел ф.нового чата ('}</Route>
                <Route component={NotFound} />
            </Switch >
        )
    }
}

export { Router };