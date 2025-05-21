console.log("Hola");
//En JS tenemos las fuenciones de tipo flecha
//Utilizaresmos fetch que es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //Convertimos la respuesta a tipo "JSON"
    .then((response) => response.json())
    //Los datos los vamos a amandar a la consola:
    .then((data) => {
            //La data de la API la vamos a llevar al HTML
    //Paso 1: Definimos las constantes que vamos a usar y el HTML que vamos a afectar
    const nombre = document.getElementById("nombre");
    const nombreUsuario = document.getElementById("nombreUsuario");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const website = document.getElementById("website");
    //const address = document.getElementById("address");
    const street = document.getElementById("street");
    const suite = document.getElementById("suite");
    const city = document.getElementById("city");
    const zipcode = document.getElementById("zipcode");
    //const geo = document.getElementById("geo");
    const lat = document.getElementById("lat");
    const lng = document.getElementById("lng");

    nombre.innerText = data[0].name;
    nombreUsuario.innerText = data[0].username;
    email.innerText = data[0].email;
    phone.innerText = data[0].phone;
    website.innerText = data[0].website;
    //address.innerText = data[0].address;
    street.innerText = data[0].address.street;
    suite.innerText = data[0].address.suite;
    city.innerText = data[0].address.city;
    zipcode.innerText = data[0].address.zipcode;
    //geo.innerText = data[0].address.geo;
    lat.innerText = data[0].address.geo.lat;
    lng.innerText = data[0].address.geo.lng;
        
    })
    //Descubrir qué hacer en caso de que no me corresponda
    .catch((error) => console.log(error));

//DOM = Document Object Model = Documento Modelo de Objeto
// Semana 2: Apartir de esta sesión, vamos a identificar a los elementos del HTML con un "id"

    //Creo una constante y le paso como valor el id del H1 que está en la línea 17 de mi HTML
    //Con getElementById
    const titulo = document.getElementById("tituloEncabezado");

    //Imprimo la variable titulo pero con el atributo textContent
    console.log(titulo.textContent);
};

consumirApi();

// Tarea: Agregar otra API:

const consumeApi = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
};

consumeApi();

//Tarea sobre métodos y arreglos en java script
//Tarea 2: Mostrar los datos del objeto en el HTML
/*
addres": {etccc.....
*/