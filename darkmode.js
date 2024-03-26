document.addEventListener("DOMContentLoaded", function() {
    let darkMode = document.getElementById("dark-mode");
    darkMode.addEventListener("click", cambiarColor);
    const bodyElement = document.querySelector("body"); // Seleccionar el elemento body
    const tituloElement = document.getElementById("titulo"); // Corregir la selección del elemento del título

    function cambiarColor() {
        bodyElement.classList.toggle("dark");
        tituloElement.classList.toggle("dark-titulo"); // Usar toggle en lugar de add para alternar la clase
    }
});
