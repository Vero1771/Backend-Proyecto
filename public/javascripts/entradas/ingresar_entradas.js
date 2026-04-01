async function enviarVenta() {
  const id_funcion = document.getElementById('id_funcion_master').value;
  const precio = document.getElementById('id_precio_entradas').value;

  // Obtener los checkboxs marcados
  const asientosSeleccionados = Array.from(document.querySelectorAll('.asiento-check:checked'))
    .map(cb => ({
      id_funcion: parseInt(id_funcion),
      id_asiento: parseInt(cb.value),
      precio: parseFloat(precio)
    }));

  if (asientosSeleccionados.length === 0) {
    return alert("Debes seleccionar al menos un asiento");
  }

  const data = {
    entradas: asientosSeleccionados
  };

  try {
    const response = await fetch('/entradas/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Entradas registradas con éxito");
      window.location.href = '/entradas/disponibles';
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