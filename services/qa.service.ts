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
};

export default async function postQuestion(fd) {
    return fetch(`${URL}/qa/`, {
        method: "POST",
        body: fd,
    }).then(async (response) => {
        if (response.ok) {
            return response.json();
        } 
        else {
            const error = await response.json();
            console.log(error.message);
        }
    });
}