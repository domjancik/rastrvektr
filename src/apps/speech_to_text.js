import { listen } from '../io/in/speech_input'

const startListening = () => listen().then(result => {
    console.table(result);

    document.body.appendChild(ci('p', result.transcript));
}).catch(error => console.log('No match', error));

const startListeningLoop = () => startListening().then(() => setTimeout(startListening, 1000));

const c = (tagName, options) => document.createElement(tagName, options);
const ci = (tagName, innerText) => { const node = c(tagName); node.innerText = innerText; return node; }

const button = c('button');
button.innerText = "Listen to me!";
button.onclick = startListening;
// button.onclick = startListeningLoop;


const init = () => {
    document.body.appendChild(button);
    document.body.appendChild(ci('p', "Open console to see full results."));
}

export { init };