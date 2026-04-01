async function actualizarPelicula(id) {
  const titulo = document.getElementById('titulo_input').value;
  const anio = document.getElementById('anio_input').value;
  const duracion = document.getElementById('duracion_input').value;

  const radioClasificacion = document.querySelector('input[name="id_clasificacion"]:checked');
  const id_clasificacion = radioClasificacion ? parseInt(radioClasificacion.value) : null;

  const checkboxesCategorias = document.querySelectorAll('input[name="categorias"]:checked');
  const categorias = Array.from(checkboxesCategorias).map(cb => parseInt(cb.value));

  const checkboxesDirectores = document.querySelectorAll('input[name="directores"]:checked');
  const directores = Array.from(checkboxesDirectores).map(cb => parseInt(cb.value));

  const data = {
    titulo,
    anio,
    duracion,
    id_clasificacion,
    categorias,
    directores
  };

  try {
    const response = await fetch(`/peliculas/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Película actualizada con éxito");
      window.location.href = '/peliculas'; // Redirigir a la lista
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