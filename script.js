console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText == boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{

    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', ()=>{
        console.log("clicked");
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })

})

//add on click listener to reset button

reset.addEventListener('click', ()=>{
    let = boxtexts = document.querySelectorAll(".box-text");
    Array.from(boxtexts).forEach(element => 
        {
            element.innerText = ""
        });
        isgameover = false;
        turn = "X"
        if(isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
        document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "0px";

})

