let sumar = document.getElementById("sumar");

function realizarSuma(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let operacionSuma = numero1 + numero2;
  let mostrarResultado = document.getElementById("mostrarResultado");
  mostrarResultado.innerHTML="<p>El resultado es" +operacionSuma+"</p>";
  console.log("El resultado es"+ operacionSuma);

}

sumar.addEventListener("click", realizarSuma);


let resta = document.getElementById("resta");

function realizarResta(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let operacionResta = numero1 - numero2;
  let mostrarResultado = document.getElementById("mostrarResultado");
  mostrarResultado.innerHTML="<p>El resultado es" +operacionResta+"</p>";
  console.log("El resultado es"+ operacionResta);

}

resta.addEventListener("click", realizarResta);


let multipli =document.getElementById("multipli");

function realizarMultipli(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let operacionMultipli = numero1 * numero2;
  let mostrarResultado = document.getElementById("mostrarResultado");
  mostrarResultado.innerHTML="<p>El resultado es" +operacionMultipli+"</p>";
  console.log("El resultado es"+ operacionMultipli);

}

multipli.addEventListener("click", realizarMultipli);


let divi = document.getElementById("divi");
function realizarDivision(){

  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let operaciondivi =  numero1 / numero2;
  let mostrarResultado = document.getElementById("mostrarResultado");
  mostrarResultado.innerHTML="<p>El resultado es" +operaciondivi+"</p>";
  console.log("El resultado es"+ operaciondivi);

}

divi.addEventListener("click", realizarDivision);