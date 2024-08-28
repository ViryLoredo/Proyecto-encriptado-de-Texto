var containerResult = document.querySelectorAll(".ocultar");



function encriptar() {
    let input = document.getElementById("TxtPrincipal").value;
    let TextoInicial1 = document.getElementById("TextoInicial");
    let Indicacion1 = document.getElementById("Indicacion");
    let muñeco1 = document.getElementById("muñeco");
    let $btn=document.getElementById('btn');
    
    let textoCifrado = input
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (input.length != 0) {
      document.getElementById("TxtPrincipal").value = textoCifrado;
      TextoInicial1.textContent = textoCifrado;
      document.getElementById('BotonCopiar').style.display ='block';
      Indicacion1.textContent="";
      BotonCopiar();

    ocultar()
      muñeco1.src = "";
    }
    else {
      muñeco1.src = "img/muñeco.png";
      TextoInicial1.textContent = "Ningún mensaje fue encontrado";
      Indicacion1.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal( "Lo siento!! Ingresa el texto");
      document.getElementById('BotonCopiar').style.display ='none';
    
    }
  }
  
  function desencriptar() {
    let input = document.getElementById("TxtPrincipal").value;
    let TextoInicial1 = document.getElementById("TextoInicial");
    let Indicacion1 = document.getElementById("Indicacion");
    let muñeco1 = document.getElementById("muñeco");
      let $btn=document.getElementById('btn');
    
    
  
    let textoCifrado = input
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (input.length != 0) {
      document.getElementById("TxtPrincipal").value = textoCifrado;
      document.getElementById('BotonCopiar').style.display ='block';
      TextoInicial1.textContent = textoCifrado;
      Indicacion1.textContent="";
      
    ocultar()
      muñeco1.src = "";

      
    } else {
      muñeco1.src = "img/muñeco.png";
      TextoInicial1.textContent = "Ningún mensaje fue encontrado";
      Indicacion1.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      document.getElementById('BotonCopiar').style.display ='none';
      swal( "Lo siento!! Ingresa el texto");
    }
    
  }

  function ocultar(){
  
    muñeco.classList.add("ocultar");
    TextoInicial1.classList.add("ocultar");
    Indicacion1.classList.add("ocultar");
    document.getElementById('BotonCopiar').style.display ='none';
    
  
  }

  function BotonCopiar(element){

    var $temp = $("TxtPrincipal")
    $("body").append($temp);
    $temp.val($(element).text()).querySelectorAll();
    document.execCommand("copy");
    $temp.remove();
  
  }

  


