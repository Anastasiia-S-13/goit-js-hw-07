const userName = document.querySelector("#name-input");
userName.addEventListener("input", addUserName);

const resultText = document.querySelector("#name-output");
const defaultText = resultText.textContent;

function addUserName(event) {
    const userInput = event.target.value;
    if (userInput.trim() !== "") {
        resultText.textContent = userInput.trim();
    } else {
        return resultText.textContent = defaultText;
    }
}

userName.classList.add("name-input");
const greetings = document.querySelector("h1");
greetings.classList.add("title-greetings");