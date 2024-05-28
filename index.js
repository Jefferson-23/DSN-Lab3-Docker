const express = require('express');
const app = express();

app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes POST y PUT

let productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 }
];

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.post('/productos', (req, res) => {
    const producto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    productos.push(producto);
    res.status(201).json(producto);
});

app.put('/productos/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send('El producto con el ID dado no fue encontrado.');

    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;

    res.json(producto);
});

app.delete('/productos/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send('El producto con el ID dado no fue encontrado.');

    const index = productos.indexOf(producto);
    productos.splice(index, 1);

    res.json(producto);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});