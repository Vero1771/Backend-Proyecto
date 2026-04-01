async function actualizarDirector(id) {
  const data = {
    nombre: document.getElementById('nombre_input').value,
    apellido: document.getElementById('apellido_input').value
  };

  try {
    const response = await fetch(`/directores/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Director actualizado con éxito");
      window.location.href = '/directores'; // Redirigir a la lista
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