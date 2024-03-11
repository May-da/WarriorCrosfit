// Obtener elementos del DOM
const accesibilidadBtn = document.getElementById("accesibilidad-btn");
const accesibilidadMenu = document.getElementById("accesibilidad-menu");

// Agregar evento clic al botón de accesibilidad
accesibilidadBtn.addEventListener("click", function() {
    // Alternar la visibilidad del menú de accesibilidad
    const hidden = accesibilidadMenu.getAttribute("aria-hidden") === 'true';
    accesibilidadMenu.setAttribute("aria-hidden", !hidden);
});
