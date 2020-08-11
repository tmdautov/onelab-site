const API_URL = 'https://oneshop-back.herokuapp.com';

export default async function getBanners() {
  return fetch(`${API_URL}/media-images`).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}
