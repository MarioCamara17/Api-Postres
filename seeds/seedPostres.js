const axios = require("axios");

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

// URL del backend
const BASE_URL = "http://localhost:5000/api/createpostre";

// Función para cargar los postres al backend
const cargarPostres = async () => {
    try {
        for (const postre of postres) {
            const formData = new FormData();
            formData.append("nombre", postre.nombre);
            formData.append("precio", postre.precio);
            formData.append("cantidad", postre.cantidad);
            formData.append("ingredientes", postre.ingredientes);
            formData.append("imagep", postre.imagep); // Aquí puedes ajustar si necesitas subir archivos reales

            const response = await axios.post(BASE_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(`Postre cargado: ${response.data.nombre}`);
        }
        console.log("✅ Todos los postres se cargaron correctamente.");
    } catch (error) {
        console.error("❌ Error al cargar los postres:", error.message);
    }
};

// Ejecutar la función
cargarPostres();