const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const statusBox = document.querySelector(".status");
const resetButton = document.querySelector(".reset");

let playerTurn = "1"

box1.addEventListener("click", event => {
    if (playerTurn === "1" && box1.textContent === "") {
        box1.textContent = "X";
        checkForWinX();
        // if ( (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
        //     statusBox.textContent = "Player 1 Wins!";
        //     gameOver();
        //     playerTurn = "0";
        // } else {
        // statusBox.textContent = "Player 2's Turn";
        // playerTurn = "2"; 
        // }
    } else if (playerTurn === "2" && box1.textContent === "") {
        box1.textContent = "O";
        checkForWinO();
          
    }
})

box2.addEventListener("click", event => {
    if (playerTurn === "1" && box2.textContent === "") {
        box2.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box2.textContent === "") {
        box2.textContent = "O";
        checkForWinO();
            
    }
})


box3.addEventListener("click", event => {
    if (playerTurn === "1" && box3.textContent === "") {
        box3.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box3.textContent === "") {
        box3.textContent = "O";
        checkForWinO();
            
    }
})

box4.addEventListener("click", event => {
    if (playerTurn === "1" && box4.textContent === "") {
        box4.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box4.textContent === "") {
        box4.textContent = "O";
        checkForWinO();    
    }
})

box5.addEventListener("click", event => {
    if (playerTurn === "1" && box5.textContent === "") {
        box5.textContent = "X";
        checkForWinX(); 
    } else if (playerTurn === "2" && box5.textContent === "") {
        box5.textContent = "O";
        checkForWinO();
            
    }
})

box6.addEventListener("click", event => {
    if (playerTurn === "1" && box6.textContent === "") {
        box6.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box6.textContent === "") {
        box6.textContent = "O";
        checkForWinO();
            
    }
})

box7.addEventListener("click", event => {
    if (playerTurn === "1" && box7.textContent === "") {
        box7.textContent = "X";
       checkForWinX();
    } else if (playerTurn === "2" && box7.textContent === "") {
        box7.textContent = "O";
        checkForWinO();
          
    }
})

box8.addEventListener("click", event => {
    if (playerTurn === "1" && box8.textContent === "") {
        box8.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box8.textContent === "") {
        box8.textContent = "O";
        checkForWinO();
            
    }
})

box9.addEventListener("click", event => {
    if (playerTurn === "1" && box9.textContent === "") {
        box9.textContent = "X";
        checkForWinX();
    } else if (playerTurn === "2" && box9.textContent === "") {
        box9.textContent = "O";
        checkForWinO();           
    }
})


// function checkGameState () {
//     if ( box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
//         statusBox.textContent = "Player 1 Wins!";
//         return true;
//     } else return false;
// }

function reset() {
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    box9.textContent = "";
    document.getElementById("box1").style.color = "black";
    document.getElementById("box2").style.color = "black";
    document.getElementById("box3").style.color = "black";
    document.getElementById("box4").style.color = "black";
    document.getElementById("box5").style.color = "black";
    document.getElementById("box6").style.color = "black";
    document.getElementById("box7").style.color = "black";
    document.getElementById("box8").style.color = "black";
    document.getElementById("box9").style.color = "black";
    document.getElementById("status").style.color = "black";
    document.getElementById("status").style.fontWeight = "normal";
    statusBox.textContent = "Player 1's Turn"
    playerTurn = "1"


}

function checkForWinX() {
    if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
        statusBox.textContent = "Player 1 Wins!";
        gameOver();
        playerTurn = "0";
    } else {
        playerTurn = "2";
        statusBox.textContent = "Player 2's Turn"
    }
     
}

function checkForWinO() {
    if ((box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") || (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") || (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") || (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") || (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") || (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O")) {
        statusBox.textContent = "Player 2 Wins!";
        gameOver();
        playerTurn = "0";
    } else {
        playerTurn = "1";
        statusBox.textContent = "Player 1's Turn"
    }
}

function gameOver() {
    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box2").style.color = "red";
        document.getElementById("box3").style.color = "red";
    } else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
        document.getElementById("box4").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box6").style.color = "red";
    } else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
        document.getElementById("box7").style.color = "red";
        document.getElementById("box8").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box4").style.color = "red";
        document.getElementById("box7").style.color = "red";
    } else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
        document.getElementById("box2").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box8").style.color = "red";
    } else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
        document.getElementById("box3").style.color = "red";
        document.getElementById("box6").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") {
        document.getElementById("box3").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box7").style.color = "red";
    } else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box2").style.color = "red";
        document.getElementById("box3").style.color = "red";
    } else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") {
        document.getElementById("box4").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box6").style.color = "red";
    } else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") {
        document.getElementById("box7").style.color = "red";
        document.getElementById("box8").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box4").style.color = "red";
        document.getElementById("box7").style.color = "red";
    } else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") {
        document.getElementById("box2").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box8").style.color = "red";
    } else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") {
        document.getElementById("box3").style.color = "red";
        document.getElementById("box6").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") {
        document.getElementById("box1").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box9").style.color = "red";
    } else if (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O") {
        document.getElementById("box3").style.color = "red";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box7").style.color = "red";
    }
    document.getElementById("status").style.color = "red";
    document.getElementById("status").style.fontWeight = "bold";

}


resetButton.addEventListener("click", event => {
    reset();
})