// Vælg alle artikler
var articles = document.querySelectorAll('.tasker > *');

// Viser alle farver
// document.getElementById('taske').addEventListener('click', function() {
//     articles.forEach(article => article.classList.remove('hide'));
// });

// Kalder funtion showColor() ved klik på element med id="blue"
document.getElementById('taske').addEventListener('click', showColor);

// Kalder funtion showColor() ved klik på element med id="blue"
document.getElementById('vest').addEventListener('click', showColor);

// Kalder funtion showColor() ved klik på element med id="green"
document.getElementById('hylster').addEventListener('click', showColor);

// Viser valgte farve og skjuler øvrige
function showColor() {
    articles.forEach((article) => {
        if (article.classList.contains(`${this.id}`)) {
            article.classList.remove('hide')
        } else {
            article.classList.add('hide')
        }
    })
}