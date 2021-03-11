
import './App.css';
import { Chat } from '../Chat';
// import { Layout } from '../Layout';
import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { MessageField } from '../MessageField';
import { Chkbox } from '../Chkbox';
// import { Logo } from '../Logo';
import { Router } from '../Router';
import { Switch } from 'react-router-dom';


function App() {
    return (
        <>
            <Header>Greetings</Header>
            <Router />
        </>
    );
}

export { App };