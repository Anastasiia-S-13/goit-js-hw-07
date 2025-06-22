const userName = document.querySelector("#name-input");
userName.addEventListener("input", addUserName);

const resultText = document.querySelector("#name-output");

function addUserName(event) {
    const userInput = event.target.value;
    if (userInput.trim() !== "") {
        resultText.textContent = userInput.trim();
    } else {
        resultText.textContent = "Anonymous";
    }
}

userName.classList.add("name-input");
const greetings = document.querySelector("h1");
greetings.classList.add("title-greetings");