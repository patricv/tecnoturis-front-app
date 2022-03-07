import React from 'react';
import HotelDetails from '../../components/HotelDetails';


export default function HotelDetailsPage({ params }) {
    const { id } = params
    return <div>
        <HotelDetails id={id}></HotelDetails>
    </div>
}
