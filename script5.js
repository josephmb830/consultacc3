//capturar datos del formulario
//http://localhost:5500/index.html?codigo=4

document.getElementById("miFormulario").addEventListener("submit", async function(event) {
  // Evitar que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Obtener el parámetro "codigo" de la URL
  const urlSearchParams = new URLSearchParams(window.location.search);
  const codigoParam = urlSearchParams.get("codigo");
  
  // Poblar la etiqueta input del formulario con el valor de "codigo"
  const codigoInput = document.getElementById("codigo");
  codigoInput.value = codigoParam;  

  // Esperar 2 segundos antes de llamar a la API (simulando un middleware)
  await wait(2000);

  // Llamada a la API después de esperar
  try {
    // Obtener datos de la API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // Convertir codigoParam a un número
    const codigoNumero = parseInt(codigoParam, 10);

    // Verificar si el número es válido y está dentro del rango de datos
    if (!isNaN(codigoNumero) && codigoNumero >= 0 && codigoNumero < data.length) {
      // Mostrar los datos en la sección de nombre y dirección
      const nombreContainer = document.getElementById("nombre-container");
      const direccionContainer = document.getElementById("direccion-container");

      // Mostrar el elemento correspondiente a codigoNumero en los datos de la API
      nombreContainer.innerHTML = `<span>${data[codigoNumero].title}</span>`;
      direccionContainer.innerHTML = `<span>${data[codigoNumero].completed ? 'Completado' : 'No completado'}</span>`;
    } else {
      console.error("Número de código no válido o fuera de rango");
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }
});

// Función para esperar una cantidad de milisegundos
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





