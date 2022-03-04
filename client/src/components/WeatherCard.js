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
        <Center py={12}>
            <Box
                role={'group'}
                pb={6}
                maxW={'230px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                {/* {weather.current.condition.text='Sunny'
                } ( */}
                    {/* <div> */}
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'200px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 10,
                                left: 0,
                                backgroundImage: `url('https://media.istockphoto.com/photos/summer-noon-sun-picture-id1312596921?s=612x612')`,
                                filter: 'blur(3px)',
                                zIndex: -1,
                            }}
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
                        {/* </div> */}
                        {/* ):
                         (      <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'150px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 6,
                                left: 0,
                                backgroundImage: `url('https://media.istockphoto.com/photos/beautifully-structured-thunderstorm-in-bulgarian-plains-picture-id1263562386?k=20&m=1263562386&s=612x612&w=0&h=z7Qxzy11pvU41aTCEXfod1Fyn_-kpn9hbyw0kNq9vWs=')`,
                                filter: 'blur(3px)',
                                zIndex: -1,
                            }}
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
                            /> */}
                        {/* </Box>) */}

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
        </Center >
    );
}