document.addEventListener("DOMContentLoaded", function() {
    const btnGenerar = document.getElementById("btnGenerar");
    const paleta = document.getElementById("paleta");
    let colorCopiado = document.getElementById("colorCopiado");

    function generarColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const numAleatorio = Math.floor(Math.random() * 16);
            color += numAleatorio.toString(16);
        }
        return color;
    }

    function actualizarColor() {
        document.querySelectorAll(".paleta > div").forEach(function(colorDiv) {
            const color = generarColor();
            colorDiv.style.backgroundColor = color;

            // Agregar evento de clic para copiar el color al portapapeles
            colorDiv.addEventListener("click", function() {
                navigator.clipboard.writeText(color).then(function() {
                    console.log("Color copiado: " + color);
                    colorCopiado.innerText = "copied in color: " + color;
                    colorCopiado.style.color = color; // Aplicar el color copiado como color del texto
                }).catch(function(err) {
                    console.error("Error al copiar el color: ", err);
                });
            });
        });
    }

    btnGenerar.addEventListener("click", function() {
        actualizarColor();
    });

    actualizarColor();
});
