// llamada a la Api:

async function obtenerDatosDeAPI() {
    try {
      const urlAPI = 'http://localhost:3005/api/v1/contribuyentes/'; // Reemplaza con la URL de la API que deseas utilizar
      const respuesta = await fetch(urlAPI);
  
      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
      }
  
      const datos = await respuesta.json();
      console.log('Datos obtenidos:', datos);
  
      // Puedes realizar más operaciones con los datos aquí
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Llamada a la función para obtener datos de la API
  obtenerDatosDeAPI();