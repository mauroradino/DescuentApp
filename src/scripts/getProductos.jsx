const getProductos = async () => {
    
    const url = new URL('https://diegocc14.pythonanywhere.com/productos');
    const params = { page: 0 };
    
    // Añadir parámetros de consulta a la URL
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    fetch(url, {
        method: 'GET', // Método GET
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
}
    export default getProductos  