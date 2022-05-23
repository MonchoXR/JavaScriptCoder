let cantidadMesa = 1;
let stockMesa = 5;
let stockLaptop = 3;
let stockSilla = 7;
let cantidadMesaActual;
let cantidadLaptopActual;
let cantidadSillaActual;
let cantidadLaptop = 1;
let cantidadSilla = 1;
let opcionMenu;




opcionMenu = parseInt(prompt(
    "Bienvenido a Nuestra Tienda Virtual" + "\n" +
      "Escoga nuestro producto por numero:" + "\n" +
      "1. Mesa   --- $20.00" + "\n" +
      "2. Laptop --- $1200.00" + "\n" +
      "3. Silla      --- $40.00" + "\n" +
      "0. Si desea Salir"
  ));

while (opcionMenu != 0) {
  switch(opcionMenu){
    case 1:
      subMenu(opcionMenu);
      break;

    case 2:
      subMenu(opcionMenu);
      break;

    case 3:
      subMenu(opcionMenu);
      break;

    default:
      opcionMenu = parseInt(prompt(
        "Ingrese Nuevamente a Nuestra Tienda Virtual" + "\n" +
          "Escoga nuestro producto por numero:" + "\n" +
          "1. Mesa   --- $20.00" + "\n" +
          "2. Laptop --- $1200.00" + "\n" +
          "3. Silla      --- $40.00" + "\n" +
          "0. Si desea Salir"
      ));
    
        break;
  }

  opcionMenu = parseInt(prompt(
    "Bienvenido a Nuestra Tienda Virtual" + "\n" +
      "Escoga nuestro producto por numero:" + "\n" +
      "1. Mesa   --- $20.00" + "\n" +
      "2. Laptop --- $1200.00" + "\n" +
      "3. Silla      --- $40.00" + "\n" +
      "0. Si desea Salir"
  ));

}


function subMenu(idPrducto) {
  let opcionSubMenu = parseInt(
    prompt(
      "Presione " + 1 + " si desea ver Detalle del Producto." + "\n" +
      "Presione " + 2 + " si desea añadir al Carrito de Compras."));

  while (opcionSubMenu != "1" && opcionSubMenu != "2") {
    opcionSubMenu = parseInt(prompt("Solo ingrese numero si es 1 ó 2"));
  }

  if (opcionSubMenu == 1) {
    let opcionDetalleLocal = detalleProducto(idPrducto);
    if (opcionDetalleLocal == 1) {
        stock(idPrducto);

    } 
    else {
      carritoDeCompras(idPrducto);
    }
  } 
  else {
    carritoDeCompras(idPrducto);
  }
  
}


function detalleProducto(idPrducto) {
  let opcionDetalle;

  if (idPrducto == 1) {
    opcionDetalle = prompt(
      "MESA GAMER" + "\n" +
        "$20.00" + "\n" +
        "Color:Rojo" + "\n" +
        "Espectacular MesaGamer para la comodida de sus hijos." +"\n" +
        "---------" + "\n" +
        "Cant: " + cantidadMesa + "\n" +
        "Presione 1 si desea añadir Cantidad?" + "\n" +
        "Presione 2 si Desea añadir al Carrito"
    );
  } else if (idPrducto == 2) {
    opcionDetalle = prompt(
      "LAPTOP" + "\n" +
        "$1200.00" + "\n" +
        "Color:Negro" + "\n" +
        "Lleve la mejor laptop con RTX3090." + "\n" +
        "---------" + "\n" +
        "Cant: " + cantidadLaptop + "\n" +
        "Presione 1 si desea añadir Cantidad?" + "\n" +
        "Presione 2 si Desea añadir al Carrito"
    );
  } else {
    opcionDetalle = prompt(
      "SILLA GAMER" + "\n" +
        "$40.00" + "\n" +
        "Color:Azul"+ "\n" + 
        "Ultimo modelo Silla GAMER." + "\n" +
        "---------" + "\n" +
        "Cant: " + cantidadSilla + "\n" +
        "Presione 1 si desea añadir Cantidad?" + "\n" +
        "Presione 2 si Desea añadir al Carrito"
    );
  }
  return opcionDetalle;
}

function carritoDeCompras(idPrducto) {
  if (idPrducto == 1) {
    alert("Carrito de Compra" + "\n" +
        "-----------------------------" + "\n" +
        "Producto" +"   Cantidad"+"    " + "Precio" +"    " + "IMP(20%)" +"       " +"Total" +"\n" +
        "MESA    " +"           "+cantidadMesa+"           $" +20.0 +"             " +20 * 0.2 +"                " +120.0 * 1.2*cantidadMesaActual );
  } else if (idPrducto == 2) {
    alert("Carrito de Compra" +"\n" +
        "-----------------------------" +"\n" +
        "Producto" +"   Cantidad"+"    " +"Precio" +"     " +"IMP(20%)" + "       " +"Total" +"\n" +
        "LAPTOP  " +"             "+cantidadLaptop+"       $" +1020.0 +"         " +1200 * 0.2 +"           " +1200.0 * 1.2*cantidadLaptop);
  } else {
    alert("Carrito de Compra" +"\n" +
        "-----------------------------" +"\n" +
        "Producto" +"   Cantidad"+"    " +"Precio" +"    " +"IMP(20%)" + "       " +"Total" +"\n" +
        "SILLA    " +"              "+cantidadSilla+"        $" +40.0 + "             " +40 * 0.2 +"                " +40.0 * 1.2*cantidadSilla);
  }
}


 function adicionarCantidad (idPrducto) {

  if(idPrducto == 1){
    cantidadMesa++;
  }
  else if(idPrducto == 2){
    cantidadLaptop++;
  }
  else{
     cantidadSilla++;
  }

}

// const AdicionarCantidad =(idPrducto)=> {

//   if(idPrducto == 1){
//     cantidadMesa++;
//   }
//   else if(idPrducto == 2){
//     cantidadLaptop++;
//   }
//   else{
//      cantidadSilla++;
//   }

// }


function stock(idPrducto){

  if (idPrducto == 1) {
    cantidadMesaActual = cantidadMesa;
    for ( cantidadMesaActual;cantidadMesaActual <= stockMesa;cantidadMesaActual++) {
      if (cantidadMesaActual >= stockMesa) {
        alert("Fuera de Stock");
        return;
      }
      adicionarCantidad(idPrducto);
      let opcionDetalleLocal = detalleProducto(idPrducto);
      if (opcionDetalleLocal == 2) {
        carritoDeCompras(idPrducto);
        return;
      }
    }
  }
  else if(idPrducto ==2){
    cantidadLaptopActual = cantidadLaptop;
    for ( cantidadLaptopActual;cantidadLaptopActual <= stockLaptop ;cantidadLaptopActual++) {
      if (cantidadLaptopActual >= stockLaptop) {
        alert("Fuera de Stock");
        return;
      }
      adicionarCantidad(idPrducto);
      let opcionDetalleLocal = detalleProducto(idPrducto);
      if (opcionDetalleLocal == 2) {
        carritoDeCompras(idPrducto);
        return;
      }
    }
  }
  else{
    cantidadSillaActual = cantidadSilla;
    for ( cantidadSillaActual;cantidadSillaActual <= stockSilla ;cantidadSillaActual++) {
      if (cantidadSillaActual >= stockSilla) {
        alert("Fuera de Stock");
        return;
      }
      adicionarCantidad(idPrducto);
      let opcionDetalleLocal = detalleProducto(idPrducto);
      if (opcionDetalleLocal == 2) {
        carritoDeCompras(idPrducto);
        return;
      }
    }
    
  }
}