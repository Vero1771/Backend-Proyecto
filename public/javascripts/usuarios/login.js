async function enviarFormulario() {
  const data = {
    email: document.getElementById('email_input').value,
    password: document.getElementById('password_input').value
  };

  try {
    const response = await fetch('/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Bienvenido");
      window.location.href = '/'; // Redirigir al principio  
    } else {
      let mensaje = result.message;
      if (Array.isArray(result.result)) {
        mensaje += ":\n" + result.result.join("\n");
      }
      alert(mensaje);
    }
  } catch (error) {
    if (error.code === 401) {
      alert("Error al ingresar.\n Verifique sus datos ingresados");
    } else {
      console.error("Error en la petición:", error);
      alert("Ocurrió un error inesperado en el servidor.");
    }
  }
}