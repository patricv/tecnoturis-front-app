
const apiURL="http://localhost:80/tecnoturist/"
const apiURLTecnoturist="https://dev.tecnoturis.es/api-rest/hotels/api/v1/hotels"
let token = null
let tokenTecnoturist = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const setTokenTecnoturist = newToken => {
    tokenTecnoturist = `Bearer ${newToken}`
}

const getToken = async()=>{
    
    return fetch(apiURL+'token',{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
        }
          
    }).then(res => {
                if (!res.ok) throw new Error('Response is NOT ok')
                return res.json()
            })
            .then(response =>{
                return response
            })
        }

const getAllHotels = async(name, rating) => {
    var url = new URL(apiURL+'hotels'),
    params = {name, rating}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return await fetch(url,{
        method:'GET',
        headers: {
         "Content-Type": "application/json",
         'Authorization': `${token}`,
       }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    })
    .then(response =>{
        return response
    })

  }

  const getHotel = async(id) => {

    return await fetch(apiURL+'hotel/'+id,{
        method:'GET',
        headers: {
         "Content-Type": "application/json",
         'Authorization': `${token}`,
       }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    })
    .then(response =>{
        return response
    })

  }


export { getAllHotels, setToken, getToken, setTokenTecnoturist, getHotel}