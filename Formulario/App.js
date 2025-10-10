document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const terminosAceptados = document.getElementById('terminos').checked;
    
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    const mensajeParrafo = document.getElementById('mensaje');
    
    
    if (nombre === "" || apellido === "" || fechaNacimiento === "" || !generoSeleccionado || !terminosAceptados) {
        

        mensajeParrafo.textContent = "No se logró el registro. Por favor, completa todos los campos";
        
    } else {
        
        mensajeParrafo.textContent = "Validación Exitosa!";
     
    }
});