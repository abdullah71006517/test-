function showSurprise() {
    alert("I love you more than words can say! 💖");
}

// Confetti effect
function createConfetti() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1"];
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = Math.random();
        confetti.style.transition = "transform 3s, opacity 3s";
        confetti.style.transform = `translateY(${Math.random() * window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
        document.getElementById("confetti").appendChild(confetti);
    }
}

createConfetti();
