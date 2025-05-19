setTimeout(() => {
  // Crear el contenedor del mensaje emergente
  const popup = document.createElement('div');
  popup.className = 'popup show'; // Importante: clase para animación + estilos

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
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfVIPtzBrNJkpq_EObb0O-Rixew92iJtqKOoThm5z1OW_vG8Q/viewform?usp=header";
  };
  document.getElementById('btn-no').onclick = () => {
    popup.remove(); // Cierra el popup
  };
}, 3000);
