async function enviarFormulario() {
  const data = {
    email: document.getElementById('email_input').value,
    password: document.getElementById('password_input').value
  };

  try {
    const response = await fetch('/usuarios/ingresar_admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Admin ingresado con éxito");
      window.location.href = '/usuarios'; // Redirigir a la lista  
    } else {
      if (response.status === 409 || typeof result.result === 'string') {
        alert("Atención: " + result.message);
      }
      // Si es el array de errores
      else if (Array.isArray(result.result)) {
        const mensajesError = result.result.join("\n");
        alert("Errores de validación:\n" + mensajesError);
      }
      else {
        alert("Error: " + (result.message || "No se pudo completar el registro"));
      }
    }
  } catch (error) {
    console.error("Error en la petición:", error);
    alert("Ocurrió un error inesperado en el servidor.");
  }
}