const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about-content", {
    ...scrollRevealOption,
    interval: 400,
    delay: 300,
    easing: 'ease-in-out',
});
ScrollReveal().reveal(".about-img", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".card-container", {
    ...scrollRevealOption,
    interval: 500,
    origin:"right",
});
ScrollReveal().reveal(".card-content", {
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".feature_list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
});
