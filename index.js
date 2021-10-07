const menuButton = document.getElementById("menu-icon");
const mainnav = document.querySelector(".main-nav");
menuButton.addEventListener(
    "click",
    () => {
        mainnav.classList.toggle("expanded");
    },
    false
);
// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove("expanded");
};
