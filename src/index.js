const getBackgroundFunction = () => {
    let index = 0;

    return () => ['red', 'blue', 'black'][index++ % 3]
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
    `
}

document.appendChild(makeSquare());
document.appendChild(makeSquare());
document.appendChild(makeSquare());
document.appendChild(makeSquare());
document.appendChild(makeSquare());