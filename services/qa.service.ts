const URL = "https://oneshop-back.herokuapp.com";
export async function getQuestions() {
    return fetch(`${URL}/qa`).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            const error = await response.json();
            throw new Error(error.message);
        }
    });
}