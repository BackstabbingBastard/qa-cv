"use strict";

let menuBurger = document.querySelector('.menu_burger');
let burgerUl = document.querySelector('.burger_ul');
let linkClose = document.querySelectorAll('.nav_link');
// console.log(linkClose);

menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
	burgerUl.classList.toggle('active');
});

    linkClose.forEach(navLink => {
        navLink.addEventListener('click', function() {
            if (menuBurger.classList.contains('active')) {
            menuBurger.classList.toggle('active');
	        burgerUl.classList.toggle('active');}
        });
    });