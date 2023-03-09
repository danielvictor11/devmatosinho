function calcular () {
    var tempo = parseFloat(document.getElementById("tempo").value);
    var velocidade = parseFloat(document.getElementById("velocidade").value);
    var distancia = tempo*velocidade*velocidade
    var litro = distancia/12
    alert("o litro ultilizado é  " + litro);
    console.log("litro " + litro);
    
}