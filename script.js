function play(userChoice) {
  const compOptions = ["r", "p", "s"];
  const compChoice = compOptions[Math.floor(Math.random() * 3)];
  const resultText = document.getElementById("result");

  let outcome = "";

  if (userChoice === compChoice) {
    outcome = "It's a draw~ 🧸 You both chose the same!";
    document.getElementById("draw-sound").play();
  } else if (
    (userChoice === "r" && compChoice === "s") ||
    (userChoice === "p" && compChoice === "r") ||
    (userChoice === "s" && compChoice === "p")
  ) {
    outcome = "You win, Congrats!! 🌈✨";
    document.getElementById("win-sound").play();
  } else {
    outcome = "Oh no, you lost 😢 Try again~!";
    document.getElementById("lose-sound").play();
  }

  const emoji = { r: "✊", p: "🧻", s: "✌️" };

  resultText.textContent = `You chose ${emoji[userChoice]}, computer chose ${emoji[compChoice]}. ${outcome}`;
}
