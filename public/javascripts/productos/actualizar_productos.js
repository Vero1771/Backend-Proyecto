async function actualizarProducto(id) {
  const nombre = document.getElementById('nombre_input').value;
  const cantidad = document.getElementById('cantidad_input').value;
  const precio_unitario = document.getElementById('precio_unitario_input').value;

  const radioClasificacion = document.querySelector('input[name="en_stock"]:checked');
  const en_stock = radioClasificacion ? parseInt(radioClasificacion.value) : null;

  const id_proveedor = document.getElementById('id_proveedor').value

  const data = {
    nombre,
    cantidad,
    precio_unitario,
    en_stock,
    id_proveedor
  };

  try {
    const response = await fetch(`/productos/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Producto actualizado con éxito");
      window.location.href = '/productos/todos'; // Redirigir a la lista
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