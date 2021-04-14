
import './App.css';
import { Header } from '../Header';
import { Logo } from '../Logo';
import { Router } from '../Router';
import { NavProfile } from '../Nav/NavProfile';
import { NavNewChat } from '../Nav/NavNewChat';


function App() {
    return (
        <>
            <Header>
                <Logo />
                <NavProfile />
                <NavNewChat />
            </Header>
            <Router />
        </>
    );
}

export { App };