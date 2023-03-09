function calculo() {
    var ida=parseFloat(document.getElementById("idade").value);   
    if(ida>=5 && ida<=7) {       
   alert ("categoria infantil A:" + ida); 
      }
 else if(ida>=8 &&(ida<=10)) {
    alert("categoria infantil B:" + ida);
  }   
 else if(ida>=11 && ida<=13) {
   alert("categoria Juvenil A " + ida);
  }
  else if(ida>=14 && ida<=17) {
    alert("categoria Juvenil B" + ida);
  }   
  else{ 
     alert("maio e 18 anos categoria adultos" + ida);
  }   
     
}