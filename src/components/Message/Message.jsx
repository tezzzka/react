import { Component } from 'react';
import './Message.css';

import { bounce, rubberBand } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    rubberBand: {
        animation: 'x .5s',
        animationName: Radium.keyframes(rubberBand, 'rubberBand')
    },
    none: {}
}

class Message extends Component {
    render() {
        return (
            <StyleRoot>
                <div className={'msg' + this.props.className} style={styles.rubberBand} >
                    <div className="msgText" onClick={this.props.onClick}>{this.props.text}</div>
                    <div className="msgAuthor">{this.props.author}</div>
                </div >
            </StyleRoot>
        )
    }
}

export { Message };
