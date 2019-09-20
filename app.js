let toggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

toggle.addEventListener('click', ()=> {
    navBar.classList.toggle('active');
    
})