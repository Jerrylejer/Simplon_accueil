"use strict";

//? BURGER
// Je stocke mes éléments
const burger = document.getElementById('burger');
const burgerBarre2 = document.getElementById('barre_2');

// Je récupère mes éléments en console +> ok
// console.log(burger);
// console.log(burgerBarre1);
// console.log(burgerBarre2);
// console.log(burgerBarre3);

// Au click ma barre2 disparait
burger.addEventListener('click', burgerBarres);
// Au click les barres 1 fait une rotation
function burgerBarres () {
    //! Le stockage des ID ne fonctionne pas sauf pour burgerBarre2
    // Barre du dessus => rotate décale la barre en bas sur l'axe Y => utilisation de translate pour la garder sur le même plan
    document.getElementById('barre_1').style.transform = "translateY(10px) rotate(45deg)";
    document.getElementById('barre_1').style.opacity = "1";
    document.getElementById('barre_1').style.transition = "1s";
    // Barre du milieu
    burgerBarre2.style.opacity = '0';
    burgerBarre2.style.transition = '1s';
    // Barre du dessous => rotate décale la barre en bas sur l'axe Y => utilisation de translate pour la garder sur le même plan
    document.getElementById('barre_3').style.transform = "translateY(-10px) rotate(-45deg)";
    document.getElementById('barre_3').style.opacity = "1";
    document.getElementById('barre_3').style.transition = "1s";
};
