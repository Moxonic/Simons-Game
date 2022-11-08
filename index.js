console.log('JS UP!')

const green = document.querySelector(".green");
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

green.addEventListener("click", playOnClick);
red.addEventListener("click", playOnClick);
yellow.addEventListener("click", playOnClick);
blue.addEventListener("click", playOnClick);
let turnColorArray = [];
let gameColorArray = [];
let colors = ['green','red', 'yellow', 'blue']

    addRandomColor();
    console.log('firstaddedColor:',gameColorArray);
    playGameColorArray();

    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function playGameColorArray(){
        for (let i = 0; i <gameColorArray.length; i++){
            
            let selectedSoundLocation = './sounds/'+gameColorArray[i]+'.mp3'; 
            let elementPlayer = new Audio(selectedSoundLocation);
            elementPlayer.play();  
            $('.'+gameColorArray[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            await TimeRanges(3000);
        }
    }
    
    function playOnClick(e) {
        let pressedButtonColor = e.target.classList[1];
        let selectedSoundLocation = './sounds/'+pressedButtonColor+'.mp3' 
        let elementPlayer = new Audio(selectedSoundLocation);
        elementPlayer.play();
        $('.'+pressedButtonColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        turnColorArray.push(pressedButtonColor);
        compare();
        addRandomColor();
        console.log('gameColorArray after new',gameColorArray);
        return turnColorArray;
    }

    function addRandomColor(){
        let randomNumber= Math.floor(Math.random()*4);
        let randomColor= colors[randomNumber];
        gameColorArray.push(randomColor);

    return gameColorArray;
    }

    function compare(){
        if(turnColorArray[turnColorArray.length-1] === gameColorArray[gameColorArray.length-1]){
            $('h1').html('Great!!!');
            setTimeout(playGameColorArray, 1000);
        } else {
            $('h1').html('ZONK!!!');
        }
    }

    function repeater(){
        /* play all array items with 1000 delay one after the other */
        gameColorArray.map
    }

