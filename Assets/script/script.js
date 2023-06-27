let box = document.querySelectorAll(".box");
let turn = document.getElementById("turn");
let sound = new Audio("Assets/sound/Click.wav");
let win = document.getElementById("win");
let restart = document.getElementById("restart");
let img = document.querySelector(".img");
let ground = document.querySelector(".ground-box");
let clap = new Audio("Assets/sound/claps.mp3");
clap.loop = true;
console.log(box);
let isXTurn = true;
let count = 0;
let winX = false;
let winY = false;
box.forEach((element) => {



    element.addEventListener("click", () => {


        console.log(element);
        if (element.innerHTML == "") {
            isXTurn ? (element.innerHTML = "X") : (element.innerHTML = "O");
            sound.play();


            if (isXTurn) {
                isXTurn = false;
                turn.innerText = "Turn : Y";
            } else {
                isXTurn = true;
                turn.innerText = "Turn : X";
            }








            if (
                (winX =
                    (box[0].innerHTML == "X" &&
                        box[1].innerHTML == "X" &&
                        box[2].innerHTML == "X")) ||
                (winY =
                    (box[0].innerHTML == "O" &&
                        box[1].innerHTML == "O" &&
                        box[2].innerHTML == "O"))) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");

                img.style.display = "inline"
                dis();
                clap.play();
                console.log(winY);
            } else if (
                (winX =
                    (box[0].innerHTML == "X" &&
                        box[3].innerHTML == "X" &&
                        box[6].innerHTML == "X")) ||
                (winY =
                    box[0].innerHTML == "O" &&
                    box[3].innerHTML == "O" &&
                    box[6].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline"
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[0].innerHTML == "X" &&
                        box[4].innerHTML == "X" &&
                        box[8].innerHTML == "X")) ||
                (winY =
                    box[0].innerHTML == "O" &&
                    box[4].innerHTML == "O" &&
                    box[8].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline";
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[2].innerHTML == "X" &&
                        box[4].innerHTML == "X" &&
                        box[6].innerHTML == "X")) ||
                (winY =
                    box[2].innerHTML == "O" &&
                    box[4].innerHTML == "O" &&
                    box[6].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline";
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[3].innerHTML == "X" &&
                        box[4].innerHTML == "X" &&
                        box[5].innerHTML == "X")) ||
                (winY =
                    box[3].innerHTML == "O" &&
                    box[4].innerHTML == "O" &&
                    box[5].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline";
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[2].innerHTML == "X" &&
                        box[5].innerHTML == "X" &&
                        box[8].innerHTML == "X")) ||
                (winY =
                    box[2].innerHTML == "O" &&
                    box[5].innerHTML == "O" &&
                    box[8].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline"
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[6].innerHTML == "X" &&
                        box[7].innerHTML == "X" &&
                        box[8].innerHTML == "X")) ||
                (winY =
                    box[6].innerHTML == "O" &&
                    box[7].innerHTML == "O" &&
                    box[8].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline";
                dis();
                clap.play();
            } else if (
                (winX =
                    (box[1].innerHTML == "X" &&
                        box[4].innerHTML == "X" &&
                        box[7].innerHTML == "X")) ||
                (winY =
                    box[1].innerHTML == "O" &&
                    box[4].innerHTML == "O" &&
                    box[7].innerHTML == "O")) {
                winX
                    ?
                    (win.innerText = "Congratulation X Won The Game") :
                    (win.innerText = "Congratulation Y Won The Game");
                img.style.display = "inline"
                dis();
                clap.play();
            } else {
                if (box[0].innerHTML != "" && box[1].innerHTML != "" && box[2].innerHTML != "" && box[3].innerHTML != "" && box[4].innerHTML != "" && box[5].innerHTML != "" && box[6].innerHTML != "" && box[7].innerHTML != "" && box[8].innerHTML != "") {
                    win.innerText = "Match Tie";
                }
            }












        } else {

        }







    });
});

function dis() {
    ground.style.display = "none";
    turn.style.display = "none";
}
restart.addEventListener("click", () => {
    winX = false;
    winY = false;
    isXTurn = true;
    clap.pause();
    turn.style.display = "flex";

    img.style.display = "none";
    ground.style.display = "grid";
    turn.innerText = "Turn : X";
    win.innerText = ""
    box.forEach((e) => {
        e.innerText = "";

    });
});