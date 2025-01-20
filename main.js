let name = document.getElementById("name");
let surname = document.getElementById("surname");
let km = document.getElementById("km");
let age = document.getElementById("select");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let ticket = document.getElementById("ticket")


function price(x, y) {
    const pricePerKm = 0.21;

    provisionalPrice = parseInt(x.value) * pricePerKm;
    (y.value == "minor") ? discount = provisionalPrice * 0.2 : (y.value == "over65") ? discount = provisionalPrice * 0.4 : discount = 0;
    
    finalPrice = provisionalPrice - discount;
    return finalPrice
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    

})