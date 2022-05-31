class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
    this.stock = stock;
  }
}

class Carrito {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
  }
}
const productos = [];
let stock = 2;
let conta = 0;

const carritos = [];


let idProducto;

do {
  idProducto = parseInt(
    prompt(
      "Bienvenido a Nuestra Tienda Virtual\n" +
        "Escoga nuestro producto por numero:\n" +
        "1. Mesa   --- $20.00\n" +
        "2. Laptop --- $1200.00\n" +
        "3. Silla      --- $40.00\n" +
        "4. Ver estado de Carrito\n" +
        "0. Si desea Salir"
    )
  );

  while (
    idProducto != 1 &&
    idProducto != 2 &&
    idProducto != 3 &&
    idProducto != 4 &&
    idProducto != 0
  ) {
    idProducto = parseInt(
      prompt("Solo ingrese unb numero 1, 2 ,3, 4 ó 0 para salir"));
  }


  if (idProducto != 0) {
    if (idProducto == 4) {
      detalleCarrito();
    } else {
      let opcionCarrito = detalleProducto(idProducto);

      if (opcionCarrito == 1) {
        if (idProducto == 1) {
          carritos.push(new Carrito("Mesa", "20"));
        } else if (idProducto == 2) {
          carritos.push(new Carrito("Laptop", "1200"));
        } else {
          carritos.push(new Carrito("Silla", "40"));
        }
      }

      if (opcionCarrito == 2) {
        if (idProducto == 1) {
          eliminarCarrito("MESA");
        }

        if (idProducto == 2) {
          eliminarCarrito("LAPTOP");
        }

        if (idProducto == 3) {
          eliminarCarrito("SILLA");
        }
      }
    }
  }
} while (idProducto != 0);



function detalleProducto(idProducto) {
  let opcionCarrito;

  if (idProducto == 1) {
    opcionCarrito = prompt(
      "MESA GAMER\n" +
        "$20.00\n" +
        "Color:Rojo\n" +
        "Espectacular MesaGamer para la comodida de sus hijos.\n" +
        "---------\n" +
        "Presione 1 si Desea añadir al Carrito\n"+
        "Presione 2 si Desea elimibar del Carrito"
    );
  } else if (idProducto == 2) {
    opcionCarrito = prompt(
      "LAPTOP" +
        "$1200.00\n" +
        "Color:Negro\n"+
        "Lleve la mejor laptop con RTX3090.\n" +
        "---------\n" +
        "Presione 1 si Desea añadir al Carrito\n"+
        "Presione 2 si Desea elimibar del Carrito"
    );
  } else {
    opcionCarrito = prompt(
      "SILLA GAMER\n" +
        "$40.00\n" +
        "Color:Azul\n" +
        "Ultimo modelo Silla GAMER.\n" +
        "---------\n" +
        "Presione 1 si Desea añadir al Carrito\n"+
        "Presione 2 si Desea elimibar del Carrito"
    );
  }
  return opcionCarrito;
}


function eliminarCarrito(producto) {
  if (carritos == "") {
    return;
  } else {
    for (let i = 0; i < carritos.length; i++) {
      if (carritos[i].nombre.includes(producto)) {
        let index = carritos.map((producto) => producto.nombre).indexOf(producto);
        carritos.splice(index, 1);
        eliminarCarrito(producto); //use recursividad porque con la actualizacion del splice no me toma la nueva longitud
      } else {
        alert("no se tiene el producto " + producto + " en su carrito");
      }
    }
  }
}

function detalleCarrito(){

  let carritoTotal = [];

  for (const elemento of carritos) {
    carritoTotal.push(elemento.nombre + " " + elemento.precio);
  }
  if (carritos.length == 0) {
    alert("No Tiene Productos Agregados");
  } else {
    alert("mis produtos son: \n" + carritoTotal.join("\n"));
  }


}