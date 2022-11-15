let menuBurger = document.querySelector('.menu_burger');
let burgerUl = document.querySelector('.burger_ul');
let linkClose = document.querySelectorAll('.nav_link');
let burgerClosed = document.querySelector('.burger_closed');
let body = document.querySelector('.body_flow');
let isOverflow = null;
console.log('1', burgerUl);
console.log(linkClose);

// menuBurger.addEventListener('click', function(){
// 	menuBurger.classList.toggle('active');
// 	burgerUl.classList.toggle('active');
//     console.log('2', burgerUl);

//     body.classList.toggle('overflow-hidden');

//     burgerClosed = document.querySelector('.burger_closed');
//     const windowOuterWidth = window.outerWidth;
//     console.log(windowOuterWidth);
//     if ((burgerClosed != null) && (windowOuterWidth <= 784)) {
//     linkClose.forEach(navLink => {
//         navLink.addEventListener('click', function() {
//             menuBurger.classList.toggle('active');
// 	        burgerUl.classList.toggle('active');
//             body = document.querySelector('.overflow-hidden')
//             console.log(body);
//             body.classList.toggle('overflow-hidden');
//             try{burgerClosed.classList.toggle('burger_closed');}
//             catch (e) {
//                 console.log('It runs, but you need fix this Monkey code, bro');
//             }
            
//         })
//     })}
// })

    menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
	burgerUl.classList.toggle('active');
    console.log('Here2', burgerUl);


    burgerClosed = document.querySelector('.burger_closed');
    const windowOuterWidth = window.outerWidth;
    console.log('windowWidth: ', windowOuterWidth);
    if ((burgerClosed != null) && (windowOuterWidth <= 784)) {
    linkClose.forEach(navLink => {
        navLink.addEventListener('click', function() {
           
            menuBurger.classList.toggle('active');
	        burgerUl.classList.toggle('active');;
            console.log('bodyCheck', body);
            if (body !== null) {
            
            try{burgerClosed.classList.toggle('burger_closed');}
            catch (e) {
                console.log('It runs, but you need fix this Monkey code, bro');
            }}
            
        })
    })}
}) 