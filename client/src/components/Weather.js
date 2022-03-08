import React from 'react'
import { useEffect, useState } from "react";
import { Box, Button, Center, Heading, Link, propNames, SimpleGrid, useRangeSlider } from '@chakra-ui/react'
import ProductSimple from './WeatherCard';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import ForecastCard from './Forecast';
import SmoothList from 'react-smooth-list';


function Weather({ currentUser }) {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    // console.log("this is the ", currentUser)
    // const {users} = props;

    useEffect(() => {
        if (!currentUser) {
            return
        }
        fetchWeather(currentUser)
    }, [currentUser])
    useEffect(() => {
        if (!currentUser) {
            return
        }
        fetchForecast(currentUser)
    }, [currentUser])


    const fetchWeather = async (currentUser) => {

        await fetch(`http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                // console.log(weather)
                // console.log(weather.current.condition.text)
                setCurrentWeather(weather)
            })
    }
    const fetchForecast = async (currentUser) => {

        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                // console.log(weather)
                // console.log(weather.forecast.forecastday[0].hour)
                const forecastStuff = weather.forecast.forecastday[0].hour
                // console.log(forecastStuff)
                setForecast(forecastStuff)
            })
    }
    // console.log(forecast)

    // axios.get('/api/v1/users')
    // .then(res => {
    //     console.log(res.data[0].zipcode)
    //     fetchWeather(res.data)
    // })


    return (
        <SmoothList transitionDuration={1400}>
            <div >
                <Center>
                    {currentWeather && (
                        <Box m="10px">
                            {/* <h1>Weather</h1>
                    <div>{currentWeather.location.name}</div> */}
                            <SmoothList transitionDuration={1400}><ProductSimple key={currentWeather.lat} weather={currentWeather} />      </SmoothList>
                        </Box>
                    )}
                </Center>

                <SmoothList transitionDuration={1400}>
                        <Box  h={'auto'}  w = {'auto'}bg="#83C5BE"  m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='result'>
                            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
                                {forecast?.length && forecast.map((weather) => {
                                    return <ForecastCard key={weather.time_epoch} weather={weather} />
                                })}
                            </SimpleGrid>
                </Box>
        </SmoothList>

        </div >
        </SmoothList >
        
    )

}

const mapStateToProps = (state) => {
    // console.log("Weather componenet", state)
    const { currentUser } = state.user
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Weather) 