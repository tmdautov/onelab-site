const API_URL = 'https://oneshop-back.herokuapp.com';

export async function getDirection(id) {
  return fetch(`${API_URL}/directions/${id}`).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}

export default async function getDirections() {
  return fetch(`${API_URL}/directions`).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}
