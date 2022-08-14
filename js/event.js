
//option-----1
console.log('this is separate file');
function makeRed (){
    document.body.style.backgroundColor = 'red';
}

//option------2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = 'blue';
} 


//Option----3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';}