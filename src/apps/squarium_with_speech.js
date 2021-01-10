import flyd from 'flyd';
import { listen } from '../io/in/speech_input_continuous';
import { init as squariumInit, colors } from './squarium';

const validColors = ['magenta', 'yellow', 'green', 'blue'];

const init = () => {
    squariumInit();

    colors.length = 0;
    
    flyd.combine(resultStream => {
        const result = resultStream();
        const color = validColors.find(color => result.transcript.includes(color));

        console.log(color);
        if (color) colors.push(color);
    }, [listen()]);
}

export { init };