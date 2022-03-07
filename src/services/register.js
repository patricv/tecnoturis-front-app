const apiURL = "http://localhost:80/users/register"

export default function register(username, password) {
    return fetch(apiURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => {
            if (!res.ok) throw new Error('Something went wrong')
            return res.json()
        })
        .then(response => {
            const { data } = response
            return data
        })
}