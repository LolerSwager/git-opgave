// Footer højde sættes på body som margin-bottom 
function setBodyMarginBottom () {
    let footer = document.querySelector('footer').clientHeight;
    let body = document.querySelector('body');
    body.style.marginBottom = footer + 'px';
}

window.addEventListener('load', setBodyMarginBottom);
window.addEventListener('resize', setBodyMarginBottom);