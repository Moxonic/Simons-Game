console.log('JS UP!')

const green = document.querySelector(".green");
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
green.addEventListener("click", playOnClick);
red.addEventListener("click", playOnClick);
yellow.addEventListener("click", playOnClick);
blue.addEventListener("click", playOnClick);

let gameOver=false;
let turnColorArray = [];
let gameColorArray = [];
let colors = ['green','red', 'yellow', 'blue']
let level = 0;

addRandomColor();
console.log('first given:', gameColorArray);
console.log('players Array:', turnColorArray);
    

    document.querySelector('.go_button').addEventListener('click',startGame);
    function startGame(){
        $('.go_button').addClass('invisible');
        playNewColor();
    }
    

    function playNewColor(){
            let selectedSoundLocation = './sounds/'+gameColorArray[gameColorArray.length-1]+'.mp3'; 
            let elementPlayer = new Audio(selectedSoundLocation);
            elementPlayer.play();  
            $('.'+gameColorArray[gameColorArray.length-1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    
    function playOnClick(e) {
       /*  playing the button */
        let pressedButtonColor = e.target.classList[1];
        let selectedSoundLocation = './sounds/'+pressedButtonColor+'.mp3' 
        let elementPlayer = new Audio(selectedSoundLocation);
        elementPlayer.play();
        $('.'+pressedButtonColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        turnColorArray.push(pressedButtonColor);
        console.log('turnColorArray:',turnColorArray);
        compare();

        if(turnColorArray.length===gameColorArray.length && gameOver===false){
            turnColorArray=[];
            setTimeout(addRandomColor,1000);
            setTimeout(playNewColor, 1000);
            $('h2').html('Level:'+ level++);
        };
/*         only addRandomColor when turnColorArray is filled up
 */       
        console.log('gameColorArray:',gameColorArray);
    }

    function addRandomColor(){
        let randomNumber= Math.floor(Math.random()*4);
        let randomColor= colors[randomNumber];
        gameColorArray.push(randomColor);
    return gameColorArray;
    }

    function compare(){
      /*   is each color in the turn array the same as the one in the postion in the game array? */
        if(turnColorArray[turnColorArray.length-1] === gameColorArray[turnColorArray.length-1]){
            $('h1').html('Repeat the sequence and add the new color');
            console.log('added and lastinArray are the same');
        }else{
            $('h1').html('GAME OVER');
            gameOver=true;
            let failsound = new Audio ('./sounds/wrong.mp3')
            failsound.play();
            setTimeout(reload, 2000)
            function reload(){
                window.location.reload();
            };
        };
        
        if(turnColorArray.length===gameColorArray.length){
        function reset(){
            $('h1').html('Great!');
            console.log('gameArray.length has been reached')};
        };
    };


