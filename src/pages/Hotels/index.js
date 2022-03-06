import React, {useState, useEffect} from 'react';
import ListOfHotels from '../../components/ListOfHotels';
import Filters from '../../components/Filters';
import {useLocation} from "wouter"
import "./list.css"


export default function HotelsPage(){
   const [name, setName] = useState("")
   const [rating, setRating] = useState()

   const handleFilters = ({name, rating})=>{
    setName(name)
    setRating(rating)
   }

    return <div>
      <Filters handleFilters={handleFilters}></Filters>
      <ListOfHotels className ="list-hotel" name={name} rating={rating}></ListOfHotels>
    </div>
}


