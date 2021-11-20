const body = document.querySelector('body');

/*const sliderContainer = document.createElement('div');
body.appendChild(sliderContainer);
sliderContainer.setAttribute('class', 'slider-container');

const sizeSlider = document.createElement('input');
sliderContainer.appendChild(sizeSlider);
sizeSlider.setAttribute('type', 'range');
sizeSlider.setAttribute('min', 8);
sizeSlider.setAttribute('max', 64);
sizeSlider.setAttribute('value', 16);
sizeSlider.setAttribute('id', 'size-slider');*/

const gridContainer = document.querySelector("#grid-container");

let desiredSize = (16*16);

for(i=0; i < desiredSize; ++i){
    const div = document.createElement('div');
    div.setAttribute('class', 'gridBox');
    gridContainer.appendChild(div);
}

function colorChange(){
    document.querySelector('div.gridBox')
    div.setAttribute('class', 'color-added')
}

addEventListener