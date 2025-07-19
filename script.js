//winning patterns
//[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

let button=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset-btn");
let newGamebtn=document.querySelector("#new-game");
let winnerText=document.querySelector(".text");
let messageBox=document.querySelector(".message-box");
let count=0;
let winner=false;//no winnner
let turnO=true;//turn of player O
let winingP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=() => {
    turnO=true;
    enable();
    messageBox.classList.add("hide")
}

const disable=() => {
    for(let btn of button){
        btn.disabled=true;
    }
}
const enable=() => {
    for(let btn of button){
        btn.disabled=false;
        btn.textContent="";
    }
}
const draw=()=>{
        winnerText.textContent="IT'S A DRAW";
        messageBox.classList.remove("hide");
        disable();
   
}

button.forEach(btn => {
    btn.addEventListener("click",function(){
        if(turnO){
        btn.textContent="O"
        btn.style.color="red"
        turnO=false;
        }else{
        btn.textContent="X"
        turnO=true
        }
        btn.disabled=true;
        count++;

        if(count===9 && !winner){
            draw()
        }
        result();
    })  
});

const result=() => {
    for(let pattern of winingP){
        let pos1=button[pattern[0]].textContent;
        let pos2=button[pattern[1]].textContent;
        let pos3=button[pattern[2]].textContent;
        
        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1)
                winner=true;//we have winner
                winnerPlayer(pos1);
            }
        }
    }        
}
const winnerPlayer=(win) =>{
    winnerText.textContent=`Congratulation, winner is ${win}`;
    messageBox.classList.remove("hide");
    disable();   
}
reset.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);

