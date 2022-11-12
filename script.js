'use strict';

//? BURGER et MENU
// Je stocke mes éléments
const burger = document.getElementById('burger');
const burgerBarre1 = document.getElementById('barre_1');
const burgerBarre2 = document.getElementById('barre_2');
const burgerBarre3 = document.getElementById('barre_3');
const menu = document.getElementById('nav__mobile');

// Au click, j'affecte mes classes CSS et toggle au click
burger.addEventListener('click', burgerBarres);
function burgerBarres() {
    // Animation sur le Burger
    burgerBarre2.classList.toggle('opacity');
    burgerBarre3.classList.toggle('rotate2');
    burgerBarre1.classList.toggle('rotate1');
    // Animation du menu
    menu.classList.toggle('nav__mobile--show');
}

// Essais de récupération des éléments en console => ok
// console.log(burger);
// console.log(burgerBarre1);
// console.log(burgerBarre2);
// console.log(burgerBarre3);

//? SLIDE TEMOIGNAGES => NAVIGATION AU CLICK
// Je stocke mes éléments
// Les encarts de témoignages
const temoignage1 = document.getElementById('temoignage1');
const temoignage2 = document.getElementById('temoignage2');
const temoignage3 = document.getElementById('temoignage3');
// Les numéros à cliquer
const numero1 = document.getElementById('temoignage_un');
const numero2 = document.getElementById('temoignage_deux');
const numero3 = document.getElementById('temoignage_trois');
// Les icones de navigation
const precedent = document.getElementById('temoignage_precedent');
const suivant = document.getElementById('temoignage_suivant');

// Essais de récupération des éléments en console => ok
// console.log(temoignage1);
// console.log(temoignage2);
// console.log(temoignage3);
// console.log(numero1);
// console.log(numero2);
// console.log(numero3);
// console.log(precedent);
// console.log(suivant);

// Le temoignage 02 doit être visible par défaut => Les 2 autres doivent être en class displayoff
// Un listener au click sur l'icône "précédent" qui appelle une fonction "temoignagePrecedent"
// Un listener au click sur l'icône "suivant" qui appelle une fonction "temoignageSuivant"
// ces fonctions suivant le temoignage affiché, détermine celui à afficher au click et ceux à cacher
precedent.addEventListener('click', temoignagePrecedent);
function temoignagePrecedent() {
    if (temoignage2.classList.contains('displayon')) {
        temoignage2.classList.remove('displayon');
        temoignage2.classList.add('displayoff');
        numero2.classList.remove('gras');
        temoignage1.classList.remove('displayoff');
        temoignage1.classList.add('displayon');
        numero1.classList.add('gras');
    } else if (temoignage3.classList.contains('displayon')) {
        temoignage3.classList.remove('displayon');
        temoignage3.classList.add('displayoff');
        numero3.classList.remove('gras');
        temoignage2.classList.remove('displayoff');
        temoignage2.classList.add('displayon');
        numero2.classList.add('gras');
    }
}

suivant.addEventListener('click', temoignageSuivant);
function temoignageSuivant() {
    if (temoignage2.classList.contains('displayon')) {
        temoignage2.classList.remove('displayon');
        temoignage2.classList.add('displayoff');
        numero2.classList.remove('gras');
        temoignage3.classList.remove('displayoff');
        temoignage3.classList.add('displayon');
        numero3.classList.add('gras');
    } else if (temoignage1.classList.contains('displayon')) {
        temoignage1.classList.remove('displayon');
        temoignage1.classList.add('displayoff');
        numero1.classList.remove('gras');
        temoignage2.classList.remove('displayoff');
        temoignage2.classList.add('displayon');
        numero2.classList.add('gras');
    }
}

// Idem au click direct sur les numéros des articles
numero1.addEventListener('click', numeroSwitch1);
function numeroSwitch1() {
    temoignage1.classList.remove('displayoff');
    temoignage1.classList.add('displayon');
    numero1.classList.add('gras');
    temoignage2.classList.remove('displayon');
    temoignage2.classList.add('displayoff');
    numero2.classList.remove('gras');
    temoignage3.classList.remove('displayon');
    temoignage3.classList.add('displayoff');
    numero3.classList.remove('gras');
}

numero2.addEventListener('click', numeroSwitch2);
function numeroSwitch2() {
    temoignage2.classList.remove('displayoff');
    temoignage2.classList.add('displayon');
    numero2.classList.add('gras');
    temoignage1.classList.remove('displayon');
    temoignage1.classList.add('displayoff');
    numero1.classList.remove('gras');
    temoignage3.classList.remove('displayon');
    temoignage3.classList.add('displayoff');
    numero3.classList.remove('gras');
}

numero3.addEventListener('click', numeroSwitch3);
function numeroSwitch3() {
    temoignage3.classList.remove('displayoff');
    temoignage3.classList.add('displayon');
    numero3.classList.add('gras');
    temoignage1.classList.remove('displayon');
    temoignage1.classList.add('displayoff');
    numero1.classList.remove('gras');
    temoignage2.classList.remove('displayon');
    temoignage2.classList.add('displayoff');
    numero2.classList.remove('gras');
}
