
document.getElementById("bloqueParaImagenSinResultados").style.display = "block";
document.getElementById("bloqueParaResultado").style.display = "none";

var texto1 = document.getElementById("entradaDeTexto");			
var boton1 = document.getElementById("botonEncriptar");
var boton2 = document.getElementById("botonDesencriptar");


var texto2 = document.getElementById("salidaDeTexto");
var boton3 = document.getElementById("botonCopiar");

boton1.addEventListener("click", encriptarTexto);
boton2.addEventListener("click", desencriptarTexto);
boton3.addEventListener("click", copiarTexto);

var input = document.querySelector("input");
input.focus();

var textoEncriptado = "";
var textoDesencriptado = "";

function saltarLinea(){

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){

    document.write(frase);
    saltarLinea();
}


//Los siguientes son los datos para el proceso de encriptación (también conocidas como "llaves de encriptación":

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function encriptarTexto(){
        
        
    if(texto1.value == "" | texto1.value == "Ingresa el texto aquí") {

        alert("¡Por favor ingresa un texto para encriptar!");
        salidaDeTexto.value="";
        document.getElementById("bloqueParaImagenSinResultados").style.display = "block";
        document.getElementById("bloqueParaResultado").style.display = "none";

    }


    else {

        textoEncriptado = texto1.value.replace(/[e]/gi,"enter").replace(/[i]/gi,"imes").replace(/[a]/gi,"ai").replace(/[o]/gi,"ober").replace(/[u]/gi,"ufat");

        salidaDeTexto.value = textoEncriptado;
        document.getElementById("bloqueParaImagenSinResultados").style.display = "none";
        document.getElementById("bloqueParaResultado").style.display = "block";

    }

}

    

function desencriptarTexto() {
        

    if(texto1.value == "" | texto1.value == "Ingresa el texto aquí") {

        alert("¡Por favor ingresa un texto para desencriptar!");
        salidaDeTexto.value="";
        document.getElementById("bloqueParaImagenSinResultados").style.display = "block";
        document.getElementById("bloqueParaResultado").style.display = "none";

    }

    else {

        textoDesencriptado = texto1.value.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");


        salidaDeTexto.value = textoDesencriptado;
        document.getElementById("bloqueParaImagenSinResultados").style.display = "none";
        document.getElementById("bloqueParaResultado").style.display = "block";

    }

        
}


function copiarTexto(){

    if(texto1.value == "" | texto1.value == "Ingresa el texto aquí") {

        alert("¡Aún no hay nada que copiar!");

    }

    else {

        //botonCopiar.select();
        //document.execCommand("copy");
        //navigator.clipboard
        //.writeText(result.innerHTML)
        salidaDeTexto.focus(); 
        document.execCommand('selectAll');
        document.execCommand('copy');
        alert("¡Texto copiado al portapapeles!");
   	

    }

        
}


texto2 = texto2.value;