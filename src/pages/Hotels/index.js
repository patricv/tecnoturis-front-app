import React, {useState, useEffect} from 'react';
import ListOfHotels from '../../components/ListOfHotels';
import Filters from '../../components/Filters';
import {useLocation} from "wouter"


export default function HotelsPage(){
   const [name, setName] = useState("")
   const [rating, setRating] = useState()

   const handleFilters = ({name, rating})=>{
    setName(name)
    setRating(rating)
   }

    return <div>
      <Filters handleFilters={handleFilters}></Filters>
      <ListOfHotels name={name} rating={rating}></ListOfHotels>
    </div>
}


