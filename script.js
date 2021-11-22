const body = document.querySelector('body');

const gridContainer = document.querySelector("#grid-container");

function gridCreation(num){
let desiredSize = (num*num);
let boxDimensions = Math.sqrt(250000/desiredSize);

for(i=0; i < desiredSize; ++i){
    const div = document.createElement('div');
    div.classList.add('gridBox');
    div.setAttribute('style', `border: 1px solid rgb(70, 70, 70); height: ${boxDimensions}px; width: ${boxDimensions}px;`);
    div.addEventListener('mouseover', () => {
        div.classList.add('add-color');
    })
    gridContainer.appendChild(div);
}
}

gridCreation(32);

const gridButton = document.createElement('button');
body.appendChild(gridButton);
gridButton.setAttribute('class', 'buttonStyle');
gridButton.textContent = 'Clear & Select Grid Size';
gridButton.addEventListener('click', () => {

})