"use strict";

let myPhoto = document.querySelector('.section_profile_photo');

myPhoto.addEventListener('click', function(){
    if (myPhoto.src.slice(-2) == 'ng') {
        document.querySelector('.section_profile_photo').src = "./img/main_photo.jpg"; }
        else {
            document.querySelector('.section_profile_photo').src = "./img/itsme.png";
        }
	
});