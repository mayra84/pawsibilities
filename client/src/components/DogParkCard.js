import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
} from '@chakra-ui/react';
import React from 'react';


export default function ParkCard(props) {
    const { park } = props
    // console.log(park)
    return (

        <Flex direction = "column" bg="white" maxW='sm' m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='resultBox'>
            <div className='textBox'>
                <Heading fontSize={'m'} fontFamily={'body'} fontWeight={500} pt="5px">
                    {park.name}
                </Heading>
                <Text color={'gray.500'} fontSize={'md'}>
                    Rating: {park.rating}/5
                </Text>
                <Text fontWeight={800} fontSize={'s'} pl="5px" pr="5px" pb= "5px">
                    {park.formatted_address}
                </Text>
            </div>
            <Center mt={'auto'}>
                <Image
                mb= "10px"
                    rounded={'lg'}
                    height={100}
                    width={100}
                    objectFit={'cover'}
                    src={park.icon}
                />
             
            </Center>
        </Flex>   


    )
}