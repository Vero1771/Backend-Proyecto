async function actualizarVenta(id) {
  const data = {
    id_metodo: document.getElementById('id_metodo').value,
    fecha: document.getElementById('fecha').value,
    total: document.getElementById('total').value
  };

  try {
    const response = await fetch(`/ventas/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Venta actualizada con éxito");
      window.location.href = '/ventas'; // Redirigir a la lista
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