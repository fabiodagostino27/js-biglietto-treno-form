let name = document.getElementById("name");
let surname = document.getElementById("surname");
let km = document.getElementById("km");
let age = document.getElementById("select");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");

let ticket = document.getElementById("ticket");
let cardName = document.getElementById("cardName");
let cardKm = document.getElementById("cardKm");
let cardAge = document.getElementById("cardAge");
let cardDiscount = document.getElementById("cardDiscount");
let cardPrice = document.getElementById("cardPrice");

let required = document.querySelectorAll(":required");

function price(x, y) {
    const pricePerKm = 0.21;

    provisionalPrice = parseInt(x.value) * pricePerKm;
    (y.value == "minor") ? discount = provisionalPrice * 0.2 : (y.value == "over65") ? discount = provisionalPrice * 0.4 : discount = 0;

    finalPrice = provisionalPrice - discount;
    return finalPrice
}


submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(km.value)
    if (name.value == "" || surname.value == "" || age.value == "" || km.value == "") {
        alert("Errore. Compila il form nel modo corretto.")
    } else {
            cardName.innerHTML = `${name.value} ${surname.value}`;
            cardKm.innerHTML = km.value;
        
            if (age.value == "minor") {
                cardAge.innerHTML = "Minorenne";
                cardDiscount.innerHTML = "20%"
            } else if (age.value == "over65") {
                cardAge.innerHTML = "Over 65";
                cardDiscount.innerHTML = "40%"
            } else {
                cardAge.innerHTML = "Maggiorenne";
                cardDiscount.innerHTML = 0
            }
        
            cardPrice.innerHTML = `${price(km, age).toFixed(2)}€`
            ticket.classList.replace("d-none", "d-flex")
    }
})