async function enviarFormulario() {
  const data = {
    id_pelicula: document.getElementById('id_pelicula').value,
    id_sala: document.getElementById('id_sala').value,
    fecha_hora: document.getElementById('fecha_hora').value
  };

  try {
    const response = await fetch('/funciones/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Función ingresada con éxito");
      window.location.href = '/funciones'; // Redirigir a la lista  
    } else {
      // Si el servidor responde con 400 mostrar los mensajes de error
      const mensajesError = result.result.join("\n");
      alert("Error en la validación:\n" + mensajesError);
    }
  } catch (error) {
    console.error("Error en la petición:", error);
    alert("Ocurrió un error inesperado en el servidor.");
  }
}