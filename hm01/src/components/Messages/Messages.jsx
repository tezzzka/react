import './Messages.css';

const classesX= ['msg msgSteel','msg msgSky'];
var ix = 0;
const Messages = (props) => {
    const {entry = []} = props;
    return (
        <div className="messages">
            {entry.map((item,index) => (
                <Message key={index} text={item} />
            ))}    
        </div>
    );
};

const Message = (props) => {
    let res = <div className={classesX[ix]}>{props.text}</div>; 
    ix == 0 ? ix = 1 : ix = 0; 
    return res;
}

export {Messages};