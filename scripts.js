const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById('nav-links');
 

toggleMenu.addEventListener("click", () => {
    menu.classList.add('active');
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove('active');
});