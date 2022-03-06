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
            if (!res.ok && res.status===400) throw new Error('Credentials are invalid')
            if (!res.ok && res.status!==400) throw new Error('Somenthing went wrong')
            return res.json()
        })
        .then(response =>{
            return response
        })
    }