// Select all boxes 

let boxes = document.querySelectorAll('.box');

// select reset button 

let resetbtn = document.querySelector('#reset-btn');

// new game btn

let newgamebtn = document.querySelector("#new-btn");

// message container

let msgcontainer = document.querySelector(".msg-container");

// winner mesg

let msg = document.querySelector("#msg");

// palyer turn 

let turnO = true ; // playerX or playerO

//storing winning patterns 

const winPatterns = [
    [0,1,2], // horizontal 
    [3,4,5],
    [6,7,8],
    [0,3,6], // vertical 
    [1,4,7],
    [2,5,8],
    [0,4,8], // diagonal 
    [2,4,6]
];

// Adding either X or O 
boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
{
    
   if(turnO)
   {
    box.innerText = "O"; //turn for O
    turnO = false;
   }
   else
   {
    box.innerText = "X"; //turn for X
    turnO= true;
   }
   box.disabled = true;


   checkWinner();
})

})


// Reset 
const resetGame = () =>
{
    turnO = true;
    enablebleboxes();
    msgcontainer.classList.add("hide");
}

// for desabling all the boxes after winning the game
const disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

// for enabling all the boxes after winning the game
const enablebleboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>
{
msg.innerText = `Congratulations , winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();

}

 const checkWinner = () =>
 {
    for(let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("Winner");

                showWinner(pos1);
            }
        }
    }
 }

newgamebtn.addEventListener("click",resetGame);
resetGame.addEventListener("click",resetGame);


