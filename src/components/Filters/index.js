import React, {useState, useEffect} from "react";



export default function Filters({handleFilters}){
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleFilters({name,rating})
        
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <label>
                Name
                <input
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
            </label>
            <label>
                Hotel rating
                <input
                value={rating}
                onChange={(e)=>{setRating(e.target.value)}}
                />
            </label>
            <button>
                Search
            </button>
        </form>
        </>
    )
}