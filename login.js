document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
});
//validating user input
var form = document.getElementById("login");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

function validate() {
    var username = document.getElementById("username").value;
    console.log(username);
    var password = document.getElementById("password").value;
    console.log(password);
    if (username == "Wendy" && password == "user") {
        alert("You are logged in.");
        window.location.href = "member.html";
        // return true;
    } else {
        alert("Invalid userName and Password")
    };
}