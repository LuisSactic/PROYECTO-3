const colors = ["green", "red", "grey", "pink", "orange", "white", "yellow", "purple", "blue", "silver", "Skyblue", "violet", "Tan", "Coral", "Teal", "Magenta", "Navy", "Olive", "Plum", ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
