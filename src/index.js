const initModule = ( { default: init } ) => {
    document.body.innerHTML = '';
    init();
};

const loadSquarium = async () => {
    initModule(await import('./squarium'));
}

const loadSpeechToText = async () => {
    initModule(await import('./speech_to_text'));
}

document.body.innerText = 'Menu here maybe';

// setInterval(loadSquarium, 2000);

// loadSquarium();
loadSpeechToText();