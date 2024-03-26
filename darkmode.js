document.addEventListener("DOMContentLoaded", function() {
    let darkMode = document.getElementById("dark-mode");
    darkMode.addEventListener("click", cambiarColor);
    const bodyElement = document.querySelector("body"); // Seleccionar el elemento body
    const tituloElement = document.getElementById("titulo"); // Corregir la selección del elemento del título

    let modoOscuroActivado = false; // Variable para controlar el estado del modo oscuro

    function cambiarColor() {
        modoOscuroActivado = !modoOscuroActivado; // Alternar el estado del modo oscuro al hacer clic en el botón
        bodyElement.classList.toggle("dark");
        tituloElement.classList.toggle("dark-titulo"); // Usar toggle en lugar de add para alternar la clase

        // Cambiar el texto del botón según el estado del modo oscuro
        if (modoOscuroActivado) {
            darkMode.innerText = "Light Mode";
        } else {
            darkMode.innerText = "Dark Mode";
        }
    }
});
