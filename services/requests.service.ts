const API_URL = 'https://oneshop-back.herokuapp.com';

export default async function postRequest(fd) {
  return fetch(`${API_URL}/requests/`, {
    method: 'POST',
    body: fd,
  }).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}
