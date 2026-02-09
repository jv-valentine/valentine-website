// Name input 
const nameInput = document.getElementById("nameInput");
const nameSubmit = document.getElementById("nameSubmit");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const greeting = document.getElementById("greeting");

nameSubmit.addEventListener("click", () => {
    let name = nameInput.value || "My Luv";
    greeting.textContent = `Hello, ${name}! 💖`;
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
});

// Click-to-reveal messages
const messageBtn = document.getElementById("messageBtn");
const messages = [
    "I made this just for you! 🌸",
    "I hope it makes you smile 😊",
    "You’re amazing in every way 💕",
    "Valentine's Day wouldn’t be the same without you 💖"
];
let msgIndex = 0;
const messageP = document.getElementById("message");

messageBtn.addEventListener("click", () => {
    if(msgIndex < messages.length-1) {
        msgIndex++;
        messageP.textContent = messages[msgIndex];
    } else {
        step2.classList.add("hidden");
        startHeartGame();
    }
});

// Heart tap game
const heartsContainer = document.getElementById("heartsContainer");
const heartCounter = document.getElementById("heartCounter");
let heartCount = 0;

function startHeartGame() {
    document.getElementById("step3").classList.remove("hidden");
    for(let i=0;i<5;i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heartsContainer.appendChild(heart);

        heart.addEventListener("click", () => {
            heart.remove();
            heartCount++;
            heartCounter.textContent = `${heartCount} / 5`;
            if(heartCount >= 5){
                document.getElementById("step3").classList.add("hidden");
                document.getElementById("step4").classList.remove("hidden");
            }
        });
    }
}

// Yes / No buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", () => {
    noScale -= 0.1;
    yesScale += 0.1;
    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;
    if(noScale <= 0.2) noBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    document.getElementById("step4").classList.add("hidden");
    document.getElementById("finalStep").classList.remove("hidden");
    document.getElementById("bgMusic").play();
});