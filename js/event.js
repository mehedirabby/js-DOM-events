
//option-----1
console.log('this is separate file');
function makeRed (){
    document.body.style.backgroundColor = 'red';
}

//option------2----this will be needed most
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = 'blue';
} 


//Option----3-----we will use it sometimes
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';}



    //option----->4
    const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click', makePink);

       function makePink (){
        document.body.style.backgroundColor = 'pink';
       }

       //option---->4(another).
       const makeGreenButton = document.getElementById('make-green');
       makeGreenButton.addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor = 'green';
       })
        

       //option---->4(Final)-----most important!!!!!
       //    document.getElementById('make-goldenRoad').addEventListener('click',function(){})
    document.getElementById('make-goldenRoad').addEventListener('click',function(){
        document.body.style.backgroundColor = 'goldenrod';
    })