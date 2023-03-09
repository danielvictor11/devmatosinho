function calculo () {
    var n =  parseFloat(document.getElementById("n").value);
    var c =0;
    var s= 10*n
    var st= s
    if(n > 50) {  
     e = ((n-50) *20)
     st = s + e
   alert ("a carga horario foi excedida o seu salario é:"+ s + "a sua hora excedente vale " +"\n"+e); 
}
else{
    alert("seu salario é"+ "\nsalario = " +s +"\ntotal é"+st )
}
     
}