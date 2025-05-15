setTimeout(() => {
  const confirmar = confirm("¿Quieres completar el formulario y registrarte para disfrutar los beneficios de DON LIMÓN?");
  if (confirmar) {
    window.location.href = "https://docs.google.com/forms/d/e/tu_formulario_id/viewform"; // Reemplaza con tu URL
  }
}, 3000);
