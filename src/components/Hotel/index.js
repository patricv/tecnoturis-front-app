import React, {useState, useEffect} from "react";
import { Link } from "wouter";



export default function Hotel({name, hotelRating, id}){

    return(
        
            <div>
                <Link to={`/hotel/${id}`}>
                    <h4 className="name">{name}</h4>
                </Link>
            </div>
        
        
    )
}