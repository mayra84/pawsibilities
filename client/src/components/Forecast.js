import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import React from 'react';


export default function ForecastCard(props) {
    const { weather } = props
    // console.log(park)
    return (
        //   <Center py={12}>
        <div  >
                <Center >
                <Image
              mt="15px"
              rounded={'lg'}
              height={120}
              width={122}
              objectFit={'cover'}
              src={weather.condition.icon}
            />
            </Center>
             <div className='textBox' >
             <Heading fontSize={'m'} fontFamily={'body'} fontWeight={500} pt = "5px">
                    {weather.condition.text}
                </Heading>
                <Text color={'black'} fontSize={'sm'} >
                    {weather.temp_f}°F
                </Text>
                <Text color={'black'} fontSize={'sm'} >
                    Feels like {weather.feelslike_f}°F 
                </Text>
                <Text fontWeight={800} fontSize={'s'} pl = "5px" pr ="5px">
                    {weather.time[11]} {weather.time[12]} {weather.time[13]} {weather.time[14]} {weather.time[15]}
                </Text>
            </div>
            </div>
    )
}