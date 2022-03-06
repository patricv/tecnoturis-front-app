import React, {useState, useEffect} from "react";
import {getAllHotels} from "../../services/hotels";
import Hotel from '../Hotel'
import "./hotellist.css"



export default function ListOfHotels({name, rating}){
    const [hotels, setHotels] = useState([])
   useEffect(()=>{
    getAllHotels(name, rating).then(hotels=>{
        setHotels(hotels.hotels)
    })
   },[])

    return(
        
        <div className="list-hotel">
            
            {hotels.map(({id, name, hotelRating}) =>
               
               <Hotel
               id={id}
               key={id}
               name={name}
               hotelRating={hotelRating}
               />

            )}
        </div>
    )
}