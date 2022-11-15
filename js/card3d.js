const sertificate = document.querySelector('.sertificate');
sertificate.addEventListener('mousemove', rotate);
sertificate.addEventListener('mouseout', defaultPos);



function rotate(event) {
    const sertificateItem = this.querySelector('.sertificate-item');
    const halfHeight =  sertificateItem.offsetHeight / 2;

    sertificateItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg)' + 'scale(1.2)'; 
    // sertificateItem.style.bottom = '8px';
    sertificateItem.style.left = '10px';
    sertificateItem.style.boxShadow = '2px 2px 2px 3px black';
    // sertificateItem.style.backgroundSize = '180px';

}

async function defaultPos(event) {
    const sertificateItem = this.querySelector('.sertificate-item');
    sertificateItem.style.transform = 'rotateY(0deg)';
    sertificateItem.style.bottom = '0px';
    sertificateItem.style.boxShadow = 'none';

    // sertificateItem.style.backgroundSize = '150px';

    // sertificateItem.style.width = '150px'; 
    // sertificateItem.style.height = '150px'; 

}