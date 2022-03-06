import React, {useState, useEffect} from "react";
import {getAllHotels} from "../../services/hotels";
import Hotel from '../Hotel'



export default function ListOfHotels(){
    const [hotels, setHotels] = useState([])
   useEffect(()=>{
    getAllHotels().then(hotels=>{
        setHotels(hotels.hotels)
    })
   },[])

    return(
        <div>
            
            {hotels.map(({id, name, hotelRating}) =>
               
               <Hotel
               id={id}
               key={id}
               name={name}
               />

            )}
        </div>
    )
}