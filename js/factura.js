var precio;
var cantidad;
var total;


var productos = [
    {nombre: "camiseta", precio: 5.00, total: 5},
    {nombre: "boxer", precio: 12, total: 5},
    {nombre: "jogger", precio: 10.00, total: 10}
];

var productosContainer = document.getElementById('cost');
for (let i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var productoDiv = document.createElement('div');
    productoDiv.textContent = producto.nombre + ': $' + (producto.precio * producto.total);
    productosContainer.appendChild(productoDiv);
}