async function actualizarSala(id) {
  const data = {
    nombre: document.getElementById('nombre_input').value,
    capacidad: parseInt(document.getElementById('capacidad_input').value),
    id_sucursal: document.getElementById('id_sucursal').value
  };

  try {
    const response = await fetch(`/salas/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Sala actualizada con éxito");
      window.location.href = '/salas'; // Redirigir a la lista
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