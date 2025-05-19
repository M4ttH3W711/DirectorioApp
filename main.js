console.log("Hola");
//En JS tenemos las fuenciones de tipo flecha
//Utilizaresmos fetch que es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //Convertimos la respuesta a tipo "JSON"
    .then((response) => response.json())
    //Los datos los vamos a amandar a la consola:
    .then((data) => console.log(data))
    //Descubrir qué hacer en caso de que no me corresponda
    .catch((error) => console.log(error));
};

consumirApi();

// TAREA EN INGLÉS
// Consumir otra API y mostrar la data en consola como acá arriba

const consumeApi = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
};

consumeApi();