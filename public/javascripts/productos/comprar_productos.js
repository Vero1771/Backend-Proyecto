function calcularSubtotal(input) {
  const fila = input.closest('.producto-fila');
  const precio = parseFloat(fila.dataset.precio);
  const cantidad = parseInt(input.value) || 0;

  const subtotal = precio * cantidad;
  fila.querySelector('.subtotal-texto').innerText = subtotal.toFixed(2);

  actualizarTotalGeneral();
}

function actualizarTotalGeneral() {
  let total = 0;
  document.querySelectorAll('.subtotal-texto').forEach(span => {
    total += parseFloat(span.innerText);
  });
  document.getElementById('total-general').innerText = total.toFixed(2);
}

async function enviarVenta() {
  const id_metodo = document.getElementById('id_metodo').value;
  const productosParaEnviar = [];

  // Verificar los productos que tienen una cantidad
  document.querySelectorAll('.producto-fila').forEach(fila => {
    const cantidad = parseInt(fila.querySelector('.cantidad-input').value);
    if (cantidad > 0) {
      productosParaEnviar.push({
        id_producto: parseInt(fila.dataset.id),
        cantidad: cantidad,
        subtotal: parseFloat(fila.querySelector('.subtotal-texto').innerText)
      });
    }
  });

  if (productosParaEnviar.length === 0) {
    return alert("Selecciona al menos un producto con cantidad mayor a 0");
  }

  const data = {
    id_metodo: parseInt(id_metodo),
    productos: productosParaEnviar
  };

  try {
    const response = await fetch('/ventas_productos/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      alert("Venta de productos exitosa!");
      window.location.reload();
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}