async function actualizarFuncion(id) {
  const data = {
    id_pelicula: document.getElementById('id_pelicula').value,
    id_sala: document.getElementById('id_sala').value,
    fecha_hora: document.getElementById('fecha_hora').value
  };

  try {
    const response = await fetch(`/funciones/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Función actualizada con éxito");
      window.location.href = '/funciones'; // Redirigir a la lista
    } else {
      // Si el servidor responde con 400 mostrar los mensajes de error
      const mensajesError = result.result.join("\n");
      alert("Error en la validación:\n" + mensajesError);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un problema al conectar con el servidor.");
  }
}