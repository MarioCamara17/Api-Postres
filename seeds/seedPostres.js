const mongoose = require('mongoose');
const Postre = require('../models/Postres.models'); // Modelo de los postres

const postres = [
    {
        nombre: "Pan de queso de bola",
        precio: 280.00,
        cantidad: 10,
        ingredientes: "mantequilla, azucar, lechera, queso de bola, harina, huevo",
        imagep: "pandebola.jpg"
    },
    {
        nombre: "Pan de nata",
        precio: 240.00,
        cantidad: 15,
        ingredientes: "mantequilla, azucar, lechera, nata, harina, huevo",
        imagep: "pandenata.jpg"
    },
    {
        nombre: "Cheesecake",
        precio: 300.00,
        cantidad: 12,
        ingredientes: "mantequilla, azucar, lechera, queso crema, harina, huevo",
        imagep: "cheesecake.jpg"
    },
    {
        nombre: "Volteado de piña",
        precio: 280.00,
        cantidad: 5,
        ingredientes: "mantequilla, azucar, lechera, piña, harina, huevo",
        imagep: "volteadodepiña.jpg"
    },
    {
        nombre: "Roles de canela",
        precio: 50.00,
        cantidad: 20,
        ingredientes: "mantequilla, azucar, lechera, canela, harina, huevo",
        imagep: "roles.jpg"
    },
    {
        nombre: "Brazo Gitano",
        precio: 450.00,
        cantidad: 10,
        ingredientes: "mantequilla, azucar, lechera, crema pastelera, harina, huevo",
        imagep: "brazogitano.jpg"
    },
    {
        nombre: "Pastel de chocolate",
        precio: 400.00,
        cantidad: 5,
        ingredientes: "manteca, azucar, chocolate, crema pastelera, harina, huevo",
        imagep: "chocolatin.jpg"
    },
    {
        nombre: "brownies",
        precio: 35.00,
        cantidad: 30,
        ingredientes: "harina, azucar, chocolate, nueces, mantequilla, huevo",
        imagep: "brownie.jpg"
    },
    {
        nombre: "Empanadas de cajeta",
        precio: 10.00,
        cantidad: 80,
        ingredientes: "cajeta, harina, azucar, mantequilla, huevo",
        imagep: "empanadascajeta.jpg"
    },
    {
        nombre: "Fruitcake",
        precio: 270.00,
        cantidad: 3,
        ingredientes: "frutas confitadas, azucar, lechera, nueces, harina, huevo",
        imagep: "fruitcake.jpg"
    },
    {
        nombre: "Pastel de queso de bola",
        precio: 380.00,
        cantidad: 5,
        ingredientes: "mantequilla, azucar, lechera, queso de bola, harina, huevo",
        imagep: "pastelbola.jpg"
    },
    {
        nombre: "Rosca de queso Philadelphia",
        precio: 280.00,
        cantidad: 7,
        ingredientes: "mantequilla, azucar, lechera, queso Philadelphia, harina, huevo",
        imagep: "roscadephiladelphia.jpg"
    },
    {
        nombre: "Rosca de queso de bola glaseada",
        precio: 380.00,
        cantidad: 9,
        ingredientes: "mantequilla, azucar, lechera, queso de bola, harina, huevo",
        imagep: "roscaglaseada.jpg"
    },
];

// Conexión y guardado
mongoose.connect('mongodb://127.0.0.1:27017/api-catalogo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log("📦 Conectado a MongoDB. Insertando postres...");

    // Limpia la colección antes de insertar (opcional)
    await Postre.deleteMany({});

    await Postre.insertMany(postres);
    console.log("✅ Datos insertados correctamente");
    mongoose.disconnect();
}).catch(err => {
    console.error("❌ Error al conectar o insertar:", err);
});