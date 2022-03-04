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


export default function ProductSimple(props) {
    const { weather } = props
    console.log(weather)
    return (

    //   <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'200px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'150px'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={weather.current.condition.icon}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             {weather.current.temp_f}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {weather.current.condition.text}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               {weather.location.name}, {weather.location.region}
              </Text>
            </Stack>
          </Stack>
        </Box>
    //   </Center>

    );
}