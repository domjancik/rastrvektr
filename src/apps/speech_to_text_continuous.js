import flyd from 'flyd';
import { listen } from '../io/in/speech_input_continuous';

const startListening = () => {
    const listenStream = listen();

    flyd.combine(resultStream => {
        const result = resultStream();

        console.table(result);
        document.body.appendChild(ci('p', result.transcript));
    }, [listenStream])
}

const c = (tagName, options) => document.createElement(tagName, options);
const ci = (tagName, innerText) => { const node = c(tagName); node.innerText = innerText; return node; }

const button = c('button');
button.innerText = "Listen to me! (ALWAYS)";

button.onclick = startListening;


const init = () => {
    document.body.appendChild(button);
    document.body.appendChild(ci('p', "Open console to see full results."));
}

export { init };