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


export default function ParkCard(props) {
    const { park } = props
    console.log(park)
    return (

        //   <Center py={12}>
        <Box maxW='sm' m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='resultBox'>
            <div className='textBox'>
                <Heading fontSize={'m'} fontFamily={'body'} fontWeight={500}>
                    {park.name}
                </Heading>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {park.rating}
                </Text>
                <Text fontWeight={800} fontSize={'s'}>
                    {park.formatted_address}
                </Text>
            </div>
            <Center>
                <Image
                    rounded={'lg'}
                    height={100}
                    width={100}
                    objectFit={'cover'}
                    src={park.icon}
                />
            </Center>
        </Box>

    )
}