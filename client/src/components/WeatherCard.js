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


export default function ProductSimple(props) {
    const { weather } = props
    // console.log(weather)
    return (

    // <Center>
        <Box 
          role={'group'}
          p={6}
          w={'auto'}
          h={'376px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Flex
           justify={'center'}
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'120px'}
            >
            <Image
              mt="30px"
              rounded={'lg'}
              height={170}
              width={222}
              objectFit={'cover'}
              src={weather.current.condition.icon}
            />
          </Flex>
          <Stack pt={20} align={'center'} >
            <Text color={'gray.500'} fontSize={'lg'} textTransform={'uppercase'}>
             {weather.current.temp_f}°F
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {weather.current.condition.text}
            </Heading>
            <Stack direction={'row'} justify={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               {weather.location.name}, {weather.location.region}
              </Text>
            </Stack>
            <Text fontWeight={800} fontSize={'xl'} pl = "5px" pr ="5px">
                    {weather.location.localtime[11]} {weather.location.localtime[12]} {weather.location.localtime[13]} {weather.location.localtime[14]} {weather.location.localtime[15]}
                </Text>
          </Stack>
        </Box>

    );
}