setTimeout(() => {
  // Verificar si el formulario ya fue completado
  if (sessionStorage.getItem('formularioCompletado')) return;

  // Crear el contenedor del mensaje emergente
  const popup = document.createElement('div');
  popup.className = 'popup show'; // clase para estilos y animación

  // Contenido del mensaje
  popup.innerHTML = `
    <p>¿Quieres completar el formulario y registrarte para disfrutar los beneficios de <strong>DON LIMÓN</strong>?</p>
    <button id="btn-si">Sí, quiero</button>
    <button id="btn-no">No, gracias</button>
  `;

  // Agregar a la página
  document.body.appendChild(popup);

  // Listeners de los botones
  document.getElementById('btn-si').onclick = () => {
    sessionStorage.setItem('formularioCompletado', 'true'); // Guardar estado
    window.location.href = "https://tusitio.com/formulario"; // Cambia esta URL al enlace real
  };
  
  document.getElementById('btn-no').onclick = () => {
    popup.remove(); // Cierra el popup
  };
}, 3000);
