// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    console.log("On speech end");
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
};
              
/**
 * Start recognition, return transcript/confidence
 * 
 * @returns { Promise<{transcript: any, confidence: any}>}
 */
const listen = () => {
    recognition.start();

    return new Promise((resolve, reject) => {
        recognition.onresult = event => {
            const transcript = event.results[0][0].transcript;
            const confidence = event.results[0][0].confidence;  

            resolve({
                transcript,
                confidence
            })
        }

        recognition.onnomatch = () => reject('No match');
    })
}

export { listen };

// recognition.start();

// TODO 

// [ ] Clean promise reject on Exception when listen() is called when already listening - Already listening, give me a sec!
// [ ] Wrap with some Rx lib for continuous listening