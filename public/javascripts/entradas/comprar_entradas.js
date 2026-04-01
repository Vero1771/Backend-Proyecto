// Calcula el total sumando solo las filas con el checkbox marcado
function actualizarTotal() {
  let total = 0;
  document.querySelectorAll('.entrada-checkbox:checked').forEach(checkbox => {
    const fila = checkbox.closest('.entradas-fila');
    total += parseFloat(fila.dataset.precio);
  });
  document.getElementById('total-general').innerText = total.toFixed(2);
}

async function enviarVenta() {
  const id_metodo = document.getElementById('id_metodo').value;
  const entradasParaEnviar = [];

  // guardar entradas marcadas
  document.querySelectorAll('.entrada-checkbox:checked').forEach(checkbox => {
    const fila = checkbox.closest('.entradas-fila');
    entradasParaEnviar.push({
      id_entrada: parseInt(fila.dataset.id),
      precio: parseFloat(fila.dataset.precio)
    });
  });

  if (entradasParaEnviar.length === 0) {
    return alert("Selecciona al menos una entrada para vender");
  }

  const data = {
    id_metodo: parseInt(id_metodo),
    entradas: entradasParaEnviar
  };

  try {
    const response = await fetch('/entradas/vender', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      alert("Venta de entradas exitosa!");
      window.location.reload();
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}