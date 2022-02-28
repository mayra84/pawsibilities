import React from 'react'
import { useEffect, useState } from "react";
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import ProductSimple from './WeatherCard';

export default function Weather() {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect (() => {
        fetchWeather()
    }, [])


    const fetchWeather = () => {
        fetch('http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=30075&')
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                console.log(weather)
                console.log(weather.current.condition.text)
                setCurrentWeather(weather)
            })
    }

    return (

        <div >
            {currentWeather&& (
            <Box>
                    <h1>Weather</h1>
                    <div>{currentWeather.location.name}</div>
                    <ProductSimple key={currentWeather.lat} weather = {currentWeather} />
            </Box>
            )}



        </div>
    )
}