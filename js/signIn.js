let link = document.querySelector("[ data-link-signIn]");
const span = document.getElementById("close");
let modal = document.querySelector(".signIn");


link.addEventListener("click", openModal);
span.addEventListener("click", closeModal);


function openModal() {
    modal.style = "display: flex;"
}

function closeModal() {
    modal.style.display = "none";
};

window.addEventListener("click", (event) =>{
    if(event.target === modal){
        closeModal();
    }
});

window.onkeydown = (event) =>{
    if(event.key === "Escape"){
        closeModal();
    }
};