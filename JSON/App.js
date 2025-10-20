const persona = {
    nombre: "Andrea",
    edad: 20,
    pais : "Mexico"
};

// convertir objeto a JSON(texto)
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

const resultado = document.querySelector(".resultado");
resultado.textContent = personaJSON;