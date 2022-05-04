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


function func_ej4(cel,far){

    let celv = parseFloat(cel.value);
    let farv = parseFloat(far.value);

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


function func_ej5(palabra){
            
    const palabrav = palabra.value;
   

    document.getElementById("ej5_i2").value = palabrav + " tiene " + palabrav.lenght + " letras"
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