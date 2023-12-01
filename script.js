document.getElementById("miFormulario").addEventListener("submit", async function(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();
  
    // Capturar los datos del formulario
    var codigo = document.getElementById("codigo").value;
    var codPredio = document.getElementById("codPredio").value;
    var anioDropdown = document.getElementById("anioDropdown").value;
    var dsctoVariosCheckbox = document.getElementById("dsctoVarios");
    var dsctoVariosChecked = dsctoVariosCheckbox.checked;
    var fechaProyeccion = document.getElementById("fechaProyeccion").value;
    var procedenciaDropdown = document.getElementById("procedenciaDropdown").value;
    var tipoDropdown = document.getElementById("tipoDropdown").value;
    var materiaDropdown = document.getElementById("materiaDropdown").value;
    var situacionDropdown = document.getElementById("situacionDropdown").value;
  
    // Hacer algo con los datos (por ejemplo, imprimirlos en la consola)
    console.log("Código: " + codigo);
    console.log("Código de Predio: " + codPredio);
    console.log("Años: " + anioDropdown);
    console.log("Checkbox 'dsctoVarios' está marcado:", dsctoVariosChecked);
    console.log("Fecha de Proyección: " + fechaProyeccion);
    console.log("Procedencia: " + procedenciaDropdown);
    console.log("Tipo: " + tipoDropdown);
    console.log("Materia " + materiaDropdown);
    console.log("Situación: " + situacionDropdown);
  
    // Construir la URL de consulta
    //var apiUrl = `http://localhost:3000/api/consulta?codigo=${codigo}&nombre=${nombre}&apellido=${apellido}&dsctoVarios=${dsctoVarios}`;
    var apiUrl = `http://localhost:3005/api/v1/codigo?codigo=${codigo}&`
  
    try {
      // Realizar la llamada a la API
      var response = await fetch(apiUrl);
      var data = await response.json();
  
      // Poblando una plantilla HTML con los datos
      var template = `
        <ul>
          <li><strong>Código:</strong> ${data.codigo}</li>
          <li><strong>Código de Predio:</strong> ${data.codPredio}</li>
          <li><strong>Años:</strong> ${data.anioDropdown}</li>
          <li><strong>Dscto. Varios:</strong> ${data.dsctoVariosChecked ? 'Sí' : 'No'}</li>
          <!-- Agregar más campos según sea necesario -->
        </ul>
      `;
  
      // Mostrar los resultados en la sección de resumen de consulta
      var resumenConsultaElement = document.getElementById("resumenConsulta");
      resumenConsultaElement.innerHTML = template;
    } catch (error) {
      console.error("Error al consumir la API:", error);
    }
    
  });