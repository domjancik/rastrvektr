const SIDE_LENGTH = 20;

const colors = [];

const getBackgroundFunction = () => {
    let index = 0;

    return () => colors[index++ % colors.length]
}

const getBackground = getBackgroundFunction();

const makeSquare = () => {
    const div = document.createElement('div');

    const background = getBackground();

    div.style = 
    `
    width: 50px;
    height: 50px;
    background: ${background};
    border-radius: 5px;
    transition: all 100ms;
    box-shadow: inset 0 -5px rgba(255, 255, 255, 0.2);
    `;

    const update = () => {
        div.style.background = getBackground();
    }

    setInterval(update, 50 + Math.random() * 10000);

    return div;
}

const init = (defaultColors = ['red', 'blue', 'black', 'white']) => {
    colors.length = 0;
    colors.push(...defaultColors);

    const app = document.body;
    app.style =
    `
    background: black;
    
    padding: 0;
    margin: 0;
    overflow: hidden;
    
    height: 100vw;
    width: 100vw;
    
    display: grid;
    grid-template-columns: repeat(${SIDE_LENGTH}, 1fr);
    grid-template-rows: repeat(${SIDE_LENGTH}, 1fr);
    
    align-items: center;
    justify-items: center;
    `;
    
    for (let index = 0; index < SIDE_LENGTH ** 2; index++) {
        app.appendChild(makeSquare());
    }
}

export { init, colors };