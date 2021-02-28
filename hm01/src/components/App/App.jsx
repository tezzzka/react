import './App.css';

import {Messages} from '../Messages';
import {Button,ClickHandler} from '../Button/Button.jsx';

const App = () => {
    return <div id='test-id'>
        <h2>Hello from React</h2>
        <Messages entry={['ok','obi','folrever']}/>
        <Button caption="Отправить"/>
        </div>
}

export {App};