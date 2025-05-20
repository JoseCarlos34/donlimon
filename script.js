setTimeout(() => {
  // Verificar si el formulario ya fue completado en esta sesión
  if (sessionStorage.getItem('formularioCompletado')) return;

  // Crear el contenedor del mensaje emergente
  const popup = document.createElement('div');
  popup.className = 'popup show';

  // Contenido del mensaje
  popup.innerHTML = `
    <p>¿Quieres completar el formulario y registrarte para disfrutar los beneficios de <strong>DON LIMÓN</strong>?</p>
    <button id="btn-si">Sí, quiero</button>
    <button id="btn-no">No, gracias</button>
  `;

  // Agregar el popup al body
  document.body.appendChild(popup);

  // Botón "Sí, quiero"
  document.getElementById('btn-si').onclick = () => {
    sessionStorage.setItem('formularioCompletado', 'true'); // Marca como completado
    window.location.href = "https://donlimon.vercel.app/redirect.html"; // Redirige a la página intermedia
  };

  // Botón "No, gracias"
  document.getElementById('btn-no').onclick = () => {
    popup.remove(); // Cierra el popup
  };
}, 3000);
