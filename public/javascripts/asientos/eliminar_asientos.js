async function eliminarAsiento(boton, id) {
  if (!confirm('¿Estás seguro de eliminar este asiento?')) return;

  try {
    const response = await fetch(`/asientos/eliminar/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      const fila = boton.closest('tr'); //eliminar la fila de la tabla sin recargar
      fila.remove();

      const tbody = document.querySelector('tbody');
      if (tbody.children.length === 0) {
        location.reload();
      }
    } else {
      alert(data.message || 'Error al eliminar el asiento');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un problema con la conexión');
  }
}