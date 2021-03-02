import { Component } from 'react';
import './Messages.css';
import PropTypes from 'prop-types';

const classesX = ['msg msgSteel', 'msg msgSky'];
var ix = 0;

class Messages extends Component {
    static propTypes = {
        entry: PropTypes.array.isRequired,
        count: PropTypes.number,
        handleClick: PropTypes.func,
    }

    state = {
        intervalId: null
    }

    componentDidMount() {
        const id = setInterval(() => {
            console.log('interval');
        }, 1000);
        this.setState({ intervalId: id });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    render() {
        const { entry = [], count, handleClick, handleChange } = this.props;
        return (
            <>
                <div className="messages" onChange={handleChange}>
                    {entry.map((item, index) => (
                        <Message key={index} text={item} />
                    ))}
                </div>
                <button onClick={handleClick}>{count}</button>
            </>
        );
    }
}



// const Messages = (props) => {
//     const {entry = []} = props;
//     return (
//         <div className="messages">
//             {entry.map((item,index) => (
//                 <Message key={index} text={item} />
//             ))}    
//         </div>
//     );
// };

const Message = (props) => {
    let res = <div className={classesX[ix]}>{props.text}</div>;
    ix == 0 ? ix = 1 : ix = 0;
    return res;
}

export { Messages };