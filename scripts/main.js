


let logos = ["styles/img/IBM_logo®_pos_blue60_RGB.png", "styles/img/IBM_rebus_h_pos_black_RGB.png", "styles/img/IBM_rebus_h_pos_blue60_RGB.png"];
let logo = document.querySelector('.logo');
let currentLogo = 0;

function changeLogo() {
    logo.setAttribute('src', logos[currentLogo]);
    currentLogo = (currentLogo + 1) % logos.length;
}

setInterval(changeLogo, 3000); // Cambia la imagen cada 3 segundos
