function openBurger(){
    const burgerMenu = document.getElementById("burger-menu");
    
    if (burgerMenu.style.display == "none") {
        burgerMenu.style.display = "flex";
    } else {
        burgerMenu.style.display = "none";
    }
}



const more = document.getElementById("more");
const moreclose = document.getElementById("moreclose");
const arrow = document.getElementById("arrow");

const hidelis = [
    document.getElementById("hide1"),
    document.getElementById("hide2"),
    document.getElementById("hide3"),
    document.getElementById("hide4")
];
function toggleDisplay(hidelis) {
    hidelis.forEach(element => {
        if (element.style.display === "flex") {
            element.style.display = "none";
            moreclose.textContent = "Еще";
        } else if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "flex";
            moreclose.textContent = "Закрыть";
        }
    });
}

more.addEventListener("click", () => {
    toggleDisplay(hidelis);
});




