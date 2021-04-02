import { bounce, rubberBand } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const anima = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    rubberBand: {
        animation: 'x .75s',
        animationName: Radium.keyframes(rubberBand, 'rubberBand')
    },
    none: {}
}