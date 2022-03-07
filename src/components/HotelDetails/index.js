import React, { useState, useEffect } from "react";
import { getHotel } from "../../services/hotels";
import "./details.css"



export default function HotelDetails({ id }) {
    const [hotel, setHotel] = useState({})
    useEffect(() => {
        getHotel(id).then(hotel => {
            setHotel(hotel.hotel)
        })
    }, [])

    return (

        <div className="item-detail-hotel">
            <div className="item-detail-name">
                <div className="item-detail-name-title">Name:</div>
                <div className="item-detail-name-value">{hotel.name}</div>
            </div>
            <div className="item-detail-name">
                <div className="item-detail-name-title">Address:</div>
                <div className="item-detail-name-value">{hotel.address1}</div>
            </div>
            <div className="item-detail-name">
                <div className="item-detail-name-title">Hotel rating:</div>
                <div className="item-detail-name-value">{hotel.hotelRating}</div>
            </div>
            <div className="item-detail-name">
                <div className="item-detail-name-title">Description:</div>
                <div className="item-detail-name-value">{hotel.shortDescription}</div>
            </div>
            <div className="item-detail-name">
                <div className="item-detail-name-title">Tripadvisor rating:</div>
                <div className="item-detail-name-value">{hotel.tripAdvisorRating}</div>
            </div>
        </div>
    )
}