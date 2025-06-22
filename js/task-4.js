const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

const input = document.querySelector("input");
input.addEventListener("focus", inputInFocus);

function inputInFocus(event) {
    input.setAttribute("placeholder", "Type area")
}

input.addEventListener("blur", inputOutFocus);
function inputOutFocus(event) {
    input.removeAttribute("placeholder");
}

function formSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }

    if (elements.email.value !== "" && elements.password.value !== "") {
        console.log(info);
        event.target.reset();
    } else {
        alert("All form fields must be filled in");
    }
}


