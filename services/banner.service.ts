const API_URL = "http://oneshop-back.herokuapp.com";

export default async function getBanners() {
  return fetch(`${API_URL}/banners`).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}
