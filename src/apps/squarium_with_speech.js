import flyd from 'flyd';
import { lowerCase } from 'lodash';
import { listen } from '../io/in/speech_input_continuous';
import { CSS_COLOR_NAMES } from '../utils/css_colors';
import { init as squariumInit, colors } from './squarium';

const validColors = ['magenta', 'yellow', 'green', 'blue'];

const validColorPhrases = CSS_COLOR_NAMES.map(lowerCase);

const init = () => {
    squariumInit();

    colors.length = 0;
    
    flyd.combine(resultStream => {
        const result = resultStream();
        const color = validColorPhrases.find(color => result.transcript.includes(color));
        const cssColor = color && color.replace(' ', '');

        console.log(color);
        console.log(cssColor);
        if (color) colors.push(cssColor);
    }, [listen()]);
}

export { init };