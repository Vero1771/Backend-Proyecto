async function actualizarProveedor(id) {
  const data = {
    nombre: document.getElementById('nombre_input').value,
    correo: document.getElementById('correo_input').value,
    telefono: document.getElementById('telefono_input').value,
    empresa: document.getElementById('empresa_input').value
  };

  try {
    const response = await fetch(`/proveedores/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Proveedor actualizada con éxito");
      window.location.href = '/proveedores'; // Redirigir a la lista
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