function temperature(){
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    // To convert kilos to pounds
    // (kilo * 2.2) = pounds
    var kg = document.getElementById("kilo").value
    var pounds = (kg * 2.2)
    document.getElementById("pounds") = pounds
}

function distance(){
    // To convert km to miles
    // km * 0.62137 = miles
    km = document.getElementById("km")
    miles = (km * 0.62137)
    document.getElementById("miles") = miles
}