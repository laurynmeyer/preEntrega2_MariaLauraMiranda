function precioFinal(array) {
    let resultado = 0;
    array.forEach(producto => {
        resultado += producto.precio * producto.cantidad

    });
    return resultado;
}

function precioConEnvio(array) {
    let resultado = 0;
    array.forEach(producto => {
        resultado += (producto.precio * producto.cantidad) + producto.envio
    });
    return resultado
}

function stock(array) {
    let resultado = 0;
    array.forEach(producto => {
        resultado += producto.stock - compraCliente
    }
    );
    return resultado;
}

const compraCliente = []

const listaProductos = [
    { id: 1, marca: "Lenovo ", disco: "512 GB SSD", ram: "8GB RAM", procesador: "CORE I5-1135G7", precio: 237499, stock: 12, cantidad: 0, envio: 2000 },
    { id: 2, marca: "Dell ", disco: "512 GB SSD", ram: "16GB RAM", procesador: "CORE I7-1135G7", precio: 437499, stock: 4, cantidad: 0, envio: 2000 },
    { id: 3, marca: "HP ", disco: "256 GB SSD", ram: "16GB RAM", procesador: "CORE I3-1135G7", precio: 224499, stock: 9, cantidad: 0, envio: 2000 },
    { id: 4, marca: "Lenovo", disco: "512 GB SSD", ram: "16GB RAM", procesador: "CORE I3-1135G7", precio: 384499, stock: 9, cantidad: 0, envio: 2000 },
    { id: 5, marca: "Dell", disco: "256 GB SSD", ram: "8GB RAM", procesador: "CORE I3-1135G7", precio: 258499, stock: 8, cantidad: 0, envio: 2000 },
    { id: 6, marca: "HP", disco: "256 GB SSD", ram: "8GB RAM", procesador: "CORE I5-1135G7", precio: 232499, stock: 7, cantidad: 0, envio: 2000 },
    { id: 7, marca: "Lenovo", disco: "256 GB SSD", ram: "4GB RAM", procesador: "CORE I3-1135G7", precio: 137499, stock: 10, cantidad: 0, envio: 2000 },
    { id: 8, marca: "Dell", disco: "512 GB SSD", ram: "16GB RAM", procesador: "CORE I5-1135G7", precio: 339499, stock: 17, cantidad: 0, envio: 2000 },
    { id: 9, marca: "HP", disco: "512 GB SSD", ram: "4GB RAM", procesador: "CORE I3-1135G7", precio: 158499, stock: 5, cantidad: 0, envio: 2000 },
    { id: 10, marca: "Lenovo", disco: "512 GB SSD", ram: "16GB RAM", procesador: "CORE I7-1135G7", precio: 469499, stock: 15, cantidad: 0, envio: 2000 },
]

let vistaProductos = ""

listaProductos.forEach(producto => {
    vistaProductos += "ID: " + producto.id + "\n" + "Marca: " + producto.marca + "\n" + "Disco: " + producto.disco + "\n" + "Ram: " + producto.ram + "\n" + "Procesador: " + producto.procesador + "\n" + "Precio: " + producto.precio + "\n" + "Stock: " + producto.stock + "\n" + "\n"
}
)

alert(vistaProductos)


do {

    let id = Number(prompt("Ingrese el ID del modelo que desea comprar"))

    if (!isNaN(id)) {

        if (listaProductos.some(producto => producto.id == id)) {

            let cantidad = Number(prompt("Seleccione la cantidad de productos a comprar"))
            const producto = listaProductos.find(producto => producto.id == id)
            producto.cantidad = cantidad;
            compraCliente.push(producto)

        }

        else {
            alert("Por favor ingrese un ID válido")
        }

    }

    respuesta = prompt("Desea seguir comprando? s/n")

} while (respuesta != "n" && respuesta == "s" || respuesta == "SI" || respuesta == "si")

alert("El importe total de producto/s seleccionado/s es:  " + precioFinal(compraCliente) + "  Presione aceptar para continuar con el proceso de compra")

alert("¿Desea recibir el producto en su domicilio? Presione aceptar para elegir opciones");


do {

    let envio = prompt("Ingrese SI para seleccionar envío a domicilio o cualquier tecla o NO para finalizar")
    console.log = (envio)
    if (envio == "si" || envio == "SI") {
        alert("se le adicionará al valor del producto el monto correspondiente al envío")

    }

    else {
        alert("Puede pasar a retirar el producto en nuestras oficinas ubicadas en Av. Corrientes 1200 5to B. CABA")
        break
    }
    respuesta = alert("El importe final + el cargo por envío es:  " + precioConEnvio(compraCliente))
    break

} while (respuesta != "n" || respuesta !="no" || respuesta != "NO")
