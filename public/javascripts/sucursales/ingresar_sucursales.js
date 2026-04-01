async function enviarFormulario() {
  const data = {
    nombre: document.getElementById('nombre_input').value,
    estado: document.getElementById('estado_input').value,
    ciudad: document.getElementById('ciudad_input').value,
    direccion: document.getElementById('direccion_input').value
  };

  try {
    const response = await fetch('/sucursales/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Sucursal ingresada con éxito");
      window.location.href = '/sucursales'; // Redirigir a la lista  
    } else {
      // Si el servidor responde con 400 mostrar los mensajes de error
      const mensajesError = result.result.join("\n");
      alert("Error en la validación:\n" + mensajesError);
    }
  } catch (error) {
    console.error("Error en la petición:", error);
    alert("Ocurrió un error inesperado en el servidor.");
  }
}