function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        return response.blob();
      })
      .then((data) => {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      })
      .catch((error) => reject(error));
  });
}

getBase64FromUrl(
  'https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8'
)
  .then(console.log)
  .catch(console.error);
