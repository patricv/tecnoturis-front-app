const apiURL = "http://localhost:80/users/"


export default async function login(username, password){
   return fetch(apiURL+'login',{
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
            return response
        })
    }