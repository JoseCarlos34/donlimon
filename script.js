setTimeout(() => {
  // Si ya completó el formulario, no mostrar popup
  if (sessionStorage.getItem('formularioCompletado')) return;

  // Crear popup
  const popup = document.createElement('div');
  popup.className = 'popup show';

  popup.innerHTML = `
    <p>¿Quieres completar el formulario y registrarte para disfrutar los beneficios de <strong>DON LIMÓN</strong>?</p>
    <button id="btn-si">Sí, quiero</button>
    <button id="btn-no">No, gracias</button>
  `;

  document.body.appendChild(popup);

  // Botón Sí: redirige al formulario de Google
  document.getElementById('btn-si').onclick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScNwoBiu3cu-LHQETVBEylneezEfsDXyo8GjSCXGqLNBWSkOA/viewform?usp=header";
  };

  // Botón No: cierra popup
  document.getElementById('btn-no').onclick = () => {
    popup.remove();
  };
}, 3000);
