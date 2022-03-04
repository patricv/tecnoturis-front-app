const apiURL = "http://localhost:80/users/login"

export default function login(username, password){
    console.log(username)
   return fetch(apiURL,{
       method:'POST',
       headers: {
        "Content-Type": "application/json"
      },
       body: JSON.stringify({username, password})
   })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok')
            return res.json()
        })
        .then(response =>{
            const {data} = response
            const {jwt} = data
            return jwt
        })
    }