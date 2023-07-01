function calculoPX () {
    var px = parseFloat(document.getElementById("peso").value);
    var e=0;
    var m=0;
    
    
    if(px >= 50) {  
     e = px-50;  
     m =4*e;
   alert ("o peso exedito foi:"+e + "e a multa foi:" +m); 
}
else{
    e=0;
    m=0;
    alert("não foi gerado multa por peso exedido" + "\n"+"excedido = "+e +"\nMulta="+m )
}     
}