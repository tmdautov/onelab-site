const API_URL = 'https://oneshop-back.herokuapp.com';
export async function getQuestions() {
  return fetch(`${API_URL}/qa/`).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  });
}

export default async function postQuestion(fd) {
  return fetch(`${API_URL}/qa/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
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
