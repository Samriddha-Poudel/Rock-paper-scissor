let container = document.querySelector('.container');
let weaponBox =  container.querySelector('.weapon-box'); 
let playerChoicesBox = container.querySelector('.player-choices');
let weapons = weaponBox.querySelectorAll('.weapons div');
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let computerChoices =["Rock", "Paper", "Scissors" ];

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

        }, 3000)
    });
}