// Vælg alle produkter
var products = document.querySelectorAll('.tasker > *');

// Viser alle produkter
document.getElementById('all').addEventListener('click', function() {
    products.forEach(product => product.classList.remove('hide'));
});

// Kalder funtion showProducts() ved klik på element med id="taske"
document.getElementById('taske').addEventListener('click', showProducts);

// Kalder funtion showProducts() ved klik på element med id="vest"
document.getElementById('vest').addEventListener('click', showProducts);

// Kalder funtion showProducts() ved klik på element med id="hylster"
document.getElementById('hylster').addEventListener('click', showProducts);

// Viser valgte produkt og skjuler øvrige
function showProducts() {
    products.forEach((product) => {
        if (product.classList.contains(`${this.id}`)) {
            product.classList.remove('hide')
        } else {
            product.classList.add('hide')
        }
    })
}