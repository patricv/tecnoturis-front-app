import React, {useState, useEffect} from "react";
import {getHotel} from "../../services/hotels";
import Hotel from '../Hotel'



export default function ListOfHotels({id}){
    const [hotel, setHotel] = useState({})
   useEffect(()=>{
    getHotel(id).then(hotel=>{
        setHotel(hotel.hotel)
    })
   },[])

    return(
        <div>
            <div>{hotel.name}</div>
            <div>{hotel.address1}</div>
            <div>{hotel.hotelRating}</div>
            <div>{hotel.shortDescription}</div>
            <div>{hotel.tripAdvisorRatingUrl}</div>
        </div>
    )
}