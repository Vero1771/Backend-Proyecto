async function actualizarEntrada(id) {
  const data = {
    id_funcion: document.getElementById('id_funcion').value,
    id_asiento: document.getElementById('id_asiento').value,
    precio: document.getElementById('id_precio').value,
  };

  try {
    const response = await fetch(`/entradas/editar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Entrada actualizada con éxito");
      window.location.href = '/entradas'; // Redirigir a la lista
    } else {
      if (result.message) {
        alert(result.message);
      }

      if (result.result && Array.isArray(result.result) && result.result.length > 0) {
        const mensajesError = result.result.join("\n");
        alert("Errores de validación:\n" + mensajesError);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un problema al conectar con el servidor.");
  }
}