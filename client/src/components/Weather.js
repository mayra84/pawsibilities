import React from 'react'
import { useEffect, useState } from "react";
import { Box, Button, Heading, Link, propNames, useRangeSlider } from '@chakra-ui/react'
import ProductSimple from './WeatherCard';
import axios from 'axios';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';


function Weather({currentUser}) {
    const [currentWeather, setCurrentWeather] = useState(null);
console.log ("this is the ", currentUser)
    // const {users} = props;
    
    useEffect (() => {
        if (!currentUser) {
            return 
        }
        fetchWeather(currentUser)
    }, [currentUser])

    const fetchWeather = async (currentUser) => {

        await fetch(`http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                console.log(weather)
                console.log(weather.current.condition.text)
                setCurrentWeather(weather)
            })
}

    // axios.get('/api/v1/users')
    // .then(res => {
    //     console.log(res.data[0].zipcode)
    //     fetchWeather(res.data)
    // })


    return (

        <div >
            {currentWeather&& (
            <Box>
                    {/* <h1>Weather</h1>
                    <div>{currentWeather.location.name}</div> */}
                    <ProductSimple key={currentWeather.lat} weather = {currentWeather} />
            </Box>
            )}



        </div>
    )

}

const mapStateToProps = (state) => {
    console.log("Weather componenet" , state)
    const {currentUser} = state.user
    return {
        currentUser
    }
}

export default connect(mapStateToProps) (Weather) 