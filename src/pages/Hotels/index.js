import React, {useState, useEffect} from 'react';
import ListOfHotels from '../../components/ListOfHotels';
import {setTokenTecnoturist, getToken} from '../../services/hotels'
import {useLocation} from "wouter"


export default function HotelsPage(){
   const [, navigate] = useLocation()
    useEffect(() => {
        
      }, [])
    return <div>
    <ListOfHotels></ListOfHotels>
    </div>
}


