function setBodyMargin () {
    let footer = document.querySelector('footer').clientHeight;
    let body = document.querySelector('body');
    body.style.margin = '0 0 ' + footer + 'px';
}

window.addEventListener('load', setBodyMargin);
window.addEventListener('resize', setBodyMargin);