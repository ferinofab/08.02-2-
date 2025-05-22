let firstLink = document.querySelector("[ data-link-signIn]");

let btnRegister = document.querySelector("[data-btn-register]");
let btnLogin = document.querySelector("[data-btn-login]");



let span_close = document.getElementById("close_register");
let span_close_login = document.getElementById("close");

let signIn = document.querySelector(".signIn");
let register = document.querySelector(".register");





function openModalRegister() {
    signIn.style = "display: none;";
    register.style = "display: flex;";
}

function closeModalRegister() {
    signIn.style = "display: none;";
    register.style = "display: none;";
}


function aa() {
    closeModalRegister;
    openModalLogin;
}

function openModalLogin() {
    register.style = "display: none;";
    signIn.style = "display: flex;"
}

function closeModalLogin() {
    signIn.style.display = "none";
};

firstLink.addEventListener("click", openModalLogin)
btnRegister.addEventListener("click", openModalRegister);
btnLogin.addEventListener("click", openModalLogin);
span_close.addEventListener("click", closeModalRegister);
span_close_login.addEventListener("click", closeModalLogin);




window.addEventListener("click", (e) => {
    if(e.target === register) {
        closeModalRegister();
    }
    else if(e.target === signIn){
        closeModalLogin();
    }
})

window.onkeydown = (event) =>{
    if(event.key === "Escape"){
        closeModalLogin();
        closeModalRegister();
    }
};