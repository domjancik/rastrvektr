// const initModule = ( { init } ) => init();

const loadSquarium = async () => {
    document.body.innerHTML = '';
    const { default: init } = await import('./squarium')
    init();
}

// const loadSpeechToText = async () => {
//     document.body.innerHTML = '';
//     const { default: init } = await import('./squarium')
//     init();
// }

document.body.innerText = 'Menu here maybe';

// setInterval(loadSquarium, 2000);

loadSquarium();