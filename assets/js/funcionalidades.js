function func_ej1(n1,n2,n3){
let n1v = n1.value
let n2v = n2.value
let n3v = n3.value
    var suma;

    if(n1v > n2v && n1v > n3v){
        
        suma= "número 1"

    }else{

        if (n2v > n1v && n2v > n3v) {
            
            suma = "número 2"

        }else{
            
            suma = "número 3"

        }
    }

    document.getElementById("ej1_respuesta").value = suma
 }


 function func2_ej1(n1,n2,n3){

    let n1v = n1.value
    let n2v = n2.value
    let n3v = n3.value

    var xd;

  if(n1v < n2v && n1v < n3v){

       xd= "número 1"

  }else{

       if (n2v < n1v && n2v < n3v) {

          xd = "número 2"

      }else{

          xd = "número 3"
      }
  }

    document.getElementById("ej1_respuesta2").value = xd
  }    


  function func_ej2(n1,n2){
    let n1v = parseFloat(n1.value)
    let n2v = parseFloat(n2.value)

    var suma = n1v + n2v

    document.getElementById("ej2_respuesta").value = suma
}


function func_ej3(n1,n2){

    let n1v = n1.value;
    let n2v = parseInt(n2.value);
    var suma = ""

    for (let index = 1; index <= n2v; index++) {
        
        suma = suma + n1v
    }

    document.getElementById("ej3_respuesta").value = suma
}


function func_ej4(){

    let celv = parseFloat(document.getElementById('ej4_i1').value);;
    let farv = parseFloat(document.getElementById('ej4_i2').value);;

    if (celv != 0 && farv == 0) {
        
        farv = (celv * 1.8) + 32
        document.getElementById("ej4_i2").value = farv
        document.getElementById("ej4_i1").value = 0
    }else{

        celv = (farv - 32) * (5/9)
        document.getElementById("ej4_i1").value = celv
        document.getElementById("ej4_i2").value = 0
    }
}


function func_ej5(){
            
    let ej5_palabra = (document.getElementById('ej5_i1').value);
    let ej5_result = parseFloat(document.getElementById('ej5_i2').value);  // nota: La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante


    document.getElementById('ej5_i2').value= "La palabra " +ej5_palabra+ " tiene " +ej5_palabra.length+ " letras."; 

}


function func_ej6(num) {
            
    let numv = parseFloat(num.value);
    let calc = numv % 2

    if (calc == 0) {
        var res = "par";
        document.getElementById("ej6_i2").value = res;
    }else{
        var res = "impar";
        document.getElementById("ej6_i2").value = res;
    }
}


function func_ej7(){

    let num1v= parseInt(document.getElementById('ej7_i1').value);
    let num2v= parseInt(document.getElementById('ej7_i2').value)

    let multiplos = ""
    let comparten = true
    let mult = 3
    var mod1, mod2

    while (mult <= num1v && mult <= num2v && comparten == true) {

      mod1 = num1v % mult
      mod2 = num2v % mult

       if (mod1 === mod2){

          multiplos = multiplos + mult + ", "
          mult = mult + 3

       } else {
         comparten = false 
       } 
    }
    document.getElementById("ej7_respuesta").value= multiplos

 }



 function func_ej8(num){

    let numv= parseInt(num.value);

    var primos = []
     
    for (let index = 0; index <= numv; index++) {

     if (esPrimo(index)) {
        
        primos.push(index)} 
    
    }

    alert (primos.toString())

}

function esPrimo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }


  function func_ej9() {
        
    let nombre= document.getElementById('ej9_i1').value;
    let apellido= document.getElementById('ej9_i2').value;
    let edad = document.getElementById('ej9_i3').value;
    let ciudad = document.getElementById('ej9_i4').value;
    
    const frase = "Mi nombre es " + nombre + " " + apellido + ", tengo " + edad + " años. Nací en la ciudad de " + ciudad + ".";

    document.getElementById("ej9_respuesta").value = frase
}


function func_ej10() {

    let num1= parseInt(document.getElementById('ej10_i1').value);
    let num2= parseInt(document.getElementById('ej10_i2').value);
    let numeros = ""
      
      if (num1 > num2) {
          
          for (let index = num1 - 1; index > num2 ; index--) {
              
              numeros = numeros + index + ", ";
          }
          document.getElementById("ej10_respuesta").value = numeros
      } 

      if (num2 > num1){

           for (let index = num1 + 1; num2 > index ; index++) {
              
              numeros = numeros + index + ", ";;
          }
          document.getElementById("ej10_respuesta").value = numeros
      }

  }