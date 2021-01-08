import { listen } from './io/in/speech_input'

listen().then(result => {
    console.log(result.transcript);
});