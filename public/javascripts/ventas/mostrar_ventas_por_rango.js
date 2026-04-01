const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const inicio = document.getElementsByName('inicio')[0].value;
  const fin = document.getElementsByName('fin')[0].value;

  if (new Date(inicio) > new Date(fin)) {
    e.preventDefault();
    alert('La fecha de inicio no puede ser mayor a la fecha de fin.');
  }
});