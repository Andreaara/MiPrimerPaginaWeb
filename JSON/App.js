const persona = {
    nombre: "Andrea",
    edad: 20,
    pais : "Mexico",
    hobbies: ["Escuchar musica, dormir, ver series, estar con gatos, ver peliculas, criticar"]
};

// convertir objeto a JSON(texto)
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

const resultado = document.querySelector(".resultado");
resultado.textContent = personaJSON;

resultado.innerHTML = "Nombre: " + persona.nombre+
"<p> Edad: " +persona.edad +
"<p> Pais: " + persona.pais + 
"<p> Hobbies: " +persona.hobbies