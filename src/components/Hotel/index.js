import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import './hotel.css'



export default function Hotel({ name, hotelRating, id }) {

    return (

        <div className="item">
            <div className="item-name">
                <Link to={`/hotel/${id}`} style={{ textDecoration: 'none' }}>
                    Name: {name}</Link>
            </div>
            <div className="item-rating">
                Rating: {hotelRating}
            </div>

        </div>


    )
}