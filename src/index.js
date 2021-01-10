
const initApp = ( { init } ) => {
    document.body.innerHTML = '';
    init();
}

const loadApp = async ( name ) => {
    initApp(await import(`./apps/${name}`))
}


document.body.innerText = 'Menu here maybe';

// setInterval(loadSquarium, 2000);

// loadApp('squarium');
loadApp('squarium_with_speech');
// loadApp('speech_to_text');
// loadApp('speech_to_text_continuous');
