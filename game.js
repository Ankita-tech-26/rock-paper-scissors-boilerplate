

const gameContainer = document.querySelector(".main_container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".image_option"),
  userScoreDisplay = document.getElementById("userScore"),
  cpuScoreDisplay = document.getElementById("cpuScore");
let userScore = 0;
let cpuScore = 0;


optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "rock-hand.png";
    result.textContent = "Wait...";
    
    optionImages.forEach((image2, index2) => {
     
      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      
      let imageSrc = e.target.querySelector("img").src;
      
      userResult.src = imageSrc;
      
      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = ["rock-hand.png", "paper-hand.png", "scissors-hand.png"];

      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
     
      let userValue = ["R", "P", "S"][index];
     
      let outcomes = {
        RR: "Draw",
        RP: "Comp",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "Comp",
        SS: "Draw",
        SR: "Comp",
        SP: "You",
      };
      
      let outComeValue = outcomes[userValue + cpuValue];
     
      result.textContent = userValue === cpuValue ? "It's a Tie" : `${outComeValue} Won!!`;
      
      
      if (userValue === cpuValue) {
        
      } else if (outComeValue === "You") {
        userScore += 1;
      } else {
        cpuScore += 1;
      }

    
      
      // Display scores
      userScoreDisplay.textContent = userScore;
      cpuScoreDisplay.textContent = cpuScore;
    }, 2500);
  });
});
