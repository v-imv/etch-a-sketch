const gridContainer = document.querySelector("#grid-container");


let userInput;
do {
userInput = prompt("Enter A Number Between 1-100");
}  while (!(userInput > 0 && userInput < 101));
if (userInput > 0 && userInput < 101) {
    gridCreate();
}
console.log(userInput);

function gridCreate(){
for(let i=0; i < userInput; ++i){
    let parent = document.createElement('div');
    parent.classList.add('parent');
    gridContainer.appendChild(parent);

    for(let x=0; x < userInput; ++x){
    let child = document.createElement('div');
    child.classList.add('child');
    child.addEventListener('mouseover', () => {
        child.classList.add('add-color');
    })
    parent.appendChild(child);
    }

}
}