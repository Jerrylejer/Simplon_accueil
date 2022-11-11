"use strict";

//? BURGER
// Je stocke mes éléments
const burger = document.getElementById('burger');
const burgerBarre1 = document.getElementById('barre_1');
const burgerBarre2 = document.getElementById('barre_2');
const burgerBarre3 = document.getElementById('barre_3');

// Je récupère mes éléments en console => ok
// console.log(burger);
// console.log(burgerBarre1);
// console.log(burgerBarre2);
// console.log(burgerBarre3);

// Au click, j'affecte mes classes CSS et switch à chaque click
burger.addEventListener('click', burgerBarres);
function burgerBarres () {
    burgerBarre2.classList.toggle('opacity');
    burgerBarre3.classList.toggle('rotate2');
    burgerBarre1.classList.toggle('rotate1');
};
