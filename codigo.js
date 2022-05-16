let edad=0;
let nombrejuego = "";
let maquinaAletario = "";
let jugada = "";
let nombreJugada ="";
let estadoJuego="";


alert("       Bienvenido al juego de: Papel - Piedra - Tijera ");
let nombre = prompt("Ingresar Nombre");

for (i = 1; i < 4; i++) {
  if (nombre == "") {
    nombre = prompt("Debe llenar su nombre, sino ir a Cancelar");
  }
  else{
      break;
  }
  if(i==3){
      alert("Supero numero de Intentos, Empieze de nuevo");
  }
}


if(nombre!="" && nombre!=null ){
 edad = parseInt(prompt("Ingresar su Edad"));
}

do {
  if (isNaN(edad)) {
    edad = parseInt(prompt("Ingresar su Edad - solo numeros! - 0 para salir"));
  } else if (edad < 0) {
    edad = parseInt( prompt("Ingresar su Edad - numeros mayores que 0! - 0 para salir"));
  } else if (edad == 0) {
    break;
  } else if (edad > 0 && edad < 18) {
    edad = parseInt(prompt("Ingresa edad - Solo juegan mayores de 18 años - 0 para salir"));
  }
}while (edad < 18 || isNaN(edad));

if (edad != 0 ) {
  jugada = prompt("Escriba p si es Piedra, l si es Papel  y t si es tijera");

  while (jugada != "p" && jugada != "l" && jugada != "t") {
    jugada = prompt(
      "Escriba p si es Piedra, l si es Papel  y t si es tijera - solo esas letras"
    );
  }


  if ("p" == jugada) {
    alert("Escogiste Piedra");
  }

  if ("l" == jugada) {
    alert("Escogiste Papel");
  }

  if ("t" == jugada) {
    alert("Escogiste Tijera");
  }

  let NumeroAleatorio = Math.floor(Math.random() * 3) + 1;

  if (NumeroAleatorio == 1) {
    maquinaAletario = "p";
    nombreJugada = "piedra";
    alert("la maquina escogió " + nombreJugada);
  } else if (NumeroAleatorio == 2) {
    maquinaAletario = "l";
    nombreJugada = "papel";
    alert("la maquina escogió " +nombreJugada);
  } else {
    maquinaAletario = "t";
    nombreJugada = "Tijera";
    alert("la maquina escogió: " + nombreJugada);
  }

  if (jugada == maquinaAletario) {
    alert("Felicidades, Ganaste un Departamento!!! ");
    estadoJuego="Ganador";
  } else {
    alert("sigue Intentando");
    estadoJuego="Perdedor";
  }

  alert(" ******Mi reporte******* " + "\n" + "Mi Nombre es: " + nombre +"\n" + "Mi edad es: "+edad + "\n" + "Mi Jugada fue: " + nombreJugada + "\n" + "Estado de Jugada: "+ estadoJuego)
}
