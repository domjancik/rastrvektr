import flyd from 'flyd';

// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
recognition.continuous = true;

// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    console.log("On speech end");
    recognition.stop();
}

recognition.onnomatch = function(event) {
    console.log("I didn't recognise that color.");
}
              
const listen = (recognitionSetup) => {
    if (recognitionSetup) recognitionSetup(recognition);

    const resultStream = flyd.stream();
    // debugger;
    recognition.addEventListener('result', resultStream);
    
    const finalResultStream = flyd.combine((resultStream) => {
            const result = resultStream();

            const lastResultIndex = result.results.length - 1;
            const lastResult = result.results[lastResultIndex][0];

            const transcript = lastResult.transcript;
            const confidence = lastResult.confidence;  

            return {
                transcript,
                confidence
            };
    }, [resultStream]);

    recognition.start();

    return finalResultStream;
}

export { listen };

// recognition.start();

// TODO 

// [ ] Clean promise reject on Exception when listen() is called when already listening - Already listening, give me a sec!
// [ ] Wrap with some Rx lib for continuous listening