function calculoA () {
    var altura = parseFloat(document.getElementById("altura").value);
    var Raio = parseFloat(document.getElementById("raio").value);
    var volume = altura*3.14159*Raio*2 
    alert("o calculo do volume é  " + volume);
    console.log("volume " + volume);
    
}