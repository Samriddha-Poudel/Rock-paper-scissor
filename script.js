let container = document.querySelector('.container');
let weaponBox =  container.querySelector('.weapon-box'); 
let playerChoicesBox = container.querySelector('.player-choices');
let weapons = weaponBox.querySelectorAll('.weapons div');
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let computerChoices =["Rock", "Paper", "Scissors" ];
let resultBox = container.querySelector(".result-box");
let resultTxt = resultBox.querySelector("h3");
let playagainBtn = resultBox.querySelector("button"); 
let wonValueTxt= document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .draw h3 span");


let won = 0, lost=0 , draw=0;


let outcomes = {
    RockRock: "Draw",
    RockPaper:"Computer",
    RockScissors:"You",
    PaperPaper:"Draw",
    PaperRock:"You",
    PaperScissors:"Computer",
    ScissorsScissors:"Draw",
    ScissorsRock:"Computer",
    ScissorsRock:"Computer",
    ScissorPaper:"You",

    
}

for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener("click", (e) => {
        weaponBox.style.display ="none";
        playerChoicesBox.style.display="block";


        setTimeout(() => {

            playerChoicesBox.classList.add("active");
        }, 1000);

        setTimeout(() => {
            let playerchoices = playerChoicesBox.querySelectorAll("div");
            for(let i =0; i < playerchoices.length; i++){
                playerchoices[i].style.animationPlayState ="paused";
            }

            player.src = e.target.src;


            let randomChoice= computerChoices[Math.floor(Math.random() *
          computerChoices.length)];
          computer.src =`Images/${randomChoice}.png`;


          let userChoice= e.target.parentElement.className;
          let outcomeValue = outcomes[userChoice + randomChoice];



          showResult(outcomeValue);

        }, 3000);
    });
}



let showResult = (result) => {
    
    container.style.height= "415px";
    resultBox.style.display = "block";


    if(result === "You"){
        resultTxt.innerHTML = "Congrats! You won 🎉";
        won++;
        wonValueTxt.innerHTML= won;
    }else if(result === "Computer"){

        resultTxt.innerHTML = "You Lost!";
        lost++;
        lostValueTxt.innerHTML=lost;

    }else{
        resultTxt.innerHTML = "Match Draw!";
        draw++;
        drawValueTxt.innerHTML=draw;
    }

}
