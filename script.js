let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset");
let winMsg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGamebtn = document.getElementById("newBtn");
let Xscore=document.getElementById("scoreX");
let Oscore=document.getElementById("scoreO");


let turnO=true;
let count=0;
let ScoreX=0;
let ScoreO=0;
const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = ()=>{
    count=0;
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")
    
};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("Button was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="black";
            turnO=false;

        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
       
        // checkWinner();
    });


});

const gameDraw =()=>{
    winMsg.innerText="Game is Draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }

};

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};

const  showWinner = (winner) =>{
    winMsg.innerText=`Congratultions!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    if(winner=="X"){
        ScoreX++;
        Xscore.innerText=`${ScoreX}`;
    }
    else{
        ScoreO++;
        Oscore.innerText=`${ScoreO}`;
        
    }


};

const checkWinner = () => {

    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        // console.log(pos1);
        let pos2 = boxes[pattern[1]].innerText;
        // console.log(pos2);
        let pos3 = boxes[pattern[2]].innerText.trim();

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                
                showWinner(pos1);
               
    }
}
    }

};


newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



