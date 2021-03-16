import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { Layout } from '../Layout';
import { NotFound } from '../NotFound';

import './Router.css';
import json from '../../JSON/Chats.json';
import { render } from 'react-dom';

class Router extends Component {
    NavLinks = (obj) => {
        let Nav = []
        obj.map((chat) => {
            const X = { ChatName: chat.name, NavLink: chat.target };
            Nav.push(X);
        });
        return Nav;
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    render() {
        let Nav = this.NavLinks(json);
        return (
            <Switch>
                <Route exact path="/">{<Redirect to="/chat/WowChat" />}</Route>
                <Route exact path={json[0].target} component={() => <Layout Chat={json[0].message} NavLink={Nav} />} />
                <Route exact path={json[1].target} component={() => <Layout Chat={json[1].message} NavLink={Nav} />} />
                <Route exact path={json[2].target} component={() => <Layout Chat={json[2].message} NavLink={Nav} />} />
                <Route exact path={json[3].target} component={() => <Layout Chat={json[3].message} NavLink={Nav} />} />
                <Route exact path={json[4].target} component={() => <Layout Chat={json[4].message} NavLink={Nav} />} />

                <Route exact path="/profile">{'Здесь сделаю форму настроек имени и загрузки фото как аватара, но потом :) иначе не успею сделать все дз :)'}</Route>
                {/* <Route exact path="/new">{'К сожалению не успел ф.нового чата ('}</Route> */}
                <Route component={NotFound} />
            </Switch >
        )
    }
}

export { Router };