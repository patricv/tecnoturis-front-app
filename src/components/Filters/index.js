import React, {useState, useEffect} from "react";
import './filters.css'


export default function Filters({handleFilters}){
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleFilters({name,rating})
        
    }

    return(
        <>
        <form className='form-filter' onSubmit={handleSubmit}>
            <label>
                Name
                <input
                type="search"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
            </label>
            <label>
                Hotel rating
                <input
                type="number"
                value={rating}
                onChange={(e)=>{setRating(e.target.value)}}
                />
            </label>
            <div>
                <button className="form-filter-btn">
                    Search
                </button>
            </div>
            
        </form>
        </>
    )
}