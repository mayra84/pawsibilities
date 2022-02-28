import React, { useState } from 'react'
import { useEffect } from "react";
import { Box, Button, Heading, Link } from '@chakra-ui/react'

export default function Weather () {
    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect (() => {
        fetchWeather()
    }, [])


    const fetchWeather = () => {
        fetch('http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=30075&')
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                console.log(weather.location.name)
                console.log(weather.current.condition.text)
                setCurrentWeather(weather)
            })
    }

    return (

        <div>
<Box>
    {currentWeather.map(weather => {
        return <div>{weather.location.name}</div>
    })}
</Box>
            <h1>Weather</h1>
         <h1>{}</h1>
         

         
        </div>
    )
}
