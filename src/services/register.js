const apiURL = "http://localhost:80/users/register"

export default function login(username, password){
   return fetch(apiURL,{
       method:'POST',
       headers: {
        "Content-Type": "application/json"
      },
       body: JSON.stringify({username, password})
   })
        .then(res => res.json())
        .then(response =>{
            const {data} = response
            console.log(data)
            return data
        })
}