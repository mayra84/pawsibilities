import React from 'react'
import { useEffect, useState } from "react";
import { Box, SimpleGrid } from '@chakra-ui/react'
import { connect } from 'react-redux';
import ForecastCard from './Forecast';
import SmoothList from 'react-smooth-list';


function Weather2({ currentUser }) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        if (!currentUser) {
            return
        }
        fetchForecast(currentUser)
    }, [currentUser])

    const fetchForecast = async (currentUser) => {

        await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
            .then((res) => res.json())
            .then((data) => {
                var weather = data
                const forecastStuff = weather.forecast.forecastday[0].hour
                setForecast(forecastStuff)
            })
    }
    return (
        <div >
                <SmoothList transitionDuration={1400}>
                        <Box  h={'auto'}  w = {'auto'} bg="#83C5BE" m="10px" borderWidth='1px' borderRadius='lg' overflow='hidden' className='result' >
                            <SimpleGrid  mb="45px" columns={{ sm: 3, md: 6, lg: 12 }}>
                                { forecast.map((weather) => {
                                    return <ForecastCard key={weather.time_epoch} weather={weather} />
                                })}
                            </SimpleGrid>
                </Box>
        </SmoothList>
        </div>
    )

}

const mapStateToProps = (state) => {
    const { currentUser } = state.user
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Weather2) 