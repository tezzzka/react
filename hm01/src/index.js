import React from  'react';
import ReactDOM from 'react-dom';

const App = () => {
    //return React.createElement('a',{id: 'test-id', className:'linknae'},'Hello from React');
    return <div id='test-id'>Hello from React</div>
}
//ReactDOM.render(React.createElement(App),document.querySelector('#root'));
ReactDOM.render(<App />,document.querySelector('#root'));