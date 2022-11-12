"use strict";

// Essais de récupération des éléments en console => ok
// console.log(burger);
// console.log(burgerBarre1);
// console.log(burgerBarre2);
// console.log(burgerBarre3);

//? BURGER et MENU
// Je stocke mes éléments
const burger = document.getElementById('burger');
const burgerBarre1 = document.getElementById('barre_1');
const burgerBarre2 = document.getElementById('barre_2');
const burgerBarre3 = document.getElementById('barre_3');
const menu = document.getElementById('nav__mobile');

// Au click, j'affecte mes classes CSS et toggle au click
burger.addEventListener('click', burgerBarres);
function burgerBarres () {
    // Animation sur le Burger
    burgerBarre2.classList.toggle('opacity');
    burgerBarre3.classList.toggle('rotate2');
    burgerBarre1.classList.toggle('rotate1');
    // Animation du menu
   menu.classList.toggle('nav__mobile--show')
};
