//capturar datos del formulario

document.getElementById("miFormulario").addEventListener("submit", async function(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();
  
    // Obtener el parámetro "codigo" de la URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const codigoParam = urlSearchParams.get("codigo");
    
    // Poblar la etiqueta input del formulario con el valor de "codigo"
    const codigoInput = document.getElementById("codigo");
    codigoInput.value = codigoParam;  
  });
  