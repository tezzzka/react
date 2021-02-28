import './Button.css';
import ReactDOM from 'react-dom';

let messages=[];
function ClickHandler() {
    messages.push('нормально');
    let MsgBox = messages.map((msg,idx) => <li key={idx}>{msg}</li>);
    ReactDOM.render(<ul>{MsgBox}</ul>,document.getElementById('NewMessages'));
}

const Button = (props) => {
    return <button className="Button" onClick={ClickHandler}>{props.caption}</button>
}
export {Button}

