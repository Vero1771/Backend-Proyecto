async function actualizarVentaProducto(id) {
  const data = {
    id_producto: document.getElementById('id_producto').value,
    cantidad: document.getElementById('cantidad_input').value,
    subtotal: document.getElementById('subtotal_input').value
  };

  try {
    const response = await fetch(`/ventas_productos/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Venta actualizada con éxito");
      window.location.href = '/ventas_productos'; // Redirigir a la lista
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