

const BUTTON = document.getElementById("danger");

BUTTON.addEventListener("click", () => {
    const DIV = document.createElement("div");
    DIV.setAttribute("id", "boom");
    document.body.appendChild(DIV);
    document.body.style.animation = "break 6s ease-in-out forwards"
    setTimeout(()=> {
        document.body.style.backgroundColor = "black";
        document.body.innerHTML = "";
    }, 3800)

    



})