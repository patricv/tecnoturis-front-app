import React, { useState, useEffect } from 'react';
import HotelDetails from '../../components/HotelDetails';
import { useLocation } from "wouter"


export default function HotelDetailsPage({ params }) {
    const { id } = params
    return <div>
        <HotelDetails id={id}></HotelDetails>
    </div>
}
