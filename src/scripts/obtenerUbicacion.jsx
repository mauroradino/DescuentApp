const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !navigator.geolocation) {
        resolve([-34.6037, -58.3816]);
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve([coords.latitude, coords.longitude]);
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          resolve([-34.6037, -58.3816]);
        }
      );
    });
  };

  export default getLocation