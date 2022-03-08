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
          <Flex
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'120px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${weather.icon})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              mt="15px"
              rounded={'lg'}
              height={170}
              width={222}
              objectFit={'cover'}
              src={weather.current.condition.icon}
            />
          </Flex>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'lg'} textTransform={'uppercase'}>
             {weather.current.temp_f}°F
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