import { apps } from 'app-info';

const initApp = ( { init } ) => {
    document.body.innerHTML = '';
    init();
}

const loadApp = async ( name ) => {
    initApp(await import(`./apps/${name}`))
}

window.loadApp = loadApp;

document.body.innerText = 'Menu here maybe';

const makeMenuItem = appName => {
    const button = document.createElement('button');
    button.innerText = appName;
    button.onclick = () => loadApp(appName);

    const li = document.createElement('li');
    li.appendChild(button);

    return li;
}

const makeMenu = appNames => {
    const ul = document.createElement('ul');
    
    appNames.forEach(appName => {
        ul.appendChild(makeMenuItem(appName));
    });

    return ul;
}

console.log(apps);
document.body.appendChild(makeMenu(apps));


// setInterval(loadSquarium, 2000);

// loadApp('squarium');
// loadApp('squarium_with_speech');
// loadApp('speech_to_text');
// loadApp('speech_to_text_continuous');
