
const apiURL = "http://localhost:80/tecnoturist/"
let token = null


const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const setTokenInApp = () => {

    const userJSON = window.localStorage.getItem('user')
    if (userJSON) {
        const user = JSON.parse(userJSON)
        setToken(user.token)
    }

}

const getToken = async () => {
    if (!token) {
        setTokenInApp()
    }

    return await fetch(apiURL + 'token', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
        }

    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    })
        .then(response => {
            return response
        })
}

const getAllHotels = async (name, rating) => {
    var url = new URL(apiURL + 'hotels/'),
        params = { name, rating }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    if (!token) {
        setTokenInApp()
    }
    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
        }
    }).then(res => {
        if (!res.ok) throw new Error('Something went wrong')
        return res.json()
    })
        .then(response => {
            return response
        })
}

const getHotel = async (id) => {

    if (!token) {
        setTokenInApp()
    }

    return await fetch(apiURL + 'hotel/' + id, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    })
        .then(response => {
            return response
        })

}


export { getAllHotels, setToken, getToken, getHotel }