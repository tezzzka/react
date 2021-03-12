import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { MessageField } from '../MessageField';
import { Chat } from '../Chat';
import { NotFound } from '../NotFound';
import { ChatList } from '../ChatList';

import './Router.css';

// Для примера. Будем брать (и записывать) из/в json или db.
const WowChatBox = [
    { id: 0, value: 'Hello, Im a WowChat introducer. Ure Welcome!', author: 'AI', timestamp: new Date(), idx: 'WowChat' }
];
const SleepyChatBox = [
    { id: 0, value: 'helo', author: 'AI', timestamp: new Date(), idx: 'SleepyChat' },
    { id: 1, value: 'fine', author: 'AI', timestamp: new Date(), idx: 'SleepyChat' },
    { id: 2, value: 'be sure aware smt else...', author: 'AI', timestamp: new Date(), idx: 'SleepyChat' }
]
const ModerChatBox = [
    { id: 1, value: 'Finnaly, good work!', author: 'human', timestamp: new Date(), idx: 'ModerChat', idx: 'ModerChat' }
]

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">{<Redirect to="/chat/WowChat" />}</Route>
            <Route exact path="/chat/WowChat" component={() => <Layout MessageBox={WowChatBox} />} />
            <Route exact path="/chat/SleepyChat" component={() => <Layout MessageBox={SleepyChatBox} />} />
            <Route exact path="/chat/ModerChat" component={() => <Layout MessageBox={ModerChatBox} />} />
            <Route exact path="/chat/chatid" component={NotFound} />
            <Route exact path="/profile">{'Здесь сделаю форму настроек имени и загрузки фото как аватара, но потом :) иначе не успею сделать все дз :)'}</Route>
            <Route exact path="/new">{'К сожалению не успел ф.нового чата ('}</Route>
            <Route component={NotFound} />
        </Switch >
    )
}
export { Router };