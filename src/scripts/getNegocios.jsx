const getNegocios = async () => {
    try {
      const response = await fetch("https://diegocc14.pythonanywhere.com/negocios");
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los negocios:', error);
      return null;
    }
  }
  
export default getNegocios  